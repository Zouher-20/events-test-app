import { defineStore } from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => {
    return { isToastShown: false, toastText: "" };
  },

  actions: {
    showToast(toastText) {
      this.toastText = toastText;
      this.isToastShown = true;
      setTimeout(() => {
        this.isToastShown = false;
      }, 5000);
    },
    hideToast() {
      clearTimeout();
      this.isToastShown = false;
    },
  },
});
