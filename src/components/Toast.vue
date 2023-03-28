<script setup>
import { storeToRefs } from "pinia";
import { useToastStore } from "../stores/toast";
const store = useToastStore();
const { isToastShown, toastText } = storeToRefs(store);
</script>

<template>
  <Transition>
    <div
      v-if="isToastShown"
      id="toast-component"
      class="fixed left-10 top-10 px-5 py-4 border-l-8 rounded-lg border-primary bg-dark2 shadow-lg"
    >
      <p class="text-sm text-white flex items-center gap-3">
        <img alt="check" src="@/assets/logo.svg" width="25" height="25" />
        <span> {{ toastText }} </span>
        <a
          class="text-xs text-red-500 hover:cursor-pointer hover:bg-dark py-1 px-3 rounded-lg"
          @click="store.hideToast()"
        >
          dismiss
        </a>
      </p>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
