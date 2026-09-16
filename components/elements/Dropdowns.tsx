import { api } from "@/app/config";
import { useEffect, useRef, useState } from "react";

interface DropdownsProps {
    children: React.ReactNode;
    option?: any[];
    id?: string | number;
    action: (type: "from" | "to", value: any) => void;
    type?: "from" | "to";
}

const Dropdowns = ({
    children,
    option = [],
    id = "",
    action,
    type = "from",
}: DropdownsProps) => {
    const [open, setOpen] = useState(false);

    const [element, setElement] = useState({
        image: "",
        id: "",
        currency: "",
    });

    const [filter, setFilter] =
        useState<any[]>(option ?? []);

    const ref =
        useRef<HTMLDivElement>(null);

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
    | Get TO currency
    |--------------------------------------------------------------------------
    |
    | For a direct rate:
    |
    | USD -> KHR
    |
    | customerTo = KHR
    |
    | For a reverse rate:
    |
    | KHR -> USD
    |
    | customerTo = KHR
    |
    | when customer selected:
    |
    | USD -> KHR
    |
    */
    const getToCurrency = (
        item: any
    ) => {
        return normalizeCurrency(
            item?.customerTo ??
                item?.to
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Close when clicking outside
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        const handleClickOutside = (
            e: MouseEvent
        ) => {
            if (
                ref.current &&
                !ref.current.contains(
                    e.target as Node
                )
            ) {
                setOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Update filter when options change
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        setFilter(
            Array.isArray(option)
                ? option
                : []
        );
    }, [option]);

    /*
    |--------------------------------------------------------------------------
    | Update selected element
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        setElement((prev) => ({
            ...prev,
            id: String(id ?? ""),
        }));
    }, [id]);

    /*
    |--------------------------------------------------------------------------
    | Search currency
    |--------------------------------------------------------------------------
    */
    const currencyFilter = (
        value: string
    ) => {
        const search =
            value
                .toLowerCase()
                .trim();

        const options =
            Array.isArray(option)
                ? option
                : [];

        /*
        |--------------------------------------------------------------------------
        | Empty search
        |--------------------------------------------------------------------------
        */
        if (!search) {
            setFilter(options);
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | TO search
        |--------------------------------------------------------------------------
        |
        | Search customerTo first.
        |
        | This fixes reverse rates.
        |--------------------------------------------------------------------------
        */
        if (type === "to") {
            const filtered =
                options.filter(
                    (q: any) => {
                        const currency =
                            getToCurrency(
                                q
                            );

                        return currency
                            .toLowerCase()
                            .includes(
                                search
                            );
                    }
                );

            setFilter(filtered);
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | FROM search
        |--------------------------------------------------------------------------
        */
        const filtered =
            options.filter(
                (q: any) => {
                    const currency =
                        normalizeCurrency(
                            q?.mainFrom
                        );

                    return currency
                        .toLowerCase()
                        .includes(
                            search
                        );
                }
            );

        setFilter(filtered);
    };

    /*
    |--------------------------------------------------------------------------
    | Select FROM
    |--------------------------------------------------------------------------
    */
    const handleFromSelect = (
        q: any
    ) => {
        const currency =
            normalizeCurrency(
                q?.mainFrom
            );

        if (!currency) {
            return;
        }

        setElement({
            image:
                `/images/Chhayvann_${currency}.png`,
            id: currency,
            currency,
        });

        action(
            "from",
            q
        );

        setOpen(false);
    };

    /*
    |--------------------------------------------------------------------------
    | Select TO
    |--------------------------------------------------------------------------
    */
    const handleToSelect = (
        q: any
    ) => {
        /*
        |--------------------------------------------------------------------------
        | IMPORTANT
        |--------------------------------------------------------------------------
        |
        | Use customerTo instead of q.to.
        |
        | Example reverse DB:
        |
        | from = KHR
        | to   = USD
        |
        | Customer:
        |
        | USD -> KHR
        |
        | customerTo = KHR
        |--------------------------------------------------------------------------
        */
        const currency =
            getToCurrency(q);

        if (!currency) {
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | Use currency as ID
        |--------------------------------------------------------------------------
        |
        | This is safer than q.id because the selected
        | currency is what the parent component needs.
        |--------------------------------------------------------------------------
        */
        setElement({
            image:
                `/images/Chhayvann_${currency}.png`,
            id: currency,
            currency,
        });

        action(
            "to",
            {
                ...q,

                /*
                |--------------------------------------------------------------------------
                | Make sure parent always receives customerTo
                |--------------------------------------------------------------------------
                */
                customerTo:
                    currency,
            }
        );

        setOpen(false);
    };

    return (
        <div
            className={`dropdown-contain ${
                open
                    ? "active"
                    : ""
            }`}
            ref={ref}
        >
            {/* ============================================================
                SELECTED
            ============================================================ */}

            <div
                onClick={() =>
                    setOpen(
                        (prev) =>
                            !prev
                    )
                }
            >
                {children}
            </div>

            {/* ============================================================
                OPTIONS
            ============================================================ */}

            <div
                className={`container-option ${
                    open
                        ? "active"
                        : ""
                }`}
            >
                <ul>
                    {/* ====================================================
                        SEARCH
                    ===================================================== */}

                    <li>
                        <span className="icon-search"></span>

                        <input
                            type="text"
                            onChange={(
                                e
                            ) =>
                                currencyFilter(
                                    e
                                        .target
                                        .value
                                )
                            }
                            placeholder="Type Currency"
                        />
                    </li>

                    {/* ====================================================
                        CURRENCY LIST
                    ===================================================== */}

                    {filter?.map(
                        (
                            q: any,
                            index: number
                        ) => {
                            /*
                            |--------------------------------------------------------------------------
                            | FROM
                            |--------------------------------------------------------------------------
                            */

                            if (
                                type ===
                                "from"
                            ) {
                                const currency =
                                    normalizeCurrency(
                                        q?.mainFrom
                                    );

                                if (
                                    !currency
                                ) {
                                    return null;
                                }

                                return (
                                    <li
                                        key={`${currency}-${index}`}
                                        onClick={() =>
                                            handleFromSelect(
                                                q
                                            )
                                        }
                                    >
                                        <span
                                            className={
                                                element.id ===
                                                currency
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <img
                                                src={
                                                    api.FILE_URL +
                                                    `/images/Chhayvann_${currency}.png`
                                                }
                                                alt={
                                                    currency
                                                }
                                            />

                                            {
                                                currency
                                            }
                                        </span>
                                    </li>
                                );
                            }

                            /*
                            |--------------------------------------------------------------------------
                            | TO
                            |--------------------------------------------------------------------------
                            */

                            const currency =
                                getToCurrency(
                                    q
                                );

                            if (
                                !currency
                            ) {
                                return null;
                            }

                            return (
                                <li
                                    key={`${currency}-${q?.id ?? index}`}
                                    onClick={() =>
                                        handleToSelect(
                                            q
                                        )
                                    }
                                >
                                    <span
                                        className={
                                            element.id ===
                                            currency
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <img
                                            src={
                                                api.FILE_URL +
                                                `/images/Chhayvann_${currency}.png`
                                            }
                                            alt={
                                                currency
                                            }
                                        />

                                        {
                                            currency
                                        }
                                    </span>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dropdowns;
