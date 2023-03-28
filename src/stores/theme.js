import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return { theme: "light" };
  },

  actions: {
    detectTheme() {
      var theme = localStorage.getItem("theme");
      if ("theme") return theme;
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

    setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      this.theme = theme;
    },

    initializeTheme() {
      const theme = this.detectTheme();
      this.setTheme(theme);
    },
  },
});
