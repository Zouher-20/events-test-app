<script setup>
import { storeToRefs } from "pinia";
import { useToastStore } from "@/stores/toast";
import { Icon } from "@iconify/vue";
const store = useToastStore();
const { isToastShown, toastText } = storeToRefs(store);
</script>

<template>
  <Transition>
    <div
      v-if="isToastShown"
      id="toast-component"
      class="fixed left-5 top-24 max-w-xs z-50 bg-base-200 px-5 py-4 border-l-8 rounded-lg border-primary bg-dark2 shadow-lg"
    >
      <p class="text-sm flex items-center gap-3">
        <Icon
          icon="material-symbols:check-circle-outline"
          class="text-4xl text-success"
        />
        <span> {{ toastText }} </span>
        <a
          class="text-xs py-1 px-3 link link-hover link-info"
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
