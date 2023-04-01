<script setup>
import LangSwitcher from "@/components/general/LangSwitcher.vue";
import ThemeSwitcher from "@/components/general/ThemeSwitcher.vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <header
    class="py-5 px-4 bg-base-200 flex items-center justify-between gap-4 rounded-b-2xl shadow"
  >
    <RouterLink :to="{ name: 'dashboard' }">
      <Icon
        class="text-3xl cursor-pointer hover:opacity-70 transition duration-200 ease-in-out"
        icon="material-symbols:dashboard-rounded"
      />
    </RouterLink>
    <div class="flex gap-4">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </header>
  <div class="page-container mt-8 mx-auto">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
