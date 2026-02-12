
import { api } from "@/app/config";
import RoundTextScript from "@/components/elements/CircleText";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function About({homepage}:any) {
    const { t } = useTranslation();
    const [buy, setBuy] = useState<any>([]);
    const [realBuy, setRealBuy] = useState<any>(0);
    const [realSell, setRealSell] = useState<any>(0);

    useEffect(() => {
        async function poll() {
            await axios.get(`${api.BASE_URL}/trading-api`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res:any) => {
                if(res.data?.data){
                    res.data?.data?.map((row: any) => {
                        if(row.PAIR == "XAUUSD"){
                            setRealBuy(row.BID);
                            setRealSell(row.ASK);
                        }
                    })
                }
            })

            setTimeout(poll, 1000);
        }

        poll();
    },[]);

    useEffect(() => {
        async function pollGraph() {
            await axios.get(`${api.BASE_URL}/trading-graph`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res:any) => {
                if(res.data?.graph){
                    const chartData = res.data?.graph?.map((row:any) => ({
                        time: dayjs(row.recorded_at).valueOf(),
                        price: Number(row.bid),
                        sell: Number(row.ask)
                    }));
                    setBuy(chartData);
                }
            })

            setTimeout(pollGraph, 15000);
        }

        pollGraph();
    },[]);

    const formatUSD = (value: any) => {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    };

    const generateFixedTicks = () => {
        const ticks = [];
        const startTime = dayjs().subtract(2, 'hour').startOf('minute'); 
        
        for (let i = 0; i <= 6; i++) {
            ticks.push(startTime.add(i * 20, 'minute').valueOf());
        }
        return ticks;
    };

  return (
    <>
        <section className="about-style1">
            <RoundTextScript />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-style1__img" style={{marginRight: 0}}>
                            <div className="value-exchange">
                                <div className="content-title">
                                    <h6>XAU-USD</h6>
                                </div>
                                <div className="content-item">
                                    <div className="date">
                                        <span>MKT</span>
                                        <span>Value: {dayjs().format('DD-MMM-YYYY')}</span>
                                    </div>
                                    <div className="sell">
                                        <span className="value">
                                            {formatUSD(realSell)}
                                        </span>
                                        <h6>{t("SELL")} XAU</h6>
                                    </div>
                                    <div className="buy">
                                        <span className="value">
                                            {formatUSD(realBuy)}
                                        </span>
                                        <h6>{t("BUY")} XAU</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="graph-exchange">
                                <div className="chart-title">
                                    <h6>Graph: XAU-USD</h6>
                                </div>
                                <ResponsiveContainer width="100%" height={250} style={{padding: 5}}>
                                    <LineChart data={buy}>
                                        <CartesianGrid stroke="#ccc" strokeDasharray="0 0" />

                                        <XAxis
                                            dataKey="time" 
                                            type="number"
                                            domain={[
                                                dayjs().subtract(2, 'hour').valueOf(),
                                                dayjs().valueOf()
                                            ]}
                                            ticks={generateFixedTicks()}
                                            tickFormatter={(time) => dayjs(time).format("HH:mm")}
                                            tick={{ fontSize: 12 }}
                                            allowDataOverflow={true} 
                                        />

                                        <YAxis
                                            domain={['dataMin - 5', 'dataMax + 5']}
                                            tick={{ fontSize: 12 }}
                                        />

                                        <Tooltip 
                                            labelFormatter={(value) => dayjs(value).format("DD MMM HH:mm:ss")}
                                        />

                                        <Line
                                            type="monotone"
                                            dataKey="price"
                                            stroke="red"
                                            name={t("Buy")}
                                            strokeWidth={2}
                                            dot={false}
                                            isAnimationActive={false}
                                        />

                                        <Line
                                            type="monotone"
                                            dataKey="sell"
                                            name={t("Sell")}
                                            stroke="blue"
                                            strokeWidth={2}
                                            dot={false}
                                            isAnimationActive={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                                <div className="color-value" style={{display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 16, fontWeight: 500, marginBottom: 10}}>
                                    <span style={{display: "block", height: 15, width: 25, boxShadow: "0px 0 10px #ededed", backgroundColor: "blue"}} /> 
                                    {t("Sell")} 
                                    <span style={{marginLeft: 5, display: "block", height: 15, width: 25,  boxShadow: "0px 0 10px #ededed", backgroundColor: "red"}} />
                                    {t("Buy")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
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

                </div>
            </div>
        </section>
    </>
  )
}