<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/ar-sa";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const props = defineProps(["event"]);
var eventImage = computed(() => {
  return props.event.poster.name
    ? URL.createObjectURL(props.event.poster)
    : null;
});
</script>
<template>
  <div
    class="flex flex-col lg:h-64 items-center rounded-lg shadow-lg hover:shadow-2xl md:flex-row md:max-w-xl bg-base-200 hover:opacity-70 transition duration-500 ease-in-out"
  >
    <img
      class="object-cover w-full rounded-lg h-96 md:h-full md:w-48"
      :src="eventImage"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight">
        {{ event.title }}
      </h5>
      <div class="flex gap-2">
        <time>{{
          locale === "en"
            ? dayjs(event.start).format("MMM DD , HH:mm A")
            : dayjs(event.start).locale("ar-sa").format("MMM DD , HH:mm A")
        }}</time>
        -
        <time>{{
          locale === "en"
            ? dayjs(event.end).format("MMM DD , HH:mm A")
            : dayjs(event.end).locale("ar-sa").format("MMM DD , HH:mm A")
        }}</time>
      </div>
      <p class="my-3 font-normal text-justify">
        {{ event.description }}
      </p>
    </div>
  </div>
</template>
