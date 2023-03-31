<script setup>
import { useLangStore } from "@/stores/language";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const store = useLangStore();
const onLanguageChange = () => {};
const menuOpen = ref(false);
</script>

<template>
  <div dir="rtl" class="flex cursor-pointer hover:opacity-70 items-center">
    <Icon
      @click="menuOpen = !menuOpen"
      icon="flag:sa-4x3"
      class="text-lg mr-2"
    />
    <div>العربيّة</div>
  </div>
</template>
