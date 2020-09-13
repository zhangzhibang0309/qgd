import Vue from "vue";
import VueI18n from "vue-i18n";
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
import en from "./en";
import zh from "./zh";

Vue.use(VueI18n);

const DEFAULT_LANG = "zh";
const LOCALE_KEY = "localeLanguage";

const locales = {
  en: {
    ...en,
    ...elementEnLocale
  },
  zh: {
    ...zh,
    ...elementZhLocale
  }
};

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
});

export const setup = lang => {
  if (lang === undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY);
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG;
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang);

  Vue.config.lang = lang;
  i18n.locale = lang;
};

setup();
export default i18n;
