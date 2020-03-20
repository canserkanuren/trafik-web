import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/languages/en/en.json';
import fr from '../assets/languages/fr/fr.json';
import { store } from '../redux';
const language = store.getState().language.language;

const resources = {
  fr,
  en
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: language,
    fallbackLng: 'en',
    resources,
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
