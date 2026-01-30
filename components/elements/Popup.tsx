"use client";
export default function Popup({active, setActive, title, des}: any) {
    return <div className={`popup ${active ? "active" : ""}`}>
                <div className="popup-container">
                    <div className="popup-header">
                        <button onClick={() => setActive(false)}><i className="far fa-times-circle"></i></button>
                    </div>
                    <div className="popup-content text-center">
                        <img src="/assets/images/check.png" alt="" width={100} />
                        <h2>{title}</h2>
                        {des && <p>{des}</p>}
                    </div>
                </div>
            </div>;
}