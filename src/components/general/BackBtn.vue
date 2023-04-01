<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

defineProps(["route", "params"]);
</script>

<template>
  <RouterLink
    :to="{ name: route, params }"
    class="text-md flex items-end gap-2 link link-hover my-4 leading-4 font-medium"
  >
    <Icon class="rtl:rotate-180" icon="material-symbols:arrow-back-rounded" />
    {{ t("back") }}
  </RouterLink>
</template>
