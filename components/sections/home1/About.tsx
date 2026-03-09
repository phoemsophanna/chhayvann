
import { api } from "@/app/config";
import RoundTextScript from "@/components/elements/CircleText";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { createChart, CandlestickSeries, ColorType } from "lightweight-charts";
import { echo } from "@/utils/echo";

export default function About({homepage}:any) {
    const { t } = useTranslation();
    const [realBuy, setRealBuy] = useState<any>(0);
    const [realSell, setRealSell] = useState<any>(0);
    const [TLBuy, setTLBuy] = useState<any>(0);
    const [TLSell, setTLSell] = useState<any>(0);
    const [KGBuy, setKGBuy] = useState<any>(0);
    const [KGSell, setKGSell] = useState<any>(0);
    const chartContainerRef = useRef<any>(null);
    const chartRef = useRef<any>(null);
    const seriesRef = useRef<any>(null);

    useEffect(() => {
        echo?.channel("xauusd")
            .listen(".price.updated", (e:any) => {
                try {
                    if(!e.price.status){
                        e.price?.map((row: any) => {
                            if(row.PAIR == "XAUUSD"){
                                setRealBuy(row.BID);
                                setRealSell(row.ASK);
                                if(row.BID){
                                    setTLBuy(row.BID * 1.206);
                                    setKGBuy(row.BID * 32.148)
                                }
                                
                                if(row.ASK) {
                                    setTLSell(row.ASK * 1.206);
                                    setKGSell(row.ASK * 32.148);
                                }
                            }
                        })
                    }
                } catch (error) {
                    console.log(error)
                }
            });

        return () => {
            echo?.leave("xauusd");
        };
    },[]);

    useEffect(() => {
        if (!chartContainerRef.current) return;
        let isMounted = true;
        let timeout: any;
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 250,
            layout: {
                background: { type: ColorType.Solid, color: "#ffffff" },
                textColor: "#333333",
            },
            grid: {
                vertLines: { visible: false },
                horzLines: { 
                    color: "#e1e1e1", 
                    style: 2,
                },
            },
            rightPriceScale: {
                borderColor: '#333333',
                visible: false
            },
            leftPriceScale: {
                borderColor: "#444",
                visible: true
            },
            timeScale: {
                borderColor: '#333333',
                timeVisible: true,
                secondsVisible: false,
                barSpacing: 10,
            },
        });

        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#3486b8',
            downColor: '#e3534f',
            borderVisible: false,
            wickUpColor: '#3486b8',
            wickDownColor: '#e3534f',
        });

        chartRef.current = chart;
        seriesRef.current = candleSeries;

        const fetchGraph = async () => {
            try {
                const res = await axios.get(`${api.BASE_URL}/trading-graph`);

                if (res.data?.graph && isMounted) {
                    const formattedData = res.data.graph.map((row:any) => ({
                        time: Number(dayjs(row.real_time).unix()) + 25200, 
                        open: Number(row.open),
                        high: Number(row.high),
                        low: Number(row.low),
                        close: Number(row.close),
                    }));

                    formattedData.sort((a:any, b:any) => a.time - b.time);

                    if (seriesRef.current) {
                        seriesRef.current.setData(formattedData);
                    }
                }
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                timeout = setTimeout(fetchGraph, 60000);
            }
        };

        fetchGraph();

        return () => { 
            isMounted = false;
            clearTimeout(timeout);
            chart.remove(); 
        };
    }, []);

    const formatUSD = (value: any) => {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    };

  return (
    <>
        <section className="about-style1">
            <RoundTextScript />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-4">
                        <div className="about-style1__content wow fadeInRight animated" data-wow-delay="00ms"
                            data-wow-duration="1500ms">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>{homepage?.subtitle}</h4>
                                </div>
                                <h2>{homepage?.companyName}</h2>
                            </div>
                            <div className="text">
                                <div dangerouslySetInnerHTML={{__html: homepage?.aboutCompany}} />
                            </div>
                            <div className="btn-box">
                                <Link href="/about">
                                    {t("ReadMore")}
                                    <i className="icon-right-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-style1__img" style={{marginRight: 0}}>
                            <div className="value-exchange">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{t("XAU")}-{t("USD")}</th>
                                            <th>{t("SELL")}</th>
                                            <th>{t("BUY")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bottom">
                                            <td className="text-start">MKT</td>
                                            <td colSpan={2} className="text-end">Value: {dayjs().format('DD-MMM-YYYY')}</td>
                                        </tr>
                                        <tr className="bottom">
                                            <td>{t("KG")}</td>
                                            <td className="center">{formatUSD(KGBuy)}</td>
                                            <td>{formatUSD(KGSell)}</td>
                                        </tr>
                                        <tr className="bottom">
                                            <td>{t("OZ")}</td>
                                            <td className="center">{formatUSD(realBuy)}</td>
                                            <td>{formatUSD(realSell)}</td>
                                        </tr>
                                        <tr>
                                            <td>{t("TL")}</td>
                                            <td className="center">{formatUSD(TLBuy)}</td>
                                            <td>{formatUSD(TLSell)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <div className="content-title">
                                    <h6>{t("XAU")}-{t("USD")}</h6>
                                </div>
                                <div className="content-item">
                                    <div className="date">
                                        <span>MKT</span>
                                        <span>Value: {dayjs().format('DD-MMM-YYYY')}</span>
                                    </div>
                                    <div className="content-price" style={{display: "flex",flexWrap: "nowrap"}}>
                                        <div className="title">
                                            <span className="value">
                                                {t("TL")}
                                            </span>
                                        </div>
                                        <div className="sell">
                                            <span className="value">
                                                {formatUSD(TLBuy)}
                                            </span>
                                            <h6>{t("SELL")} {t("XAU")}</h6>
                                        </div>
                                        <div className="buy">
                                            <span className="value">
                                                {formatUSD(TLSell)}
                                            </span>
                                            <h6>{t("BUY")} {t("XAU")}</h6>
                                        </div>
                                    </div>
                                    <div className="content-price" style={{display: "flex",flexWrap: "nowrap"}}>
                                        <div className="title">
                                            <span className="value">
                                                {t("OZ")}
                                            </span>
                                        </div>
                                        <div className="sell">
                                            <span className="value">
                                                {formatUSD(realBuy)}
                                            </span>
                                            <h6>{t("SELL")} {t("XAU")}</h6>
                                        </div>
                                        <div className="buy">
                                            <span className="value">
                                                {formatUSD(realSell)}
                                            </span>
                                            <h6>{t("BUY")} {t("XAU")}</h6>
                                        </div>
                                    </div>
                                    <div className="content-price" style={{display: "flex",flexWrap: "nowrap"}}>
                                        <div className="title">
                                            <span className="value">
                                                {t("KG")}
                                            </span>
                                        </div>
                                        <div className="sell">
                                            <span className="value">
                                                {formatUSD(KGBuy)}
                                            </span>
                                            <h6>{t("SELL")} {t("XAU")}</h6>
                                        </div>
                                        <div className="buy">
                                            <span className="value">
                                                {formatUSD(KGSell)}
                                            </span>
                                            <h6>{t("BUY")} {t("XAU")}</h6>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="graph-exchange">
                                <div className="chart-title">
                                    <h6>Graph: {t("XAU")}-{t("USD")}</h6>
                                </div>
                                <div
                                    ref={chartContainerRef}
                                    style={{ width: "100%", height: "250px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}