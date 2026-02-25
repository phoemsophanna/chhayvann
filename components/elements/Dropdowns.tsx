import { api } from "@/app/config";
import { useEffect, useRef, useState } from "react";

const Dropdowns = ({children, option = [], id = 1, action, type = "from"}: any) => {
    const [open, setOpen] = useState(false);
    const [element, setElement] = useState({image: "", id: "", currency: ""});
    const ref = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState(option);
    
    const currencyFilter = (initualValue: string) => {
        var filterData = [];
        if(type == "to") {
            filterData = option.filter((q:any) => q?.to.toLowerCase().includes(initualValue.toLowerCase()));
        } else {
            filterData = option.filter((q:any) => q?.mainFrom.toLowerCase().includes(initualValue.toLowerCase()));
        }
        setFilter(filterData);
    } 

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setFilter(option);
    },[option])

    useEffect(() => {
        setElement({...element, id: id});
    },[id]);

    return (
        <div className={`dropdown-contain ${open ? "active" : ""}`} ref={ref}>
            <div onClick={() => setOpen(!open)}>
                {
                    type == "to" ? (
                        <>
                            {children}
                        </>
                    ) : (
                        <>
                            {element?.image ? <span><img src={api.FILE_URL + element?.image} /> {element?.currency} <i className="fas fa-chevron-down"></i></span> : children}
                        </>
                    )
                }
            </div>
            <div className={`container-option ${open ? "active" : ""}`}>
                <ul>
                    <li>
                        <span className="icon-search"></span>
                        <input type="text" onChange={(e) => currencyFilter(e.target.value)} placeholder="Type Currency" />
                    </li>
                    {
                        filter?.map((q:any, index:any) => {
                            return ( type == "to" ? (
                                <li key={q.id} onClick={(e) => {
                                    setElement({image: q.to, id: q.id, currency: q.to});
                                    action(type, q);
                                    setOpen(!open);
                                }}>
                                    <span className={`${element.id == q.id ? "active" : ""}`}>
                                        <img src={api.FILE_URL + `/images/Chhayvann_${q.to}.png`} alt="" />
                                        {q.to}
                                    </span>
                                </li>
                            ) : (
                                <li key={q.mainFrom} onClick={(e) => {
                                    setElement({image: `/images/Chhayvann_${q.mainFrom}.png`, id: q.mainFrom, currency: q.mainFrom});
                                    action(type, q);
                                    setOpen(!open);
                                }}>
                                    <span className={`${element.id == q.id ? "active" : ""}`}>
                                        <img src={api.FILE_URL + `/images/Chhayvann_${q.mainFrom}.png`} alt="" />
                                        {q.mainFrom}
                                    </span>
                                </li>
                            ));
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Dropdowns;