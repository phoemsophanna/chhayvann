// lib/i18n-client.ts
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/locales/eng/language.json";
import translationKH from "../public/locales/khm/language.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      ENG: { translation: translationEN },
      KHM: { translation: translationKH }
    },
    fallbackLng: "ENG",
    lng: typeof window !== "undefined"
      ? sessionStorage.getItem("LANG") || "ENG"
      : "ENG",
    interpolation: {
      escapeValue: false
    }
  });
}

export default i18n;
