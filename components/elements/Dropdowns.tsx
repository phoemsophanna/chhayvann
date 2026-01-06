import { useEffect, useRef, useState } from "react";

const Dropdowns = ({children, option = [], keys = 1, action, type = "from"}: any) => {
    const [open, setOpen] = useState(false);
    const [element, setElement] = useState({img: "", keys: "", title: ""});
    const ref = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState(option);
    
    const currencyFilter = (initualValue: string) => {
        const filterData = option.filter((q:any) => q.title.toLowerCase().includes(initualValue.toLowerCase()));
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
        setElement({...element, keys: keys});
    },[keys]);
    
    return (
        <div className={`dropdown-contain ${open ? "active" : ""}`} ref={ref}>
            <div onClick={() => setOpen(!open)}>
                {element.img ? <span><img src={element.img} /> {element.title} <i className="fas fa-chevron-down"></i></span> : children}
            </div>
            <div className={`container-option ${open ? "active" : ""}`}>
                <ul>
                    <li>
                        <span className="icon-search"></span>
                        <input type="text" onChange={(e) => currencyFilter(e.target.value)} placeholder="Type Currency" />
                    </li>
                    {
                        filter?.map((q:any) => {
                            return (
                                <li key={q.key} onClick={(e) => {
                                    setElement({img: q.img, keys: q.key, title: q.type});
                                    action(type, q.type);
                                    setOpen(!open);
                                }}>
                                    <span className={`${element.keys == q.key ? "active" : ""}`}>
                                        <img src={q.img} alt="" />
                                        {q.title}
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Dropdowns;