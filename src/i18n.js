import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs:['en','fr','ar'],
    fallbackLng: 'en',
    detection:{
      order:['cookie','htmlTag','localStorage','path','subdomain'],
      caches:['cookie']
    },
    backend:{
      loadPath:'/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense:false },
  });

export default i18n;