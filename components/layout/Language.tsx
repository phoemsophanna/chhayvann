"use client";
import CustomSelect from "@/components/elements/CustomSelect";
import { useTranslation } from "react-i18next";
export default function Language(){
    const { i18n } = useTranslation();
    const options = [
        { value: "KHM", label: "Khmer", element: <img src="/assets/images/flag/cambo.png" style={{width: 25,verticalAlign: "middle"}} alt="english" /> },
        { value: "ENG", label: "English", element: <img src="/assets/images/flag/us.png" style={{width: 25,verticalAlign: "middle"}} alt="english" /> },
    ];

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
        i18n.changeLanguage(value);
        sessionStorage.setItem("LANG", value);
    };

    return(
        <>
        <div className="select-box clearfix">
            <CustomSelect
                options={options}
                defaultValue={options.find((q) => q.value == i18n.language)}
                onChange={handleSelectChange}
            />
        </div>
        </>
    )
}