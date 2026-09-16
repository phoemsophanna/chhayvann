"use client";

import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import Dropdowns from "@/components/elements/Dropdowns";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "../config";
import { sanitizeHtml } from "@/utils/sanitizeHtml";

export default function Exchange_Rate_Page() {
    const { t, i18n } = useTranslation();

    const [activeTab, setActiveTab] = useState("popular");

    const [exchangeSelected, setExchangeSelected] =
        useState<any>(null);

    const [banner, setBanner] = useState<any>(null);

    const [currency, setCurrency] = useState<any[]>([]);

    const [subCurrency, setSubCurrency] =
        useState<any[]>([]);

    const [exchanges, setExchanges] =
        useState<any[]>([]);

    const [service, setService] =
        useState<any>(null);

    const [amount, setAmount] = useState(0);

    const [inputAmount, setInputAmount] =
        useState("");

    const [lastUpdated, setLastUpdated] =
        useState<any>(null);

    /*
    |--------------------------------------------------------------------------
    | Exchange State
    |--------------------------------------------------------------------------
    |
    | from / to
    | = customer selected direction
    |
    | rateFrom / rateTo
    | = actual direction stored in database
    |
    */
    const [exchange, setExchange] = useState({
        from: "USD",
        fromKm: "",

        to: "KHR",
        toKm: "",

        rateFrom: "",
        rateTo: "",

        buy: 0,
        sell: 0,

        isTo: 0,
        isMultiply: 0,
    });

    /*
    |--------------------------------------------------------------------------
    | Which rate should converter use?
    |--------------------------------------------------------------------------
    |
    | "sell" is the default because the converter represents
    | the rate used when customer exchanges FROM -> TO.
    |
    */
    const [convertOption, setConvertOption] =
        useState<"buy" | "sell">("sell");

    /*
    |--------------------------------------------------------------------------
    | Normalize currency
    |--------------------------------------------------------------------------
    */
    const normalizeCurrency = (
        value: any
    ) => {
        return String(value ?? "")
            .trim()
            .toUpperCase();
    };

    /*
    |--------------------------------------------------------------------------
    | Find rate
    |--------------------------------------------------------------------------
    |
    | First find direct:
    |
    | USD -> KHR
    |
    | If not found, find reverse:
    |
    | KHR -> USD
    |
    */
    const findRate = (
        items: any[],
        from: string,
        to: string
    ) => {
        if (!Array.isArray(items)) {
            return null;
        }

        const customerFrom =
            normalizeCurrency(from);

        const customerTo =
            normalizeCurrency(to);

        /*
        |--------------------------------------------------------------------------
        | Direct
        |--------------------------------------------------------------------------
        */
        const direct = items.find(
            (item: any) =>
                normalizeCurrency(
                    item?.from
                ) === customerFrom &&
                normalizeCurrency(
                    item?.to
                ) === customerTo
        );

        if (direct) {
            return direct;
        }

        /*
        |--------------------------------------------------------------------------
        | Reverse
        |--------------------------------------------------------------------------
        */
        const reverse = items.find(
            (item: any) =>
                normalizeCurrency(
                    item?.from
                ) === customerTo &&
                normalizeCurrency(
                    item?.to
                ) === customerFrom
        );

        return reverse ?? null;
    };

    /*
    |--------------------------------------------------------------------------
    | Build TO currencies
    |--------------------------------------------------------------------------
    |
    | Example:
    |
    | Selected FROM = USD
    |
    | DB:
    |
    | USD -> KHR
    | USD -> THB
    | KHR -> USD
    | THB -> USD
    |
    | TO becomes:
    |
    | KHR
    | THB
    |
    */
    const buildSubCurrencies = (
        items: any[],
        customerFrom: string
    ) => {
        if (!Array.isArray(items)) {
            return [];
        }

        const from =
            normalizeCurrency(
                customerFrom
            );

        const result: any[] = [];

        items.forEach(
            (item: any) => {
                const itemFrom =
                    normalizeCurrency(
                        item?.from
                    );

                const itemTo =
                    normalizeCurrency(
                        item?.to
                    );

                /*
                |--------------------------------------------------------------------------
                | Direct
                |
                | USD -> KHR
                |--------------------------------------------------------------------------
                */
                if (
                    itemFrom === from &&
                    itemTo &&
                    itemTo !== from
                ) {
                    result.push({
                        ...item,

                        customerFrom:
                            from,

                        customerTo:
                            itemTo,
                    });

                    return;
                }

                /*
                |--------------------------------------------------------------------------
                | Reverse
                |
                | KHR -> USD
                |
                | Customer direction:
                |
                | USD -> KHR
                |--------------------------------------------------------------------------
                */
                if (
                    itemTo === from &&
                    itemFrom &&
                    itemFrom !== from
                ) {
                    result.push({
                        ...item,

                        customerFrom:
                            from,

                        customerTo:
                            itemFrom,
                    });
                }
            }
        );

        /*
        |--------------------------------------------------------------------------
        | Remove duplicate TO currencies
        |--------------------------------------------------------------------------
        */
        const unique =
            new Map<string, any>();

        result.forEach(
            (item: any) => {
                const key =
                    normalizeCurrency(
                        item?.customerTo
                    );

                if (
                    key &&
                    !unique.has(key)
                ) {
                    unique.set(
                        key,
                        item
                    );
                }
            }
        );

        return Array.from(
            unique.values()
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Set selected exchange
    |--------------------------------------------------------------------------
    */
    const setExchangeRate = (
        rate: any,
        customerFrom: string,
        customerTo: string
    ) => {
        if (!rate) {
            return;
        }

        const rateFrom =
            normalizeCurrency(
                rate?.from
            );

        const rateTo =
            normalizeCurrency(
                rate?.to
            );

        const finalFrom =
            normalizeCurrency(
                customerFrom
            );

        const finalTo =
            normalizeCurrency(
                customerTo
            );

        /*
        |--------------------------------------------------------------------------
        | Direct
        |--------------------------------------------------------------------------
        */
        const isDirect =
            finalFrom === rateFrom &&
            finalTo === rateTo;

        /*
        |--------------------------------------------------------------------------
        | Reverse
        |--------------------------------------------------------------------------
        */
        const isReverse =
            finalFrom === rateTo &&
            finalTo === rateFrom;

        let fromKm = "";
        let toKm = "";

        if (isDirect) {
            fromKm =
                rate?.fromKm ?? "";

            toKm =
                rate?.toKm ?? "";
        } else if (isReverse) {
            /*
            |--------------------------------------------------------------------------
            | Reverse Khmer names
            |--------------------------------------------------------------------------
            |
            | DB:
            |
            | KHR -> USD
            |
            | Customer:
            |
            | USD -> KHR
            |--------------------------------------------------------------------------
            */
            fromKm =
                rate?.toKm ?? "";

            toKm =
                rate?.fromKm ?? "";
        } else {
            fromKm =
                rate?.fromKm ?? "";

            toKm =
                rate?.toKm ?? "";
        }

        setExchange({
            from: finalFrom,
            fromKm,

            to: finalTo,
            toKm,

            rateFrom,
            rateTo,

            buy: Number(
                rate?.buy ?? 0
            ),

            sell: Number(
                rate?.sell ?? 0
            ),

            isTo: Number(
                rate?.isTo ?? 0
            ),

            isMultiply: Number(
                rate?.isMultiply ?? 0
            ),
        });

        setExchangeSelected(rate);
    };

    /*
    |--------------------------------------------------------------------------
    | Handle currency dropdown
    |--------------------------------------------------------------------------
    */
    const handleChange = (
        key: string,
        value: any
    ) => {
        if (!value) {
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | FROM
        |--------------------------------------------------------------------------
        */
        if (key === "from") {
            const items =
                Array.isArray(
                    value?.items
                )
                    ? value.items
                    : [];

            const customerFrom =
                normalizeCurrency(
                    value?.mainFrom
                );

            if (
                !customerFrom ||
                items.length === 0
            ) {
                setSubCurrency([]);

                setExchangeSelected(
                    null
                );

                setInputAmount("");

                setAmount(0);

                return;
            }

            /*
            |--------------------------------------------------------------------------
            | Build TO list
            |--------------------------------------------------------------------------
            */
            const toOptions =
                buildSubCurrencies(
                    items,
                    customerFrom
                );

            setSubCurrency(
                toOptions
            );

            /*
            |--------------------------------------------------------------------------
            | Default TO
            |
            | Always try KHR first.
            |--------------------------------------------------------------------------
            */
            let customerTo = "KHR";

            let selectedRate =
                findRate(
                    items,
                    customerFrom,
                    customerTo
                );

            /*
            |--------------------------------------------------------------------------
            | If KHR isn't available,
            | use first TO currency.
            |--------------------------------------------------------------------------
            */
            if (
                !selectedRate &&
                toOptions.length > 0
            ) {
                customerTo =
                    normalizeCurrency(
                        toOptions[0]
                            ?.customerTo
                    );

                selectedRate =
                    findRate(
                        items,
                        customerFrom,
                        customerTo
                    );
            }

            /*
            |--------------------------------------------------------------------------
            | Final fallback
            |--------------------------------------------------------------------------
            */
            if (
                !selectedRate &&
                items.length > 0
            ) {
                selectedRate =
                    items[0];

                const dbFrom =
                    normalizeCurrency(
                        selectedRate?.from
                    );

                const dbTo =
                    normalizeCurrency(
                        selectedRate?.to
                    );

                if (
                    dbFrom ===
                    customerFrom
                ) {
                    customerTo =
                        dbTo;
                } else if (
                    dbTo ===
                    customerFrom
                ) {
                    customerTo =
                        dbFrom;
                }
            }

            /*
            |--------------------------------------------------------------------------
            | Set rate
            |--------------------------------------------------------------------------
            */
            if (
                selectedRate
            ) {
                setExchangeRate(
                    selectedRate,
                    customerFrom,
                    customerTo
                );
            }

            setInputAmount("");

            setAmount(0);

            return;
        }

        /*
        |--------------------------------------------------------------------------
        | TO
        |--------------------------------------------------------------------------
        */
        if (key === "to") {
            const customerFrom =
                normalizeCurrency(
                    exchange.from
                );

            const customerTo =
                normalizeCurrency(
                    value?.customerTo ??
                        value?.to
                );

            if (
                !customerFrom ||
                !customerTo
            ) {
                return;
            }

            /*
            |--------------------------------------------------------------------------
            | The selected item may be:
            |
            | USD -> KHR
            |
            | OR:
            |
            | KHR -> USD
            |
            | We keep customer direction:
            |
            | USD -> KHR
            |--------------------------------------------------------------------------
            */
            const selectedRate =
                value;

            setExchangeRate(
                selectedRate,
                customerFrom,
                customerTo
            );

            setInputAmount("");

            setAmount(0);

            return;
        }
    };

    /*
    |--------------------------------------------------------------------------
    | Calculate Amount
    |--------------------------------------------------------------------------
    */
    const handleChangeAmount = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value =
            e.target.value;

        setInputAmount(value);

        /*
        |--------------------------------------------------------------------------
        | Empty
        |--------------------------------------------------------------------------
        */
        if (value === "") {
            setAmount(0);
            return;
        }

        const input =
            Number(value);

        if (
            !Number.isFinite(
                input
            ) ||
            input <= 0
        ) {
            setAmount(0);
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | Customer direction
        |--------------------------------------------------------------------------
        */
        const customerFrom =
            normalizeCurrency(
                exchange.from
            );

        const customerTo =
            normalizeCurrency(
                exchange.to
            );

        /*
        |--------------------------------------------------------------------------
        | Database direction
        |--------------------------------------------------------------------------
        */
        const rateFrom =
            normalizeCurrency(
                exchange.rateFrom
            );

        const rateTo =
            normalizeCurrency(
                exchange.rateTo
            );

        const buy =
            Number(
                exchange.buy ?? 0
            );

        const sell =
            Number(
                exchange.sell ?? 0
            );

        /*
        |--------------------------------------------------------------------------
        | Choose rate
        |--------------------------------------------------------------------------
        |
        | Currently converter uses SELL.
        |
        | If you want BUY instead:
        |
        | setConvertOption("buy")
        |
        */
        const rate =
            convertOption ===
            "buy"
                ? buy
                : sell;

        if (
            rate <= 0
        ) {
            setAmount(0);
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | DIRECT
        |--------------------------------------------------------------------------
        |
        | Customer:
        |
        | USD -> KHR
        |
        | DB:
        |
        | USD -> KHR
        |
        | Example:
        |
        | 100 USD
        | × 4010
        | = 401,000 KHR
        |--------------------------------------------------------------------------
        */
        const isDirect =
            customerFrom ===
                rateFrom &&
            customerTo ===
                rateTo;

        /*
        |--------------------------------------------------------------------------
        | REVERSE
        |--------------------------------------------------------------------------
        |
        | Customer:
        |
        | USD -> KHR
        |
        | DB:
        |
        | KHR -> USD
        |
        | Example:
        |
        | 401,000 KHR
        | ÷ 4010
        | = 100 USD
        |
        | Therefore for USD -> KHR
        | using a reverse rate:
        |
        | input × rate
        |
        | BUT this depends on how the DB rate
        | is defined.
        |--------------------------------------------------------------------------
        */
        const isReverse =
            customerFrom ===
                rateTo &&
            customerTo ===
                rateFrom;

        let result = 0;

        /*
        |--------------------------------------------------------------------------
        | DIRECT
        |--------------------------------------------------------------------------
        */
        if (isReverse) {
            /*
            |--------------------------------------------------------------------------
            | Normal currency pair:
            |
            | USD -> KHR
            | 1 USD = 4010 KHR
            |
            | 100 USD = 401,000 KHR
            |--------------------------------------------------------------------------
            */
            result =
                input * rate;
        }

        /*
        |--------------------------------------------------------------------------
        | REVERSE
        |--------------------------------------------------------------------------
        */
        else if (isDirect) {
            /*
            |--------------------------------------------------------------------------
            | DB:
            |
            | KHR -> USD
            |
            | Customer:
            |
            | USD -> KHR
            |
            |--------------------------------------------------------------------------
            |
            | IMPORTANT:
            |
            | The exact reverse formula depends on the meaning
            | of the stored rate.
            |
            | For a rate stored as:
            |
            | 1 KHR = 0.000249 USD
            |
            | then:
            |
            | USD -> KHR:
            |
            | USD / 0.000249
            |
            |--------------------------------------------------------------------------
            */
            result =
                input / rate;
        }

        /*
        |--------------------------------------------------------------------------
        | Invalid pair
        |--------------------------------------------------------------------------
        */
        else {
            console.warn(
                "Exchange rate does not match selected currencies",
                {
                    customerFrom,
                    customerTo,
                    rateFrom,
                    rateTo,
                    buy,
                    sell,
                    rate,
                }
            );

            setAmount(0);

            return;
        }

        /*
        |--------------------------------------------------------------------------
        | Validate result
        |--------------------------------------------------------------------------
        */
        if (
            !Number.isFinite(
                result
            ) ||
            result < 0
        ) {
            setAmount(0);
            return;
        }

        setAmount(result);
    };

    /*
    |--------------------------------------------------------------------------
    | Load API
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        let mounted = true;

        const loadExchange =
            async () => {
                try {
                    const res =
                        await axios.get(
                            `${api.BASE_URL}/exchange`,
                            {
                                headers: {
                                    "Content-Type":
                                        "application/json",

                                    "Accept-Language":
                                        i18n.language,
                                },
                            }
                        );

                    if (
                        !mounted ||
                        res?.data
                            ?.status !==
                            "success"
                    ) {
                        return;
                    }

                    setBanner(
                        res?.data
                            ?.banner ??
                            null
                    );

                    setExchanges(
                        Array.isArray(
                            res?.data
                                ?.exchange
                        )
                            ? res.data
                                  .exchange
                            : []
                    );

                    setService(
                        res?.data
                            ?.service ??
                            null
                    );

                    setCurrency(
                        Array.isArray(
                            res?.data
                                ?.convert
                        )
                            ? res.data
                                  .convert
                            : []
                    );

                    setLastUpdated(
                        res?.data
                            ?.exchangeLastUpdated ??
                            null
                    );
                } catch (error) {
                    console.error(
                        "Failed to load exchange data:",
                        error
                    );
                }
            };

        loadExchange();

        return () => {
            mounted = false;
        };
    }, [i18n.language]);

    /*
    |--------------------------------------------------------------------------
    | Initialize USD -> KHR
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        if (
            !currency ||
            currency.length === 0
        ) {
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | Find USD group
        |--------------------------------------------------------------------------
        */
        const usdGroup =
            currency.find(
                (group: any) =>
                    normalizeCurrency(
                        group?.mainFrom
                    ) === "USD"
            ) ??
            currency[0];

        const items =
            Array.isArray(
                usdGroup?.items
            )
                ? usdGroup.items
                : [];

        if (
            items.length === 0
        ) {
            return;
        }

        const defaultFrom =
            "KHR";

        let defaultTo =
            "USD";

        /*
        |--------------------------------------------------------------------------
        | Find USD -> KHR
        |--------------------------------------------------------------------------
        */
        let selectedRate =
            findRate(
                items,
                defaultFrom,
                defaultTo
            );

        /*
        |--------------------------------------------------------------------------
        | If USD -> KHR does not exist
        |--------------------------------------------------------------------------
        */
        if (!selectedRate) {
            const firstOption =
                buildSubCurrencies(
                    items,
                    defaultFrom
                )[0];

            if (firstOption) {
                defaultTo =
                    normalizeCurrency(
                        firstOption
                            ?.customerTo
                    );

                selectedRate =
                    findRate(
                        items,
                        defaultFrom,
                        defaultTo
                    );
            }
        }

        /*
        |--------------------------------------------------------------------------
        | Final fallback
        |--------------------------------------------------------------------------
        */
        if (
            !selectedRate
        ) {
            selectedRate =
                items[0];

            const dbFrom =
                normalizeCurrency(
                    selectedRate?.from
                );

            const dbTo =
                normalizeCurrency(
                    selectedRate?.to
                );

            if (
                dbFrom ===
                defaultFrom
            ) {
                defaultTo =
                    dbTo;
            } else if (
                dbTo ===
                defaultFrom
            ) {
                defaultTo =
                    dbFrom;
            }
        }

        /*
        |--------------------------------------------------------------------------
        | TO options
        |--------------------------------------------------------------------------
        */
        const toOptions =
            buildSubCurrencies(
                items,
                defaultFrom
            );

        setSubCurrency(
            toOptions
        );

        /*
        |--------------------------------------------------------------------------
        | Set default exchange
        |--------------------------------------------------------------------------
        */
        if (
            selectedRate
        ) {
            setExchangeRate(
                selectedRate,
                defaultFrom,
                defaultTo
            );
        }

        setInputAmount("");

        setAmount(0);
    }, [currency]);

    /*
    |--------------------------------------------------------------------------
    | Format number
    |--------------------------------------------------------------------------
    */
    const formatUSD = (
        value: any
    ) => {
        const number =
            Number(
                value ?? 0
            );

        if (
            !Number.isFinite(
                number
            )
        ) {
            return "0.00";
        }

        return new Intl.NumberFormat(
            "en-US",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        ).format(number);
    };

    /*
    |--------------------------------------------------------------------------
    | Khmer number
    |--------------------------------------------------------------------------
    */
    const toKhmerNumber = (
        value:
            | number
            | string
    ) => {
        const khmerNumbers = [
            "០",
            "១",
            "២",
            "៣",
            "៤",
            "៥",
            "៦",
            "៧",
            "៨",
            "៩",
        ];

        return String(
            value
        ).replace(
            /\d/g,
            (digit) =>
                khmerNumbers[
                    Number(
                        digit
                    )
                ]
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Format date time
    |--------------------------------------------------------------------------
    */
    const formatDateTime = (
        value: any
    ) => {
        if (!value) {
            return {
                date: "",
                time: "",
            };
        }

        const date =
            new Date(value);

        if (
            Number.isNaN(
                date.getTime()
            )
        ) {
            return {
                date: "",
                time: "",
            };
        }

        if (
            i18n.language ===
            "KHM"
        ) {
            const khmerWeekdays = [
                "អាទិត្យ",
                "ចន្ទ",
                "អង្គារ",
                "ពុធ",
                "ព្រហស្បតិ៍",
                "សុក្រ",
                "សៅរ៍",
            ];

            const khmerMonths = [
                "មករា",
                "កុម្ភៈ",
                "មីនា",
                "មេសា",
                "ឧសភា",
                "មិថុនា",
                "កក្កដា",
                "សីហា",
                "កញ្ញា",
                "តុលា",
                "វិច្ឆិកា",
                "ធ្នូ",
            ];

            const dateText =
                `ថ្ងៃ${
                    khmerWeekdays[
                        date.getDay()
                    ]
                } ទី${toKhmerNumber(
                    date.getDate()
                )} ខែ${
                    khmerMonths[
                        date.getMonth()
                    ]
                } ឆ្នាំ${toKhmerNumber(
                    date.getFullYear()
                )}`;

            const timeText =
                date.toLocaleTimeString(
                    "en-US",
                    {
                        hour:
                            "2-digit",
                        minute:
                            "2-digit",
                        hour12:
                            true,
                    }
                );

            return {
                date:
                    dateText,
                time:
                    timeText,
            };
        }

        return {
            date:
                date.toLocaleDateString(
                    "en-US",
                    {
                        weekday:
                            "long",
                        year:
                            "numeric",
                        month:
                            "long",
                        day:
                            "2-digit",
                    }
                ),

            time:
                date.toLocaleTimeString(
                    "en-US",
                    {
                        hour:
                            "2-digit",
                        minute:
                            "2-digit",
                        hour12:
                            true,
                    }
                ),
        };
    };

    const updatedDate =
        formatDateTime(
            lastUpdated?.updated_at
        );

    return (
        <div>
            <Layout
                headerStyle={1}
                footerStyle={3}
                breadcrumbTitle={t(
                    "HEADER.ExchangeRate"
                )}
                breadcrumbTitleTwo={t(
                    "HEADER.Services"
                )}
                breadcrumbImage={
                    banner?.image
                }
            >
                {exchanges && (
                    <>
                        {/* =====================================================
                            EXCHANGE TABLE
                        ====================================================== */}

                        {exchanges.length >
                            0 && (
                            <section className="currency-pairs-style1">
                                <div className="container">
                                    <div className="sec-title withtext text-center">
                                        <h2>
                                            {
                                                service?.title
                                            }
                                        </h2>

                                        <div className="text">
                                            <p>
                                                {t(
                                                    "Updated Date"
                                                )}
                                                :{" "}
                                                {
                                                    updatedDate.date
                                                }{" "}
                                                |{" "}
                                                {t(
                                                    "Time:"
                                                )}{" "}
                                                {
                                                    updatedDate.time
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="currency-pairs-style1__inner">
                                        <div className="currency-pairs-style1__tab">
                                            <div className="tabs-content-box">
                                                {activeTab ===
                                                    "popular" && (
                                                    <div
                                                        className="tab-content-box-item tab-content-box-item-active fadeIn"
                                                        id="popular"
                                                    >
                                                        <div className="currency-pairs-style1-tab-content-box-item">
                                                            <div className="single-currency-pairs-style1">
                                                                <div className="table-outer">
                                                                    <table className="pricing-table">
                                                                        <thead className="table-header">
                                                                            <tr>
                                                                                <th className="name">
                                                                                    {t(
                                                                                        "HEADER.ExchangeRate"
                                                                                    )}
                                                                                </th>

                                                                                <th
                                                                                    style={{
                                                                                        width:
                                                                                            "30%",
                                                                                    }}
                                                                                >
                                                                                    {t(
                                                                                        "Sell"
                                                                                    )}
                                                                                </th>

                                                                                <th
                                                                                    style={{
                                                                                        width:
                                                                                            "30%",
                                                                                    }}
                                                                                >
                                                                                    {t(
                                                                                        "Buy"
                                                                                    )}
                                                                                </th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            {exchanges.map(
                                                                                (
                                                                                    q: any,
                                                                                    index: number
                                                                                ) => (
                                                                                    <tr
                                                                                        key={
                                                                                            q?.id ??
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <td>
                                                                                            <div
                                                                                                className="title"
                                                                                                style={{
                                                                                                    justifyContent:
                                                                                                        "space-evenly",
                                                                                                }}
                                                                                            >
                                                                                                <img
                                                                                                    src={
                                                                                                        q?.image
                                                                                                            ? q.image.split(
                                                                                                                  ":"
                                                                                                              ).length >
                                                                                                              1
                                                                                                                ? q.image
                                                                                                                : `${api.FILE_URL}${q.image}`
                                                                                                            : "/no-image.png"
                                                                                                    }
                                                                                                    style={{
                                                                                                        width: 120,
                                                                                                        marginRight: 15,
                                                                                                    }}
                                                                                                    alt=""
                                                                                                />

                                                                                                <h6>
                                                                                                    {i18n.language ===
                                                                                                        "KHM" &&
                                                                                                    q?.fromKm
                                                                                                        ? q.fromKm
                                                                                                        : q?.from}
                                                                                                </h6>

                                                                                                <div className="icon-box">
                                                                                                    <i className="icon-exchange"></i>
                                                                                                </div>

                                                                                                <h6>
                                                                                                    {i18n.language ===
                                                                                                        "KHM" &&
                                                                                                    q?.toKm
                                                                                                        ? q.toKm
                                                                                                        : q?.to}
                                                                                                </h6>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td className="sell">
                                                                                            {
                                                                                                q?.sell
                                                                                            }
                                                                                        </td>

                                                                                        <td className="buy">
                                                                                            {
                                                                                                q?.buy
                                                                                            }
                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            )}
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

                                    <div className="text mt-4 text-center">
                                        <p>
                                            {
                                                service?.summary
                                            }
                                        </p>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* =====================================================
                            CONVERTER
                        ====================================================== */}

                        <section className="account-detail-style2">
                            <div className="container">
                                <div className="exchange-currency">
                                    {currency.length >
                                        0 && (
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="content-currency">
                                                    <div className="title">
                                                        <h2>
                                                            {t(
                                                                "CurrencyConverter"
                                                            )}
                                                        </h2>
                                                    </div>

                                                    <div className="contain-form">
                                                        {/* FROM */}

                                                        <div className="from">
                                                            <h6>
                                                                {t(
                                                                    "FROM"
                                                                )}
                                                            </h6>

                                                            <Dropdowns
                                                                option={
                                                                    currency
                                                                }
                                                                action={
                                                                    handleChange
                                                                }
                                                                type="from"
                                                                id={
                                                                    exchange.from
                                                                }
                                                            >
                                                                <span>
                                                                    <img
                                                                        src={
                                                                            api.FILE_URL +
                                                                            `/images/Chhayvann_${exchange.from}.png`
                                                                        }
                                                                        alt={
                                                                            exchange.from
                                                                        }
                                                                    />

                                                                    {
                                                                        exchange.from
                                                                    }

                                                                    <i className="fas fa-chevron-down"></i>
                                                                </span>
                                                            </Dropdowns>
                                                        </div>

                                                        {/* ARROW */}

                                                        <div className="compare-icon">
                                                            <span className="icon-arrow-right"></span>
                                                        </div>

                                                        {/* TO */}

                                                        <div className="to">
                                                            <h6>
                                                                {t(
                                                                    "TO"
                                                                )}
                                                            </h6>

                                                            <Dropdowns
                                                                option={
                                                                    subCurrency
                                                                }
                                                                id={
                                                                    exchangeSelected?.id
                                                                }
                                                                action={
                                                                    handleChange
                                                                }
                                                                type="to"
                                                            >
                                                                <span>
                                                                    <img
                                                                        src={
                                                                            api.FILE_URL +
                                                                            `/images/Chhayvann_${exchange.to}.png`
                                                                        }
                                                                        alt={
                                                                            exchange.to
                                                                        }
                                                                    />

                                                                    {
                                                                        exchange.to
                                                                    }

                                                                    <i className="fas fa-chevron-down"></i>
                                                                </span>
                                                            </Dropdowns>
                                                        </div>

                                                        {/* AMOUNT */}

                                                        <div className="amount">
                                                            <h6>
                                                                {t(
                                                                    "AMOUNT"
                                                                )}
                                                            </h6>

                                                            <input
                                                                type="number"
                                                                min="0"
                                                                step="any"
                                                                value={
                                                                    inputAmount
                                                                }
                                                                onChange={
                                                                    handleChangeAmount
                                                                }
                                                                placeholder="0"
                                                            />

                                                            <h3>
                                                                {i18n.language ==
                                                                    "KHM" &&
                                                                exchange.toKm
                                                                    ? exchange.toKm
                                                                    : exchange.to}
                                                                {" "}
                                                                {formatUSD(amount)}
                                                            </h3>
                                                            <p>
                                                                {t("Updated Date")}:{" "}{ updatedDate.date }{" | "}{t("Time:")}{" "}{updatedDate.time}
                                                            </p>
                                                            <p>{ service?.convertSummary }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="content-img">
                                                    {service?.thumbnail && (
                                                        <img
                                                            src={`${api.FILE_URL}${service.thumbnail}`}
                                                            alt=""
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* =====================================================
                            DESCRIPTION
                        ====================================================== */}

                        <section
                            className="account-detail-style1"
                            style={{
                                zIndex: 0,
                            }}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="account-detail-style1__content">
                                            <div className="intro-box">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: sanitizeHtml(
                                                            service?.description ??
                                                                ""
                                                        ),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </Layout>
        </div>
    );
}