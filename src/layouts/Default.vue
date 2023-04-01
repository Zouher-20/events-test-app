<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Toast from "@/components/general/Toast.vue";
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";
import LangSwitcher from "@/components/general/LangSwitcher.vue";
import ThemeSwitcher from "@/components/general/ThemeSwitcher.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
const { t } = useI18n();

const show = ref(false);
const hideSidebar = () => {
  setTimeout(() => {
    show.value = false;
  }, 300);
};
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <header
        class="py-4 px-4 bg-base-300 flex items-center justify-between rounded-b-2xl shadow-lg"
      >
        <label
          @click="show = !show"
          ref="sidebarToggle"
          for="my-drawer"
          class="drawer-button cursor-pointer hover:opacity-80"
        >
          <Icon icon="mingcute:menu-line" style="font-size: 2.5rem" />
        </label>

        <div class="flex gap-4 items-center">
          <RouterLink :to="{ name: 'view-store' }">
            <button class="btn btn-primary">
              <Icon
                icon="ic:baseline-local-grocery-store"
                class="text-lg mr-1"
              />
              {{ t("viewStore") }}
            </button>
          </RouterLink>

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
    </div>
    <div class="drawer-side" v-show="show">
      <label
        @click.self="hideSidebar"
        for="my-drawer"
        class="drawer-overlay"
      ></label>
      <Sidebar @navigated="$refs.sidebarToggle.click()" />
    </div>
  </div>
</template>
