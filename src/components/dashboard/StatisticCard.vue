<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  card: Object,
});
</script>

<template>
  <div class="flex items-center p-4 bg-base-200 rounded">
    <div
      class="flex flex-shrink-0 items-center justify-center bg-base-300 h-16 w-16 rounded"
    >
      <Icon class="text-dark text-3xl" :icon="card.icon" />
    </div>
    <div class="flex-grow flex flex-col ml-4">
      <span class="text-xl text-success font-bold">{{ card.value }}</span>
      <div class="flex items-center justify-between">
        <span class="text-gray-500">{{ card.title }}</span>
      </div>
    </div>
  </div>
</template>
