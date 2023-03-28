<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Toast from "./components/Toast.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const show = ref(false);
const hideSidebar = () => {
  setTimeout(() => {
    show.value = false;
  }, 300);
};
</script>

<template>
  <Toast />
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <header class="py-4 px-4 bg-base-200 flex items-center justify-between">
        <label
          @click="show = !show"
          ref="sidebarToggle"
          for="my-drawer"
          class="drawer-button"
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect fill="#ffffff" width="100" height="9"></rect>
            <rect fill="#ffffff" y="30" width="100" height="9"></rect>
            <rect fill="#ffffff" y="60" width="100" height="9"></rect>
          </svg>
        </label>

        <div class="flex gap-4 items-center">
          <button class="btn btn-primary">{{ t("viewStore") }}</button>
          <div>theme</div>
          <div>lang</div>
        </div>
      </header>

      <RouterView v-slot="{ Component }">
        <Transition mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <div class="drawer-side" v-show="show">
      <label
        @click.self="hideSidebar"
        for="my-drawer"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
