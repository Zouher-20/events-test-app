<script setup>
import { useThemeStore } from "@/stores/theme";
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";

const store = useThemeStore();

onMounted(() => {
  store.initializeTheme();
});

const onThemeToggle = () => {
  if (store.theme === "dark") store.setTheme("light");
  else store.setTheme("dark");
};
</script>

<template>
  <div
    class="text-2xl cursor-pointer mr-1 hover:opacity-70"
    @click="onThemeToggle"
  >
    <Icon icon="fluent:dark-theme-20-filled" />
  </div>
</template>
