import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationPL from "./locales/pl/translationPL.json";
import translationEN from "./locales/en/translationEN.json";

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "pl",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
