<script setup>
import { Icon } from "@iconify/vue";
import { computed } from "@vue/reactivity";
import dayjs from "dayjs";
import "dayjs/locale/ar-sa";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const props = defineProps(["event", "id"]);
const emit = defineEmits(["deleteClicked"]);

var eventImage = computed(() => {
  return props.event.poster.name
    ? URL.createObjectURL(props.event.poster)
    : null;
});
</script>

<template>
  <article class="flex items-start gap-6 p-6">
    <RouterLink :to="{ name: 'edit-event', params: { id } }">
      <img
        :src="eventImage"
        alt=""
        class="flex-none rounded-md w-96 object-cover md:w-64 lg:w-32 h-32 bg-slate-100"
      />
    </RouterLink>
    <div class="min-w-0 relative flex-auto">
      <RouterLink class="w-fit" :to="{ name: 'edit-event', params: { id } }">
        <h2
          class="font-semibold link link-hover link-info text-lg w-fit truncate pr-20"
        >
          {{ event.title }}
        </h2>
      </RouterLink>
      <Icon
        @click="emit('deleteClicked')"
        icon="material-symbols:delete-outline"
        class="text-error text-xl hover:opacity-60 cursor-pointer absolute top-0 rtl:left-0 ltr:right-0 z-10"
      />
      <div class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="absolute rtl:left-0 ltr:right-0 top-0">
          <span>{{
            locale === "en"
              ? dayjs(event.start).format("MMM DD , HH:mm A")
              : dayjs(event.start).locale("ar-sa").format("MMM DD , HH:mm A")
          }}</span>
        </div>
        <div>
          <span class="px-1.5 ring-1 ring-base-300 bg-base-200 rounded">
            {{ t(event.type) }}
          </span>
        </div>

        <div
          class="flex w-full text-slate-500 items-center gap-1 mt-2 font-normal"
        >
          <Icon icon="material-symbols:pin-drop-outline" class="text-xl" />
          <p class="w-full truncate">
            {{ event.address }}
          </p>
        </div>

        <div class="flex-none w-full mt-2 font-normal">
          <p class="text-slate-400 w-full text-justify truncate">
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
