<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="px-40 py-20 bg-base-200 rounded-md shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-error text-9xl">404</h1>

        <h6 class="mb-2 text-2xl font-bold text-center md:text-3xl">
          {{ t("title404") }}
        </h6>

        <p class="mb-8 text-center md:text-lg">
          {{ t("message404") }}
        </p>

        <RouterLink to="/" class="">
          <button class="btn btn-primary">
            {{ t("goHome") }}
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
