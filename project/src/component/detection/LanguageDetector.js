// LanguageDetector.js
import i18n from './i18n';

function detectUserLanguage() {
  const userLanguage = navigator.language || navigator.userLanguage;
  i18n.changeLanguage(userLanguage);
  return userLanguage
}

export default detectUserLanguage;
