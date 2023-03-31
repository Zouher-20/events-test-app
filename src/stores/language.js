import { defineStore } from "pinia";

export const useLangStore = defineStore("lang", {
  state: () => {
    return { lang: "light" };
  },

  actions: {
    detectLang() {
      var lang = localStorage.getItem("lang");
      if ("lang") return lang;
      else {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          return "dark";
        } else {
          return "light";
        }
      }
    },

    setLang(lang) {
      document.documentElement.setAttribute("lang", lang);
      localStorage.setItem("lang", lang);
      this.lang = lang;
    },

    initializeTheme() {
      const lang = this.detectLang();
      this.setLang(lang);
    },
  },
});
