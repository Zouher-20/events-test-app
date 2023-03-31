<script setup>
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";

const { t } = useI18n();
const navLinks = [
  {
    icon: "material-symbols:dashboard-rounded",
    path: "dashboard",
    title: t("dashboard"),
  },
  {
    icon: "material-symbols:event-available-rounded",
    path: "events",
    title: t("event"),
  },
  {
    icon: "mdi:ticket",
    path: "tickets",
    title: t("ticket"),
  },
];
</script>
<template>
  <ul class="menu rounded-r-2xl p-4 w-80 bg-base-200 text-base-content">
    <li class="text-lg" v-for="(link, index) in navLinks" :key="index">
      <RouterLink class="capitalize" :to="{ name: link.path }">
        <Icon class="text-2xl" :icon="link.icon" />
        {{ link.title }}</RouterLink
      >
    </li>
  </ul>
</template>

<style>
.menu li .router-link-exact-active {
  @apply bg-primary text-white;
}
</style>
