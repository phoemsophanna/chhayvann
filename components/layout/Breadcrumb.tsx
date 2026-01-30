"use client";
import { api } from "@/app/config";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbTitleTwo?: string; // made optional for flexibility
  breadcrumbImage?: string;
}

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbTitleTwo,
  breadcrumbImage,
}: BreadcrumbProps) {
  const { t } = useTranslation();
  return (
    <section className="breadcrumb-style1">
      <div className="breadcrumb-style1__inner">
        <div
          className="breadcrumb-style1-bg"
          style={{
            backgroundImage: `url(${breadcrumbImage ? api.FILE_URL+breadcrumbImage : "/assets/images/banner/banner.png"})`,
          }}
        ></div>

        <div className="container">
          <div className="inner-content">
            {/* <div className="title">
              <h2>{breadcrumbTitle}</h2>
            </div> */}

            <div className="breadcrumb-menu">
              <ul className="clearfix">
                <li>
                  <Link href="/">{t("HEADER.HOME")}</Link>
                </li>

                {breadcrumbTitleTwo && (
                  <>
                    <li>
                      <span className="icon-right-arrow"></span>
                    </li>
                    <li>{breadcrumbTitleTwo}</li>
                  </>
                )}

                <li>
                  <span className="icon-right-arrow"></span>
                </li>
                <li className="active">{breadcrumbTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
