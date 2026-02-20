'use client';

import { useAppStore } from "@/store/useAppStore";
import { useEffect, useState } from "react";
import { api } from "@/app/config";
export default function PopupPoster() {
  const { general } = useAppStore();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(5);
  const [popup, setPopup] = useState(sessionStorage.getItem('popup') ? true : false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if(count < 1){
        setOpen((prev) => !prev);
        document.body.classList.remove('no-scroll');
        sessionStorage.setItem('popup', 'true');
    }
  };

  useEffect(() => {
    if(!popup){
        const mainTimeOut = setTimeout(() => {
            setOpen(true);
            document.body.classList.add('no-scroll');
            
            const interval = setInterval(() => {
                setCount(prev => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }, 2000);
    
        return () => {
            clearTimeout(mainTimeOut);
            document.body.classList.remove('no-scroll');
        }
    }
  },[])

  return (
    <>
        <section className={`popup-poster ${open ? "active" : ""}`}>
            <div className="popup-containers">
                <div className="header-content" onClick={(e:any) => handleClick(e)}>
                    <span>{count}Seconds <i className="fas fa-times"></i></span>
                </div>
                <div className="content-image">
                    <img src={`${api.FILE_URL}${general?.popup_thumbnail}`} alt="" />
                </div>
            </div>
        </section>
    </>
  );
}
