"use client";

import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Dropdowns from "@/components/elements/Dropdowns";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "../config";

export default function Exchange_Rate_Page() {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState("popular");
    const [exchangeSelected, setExchangeSelected] = useState<any>(null);
    const [banner, setBanner] = useState<any>(null);
    const [currency, setCurrency] = useState<any>([]);
    const [subCurrency, setSubCurrency] = useState<any>(null);
    const [exchanges, setExchanges] = useState<any>(null);
    const [exchange_rate, setExchangeRate] = useState<Record<string, number>>({});
    const [service, setService] = useState<any>(null);
    const [exchange, setExchange] = useState({from: "USD", to: "KHR"});
    const [amount, setAmount] = useState(0);
    const handleChange = (key: any, value: any) => {
        if(key == "from"){
            setExchange({...exchange, from: value?.type});
            const filterCurrency = currency?.filter((q:any,index:any) => q?.id != value?.id);
            setSubCurrency(filterCurrency);
        } else {
            setExchange({...exchange, to: value?.type});
            setExchangeSelected(value);
        }
    }

    const handleChangeAmount = (e: any) => {
        if(Number(e.target.value)){
            const amountTotalUSD = Number(e.target.value) / Number(exchange_rate[exchange.from]);
            const amounts = amountTotalUSD * Number(exchange_rate[exchange.to]);
            // console.log(amountTotalUSD,amounts,exchange_rate[exchange.from]);
            setAmount(amounts);
        }
    }

    useEffect(() => {
        axios.get(`${api.BASE_URL}/exchange`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": i18n.language
            }
        }).then((res) => {
            if(res.data.status == "success") {
                setBanner(res.data.banner);
                setCurrency(res.data.currency);
                setExchanges(res.data.exchange);
                setService(res.data.service);
            }
        });
    },[i18n.language]);

    useEffect(() => {
        if(currency.length > 0){
            const exchangeRate = currency?.reduce((acc: Record<string, number>, q: any) => {
                acc[q.type] = Number(q.rate);
                return acc;
            }, {}) || {};
            setExchangeRate(exchangeRate);
            setExchange({...exchange, from: currency[0]?.type});
            const filterCurrency = currency?.filter((q:any,index:any) => index != 0);
            setSubCurrency(filterCurrency);
        }
    },[currency]);

    useEffect(() => {
        if(subCurrency?.length > 0) {
            setExchangeSelected(subCurrency[0]);
            setExchange({...exchange, to: subCurrency[0]?.type});
        }
    },[subCurrency]);

    const formatUSD = (value: any) => {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    };

    return (
        <div>
            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle={t("HEADER.ExchangeRate")} breadcrumbTitleTwo={t("HEADER.Services")} breadcrumbImage={banner?.image}>
                {
                    exchanges?.length > 0 ? (
                        <section className="currency-pairs-style1">
                            <div className="container">
                                <div className="sec-title withtext text-center">
                                    <h2>{service?.title}</h2>
                                    <div className="text">
                                        <p>{service?.summary}</p>
                                    </div>
                                </div>

                                <div className="currency-pairs-style1__inner">
                                    <div className="currency-pairs-style1__tab">
                                        <div className="tabs-content-box">

                                            {activeTab === "popular" && (
                                            <div className="tab-content-box-item tab-content-box-item-active fadeIn" id="popular">
                                                <div className="currency-pairs-style1-tab-content-box-item">

                                                    <div className="single-currency-pairs-style1">
                                                        <div className="table-outer">
                                                            <table className="pricing-table">
                                                                <thead className="table-header">
                                                                    <tr>
                                                                        <th className="name">{t("Instrument")}</th>
                                                                        <th style={{width: "30%"}}>{t("Sell")}</th>
                                                                        <th style={{width: "30%"}}>{t("Buy")}</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        exchanges?.map((q:any,index:any) => (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    <div className="title" style={{justifyContent: "space-evenly"}}>
                                                                                        <img src={`${api.FILE_URL}${q?.image}`} style={{width: 120, marginRight: 15}} alt="" />
                                                                                        <h6>{q.from}</h6>
                                                                                        <div className="icon-box">
                                                                                            <i className="icon-exchange"></i>
                                                                                        </div>
                                                                                        <h6>{q.to}</h6>
                                                                                    </div>
                                                                                </td>

                                                                                <td className="sell">
                                                                                    {`${q?.sell}`}
                                                                                </td>
                                                                                <td className="buy">
                                                                                    {`${q?.buy}`}
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                
                            </div>
                        </section>
                    ) : ""
                }
                
                <section className="account-detail-style2">
                    <div className="container">
                        <div className="exchange-currency">
                            {
                                currency?.length > 0 ? (
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="content-currency">
                                                <div className="title">
                                                    <h2>{t("CurrencyConverter")}</h2>
                                                </div>
                                                <div className="contain-form">
                                                    <div className="from">
                                                        <h6>{t("FROM")}</h6>
                                                        <Dropdowns 
                                                            option={currency}
                                                            action={handleChange}
                                                            type={'from'}
                                                        >
                                                            <span><img src={api.FILE_URL + currency[0]?.image} alt={currency[0]?.image} /> {currency[0]?.type} <i className="fas fa-chevron-down"></i></span>
                                                        </Dropdowns>
                                                    </div>
                                                    <div className="compare-icon">
                                                        <span className="icon-arrow-right"></span>
                                                    </div>
                                                    <div className="to">
                                                        <h6>{t("TO")}</h6>
                                                        <Dropdowns 
                                                            option={subCurrency}
                                                            id={exchangeSelected?.id}
                                                            action={handleChange}
                                                            type={"to"}
                                                        >
                                                            <span><img src={api.FILE_URL + (exchangeSelected?.image)} alt={exchangeSelected?.image} /> {exchangeSelected?.type} <i className="fas fa-chevron-down"></i></span>
                                                        </Dropdowns>
                                                    </div>
                                                    <div className="amount">
                                                        <h6>{t("AMOUNT")}</h6>
                                                        <input type="text" onChange={handleChangeAmount} />
                                                        <h3>{exchange.to} {formatUSD(Number(amount))}</h3>
                                                        <h5>Updated Date: {exchangeSelected?.date}</h5>
                                                        <p>
                                                            {service?.convertSummary}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="content-img">
                                                <img src={`${api.FILE_URL}${service?.thumbnail}`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ) : ""
                            }
                        </div>
                    </div>
                </section>
                <section className="account-detail-style1" style={{zIndex: 0}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="account-detail-style1__content">
                                    <div className="intro-box">
                                        <div dangerouslySetInnerHTML={{__html: service?.description}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}
