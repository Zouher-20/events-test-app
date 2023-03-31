<script setup>
import LangSwitcher from "@/components/general/LangSwitcher.vue";
import ThemeSwitcher from "@/components/general/ThemeSwitcher.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <header
    class="py-5 px-4 bg-base-200 flex items-center justify-end gap-4 rounded-b-2xl shadow"
  >
    <ThemeSwitcher />
    <LangSwitcher />
  </header>
  <RouterView v-slot="{ Component }">
    <Transition mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
