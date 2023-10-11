// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en', // Default language
    resources: {
      en: {
        translation: {
          // English translations
         buy: 'BUY',
          sell: 'SELL',
          rent:'RENT',
          // Add more English translations as needed
        },
      },
      fr: {
        translation: {
          // French translations
          buy: 'BUY',
          sell: 'SELL',
          rent:'RENT',
          // Add more French translations as needed
        },
      },
      ar: {
        translation: {
          buy: 'nechri',
          sell: 'enbi3',
          rent:'nekri', // Arabic translations
         
        },
      },
    },
  });

export default i18n;
