<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const onLanguageChange = () => {
  if (locale.value === "en") localStorage.setItem("lang", "ar");
  else localStorage.setItem("lang", "en");
  window.location.reload();
};
</script>

<template>
  <div
    @click="onLanguageChange"
    :dir="locale === 'en' ? 'rtl' : 'ltr'"
    class="flex cursor-pointer hover:opacity-70 items-center"
  >
    <Icon
      :icon="locale === 'en' ? 'flag:sa-4x3' : 'flagpack:gb-ukm'"
      class="text-lg"
    />
    <div class="mx-2 font-bold">
      {{ locale === "en" ? "العربيّة" : "English" }}
    </div>
  </div>
</template>
