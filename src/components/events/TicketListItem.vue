<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
const props = defineProps(["ticket", "id", "eventId"]);
const emit = defineEmits(["deleteClicked"]);

const { t } = useI18n();
</script>

<template>
  <article class="flex items-start gap-6 p-6">
    <div class="min-w-0 relative flex-auto">
      <RouterLink
        class="w-fit"
        :to="{ name: 'edit-ticket', params: { id, eventId } }"
      >
        <h2
          class="font-semibold link link-hover link-info text-lg w-fit truncate pr-20"
        >
          {{ ticket.title }}
        </h2>
      </RouterLink>
      <Icon
        @click="emit('deleteClicked')"
        icon="material-symbols:delete-outline"
        class="text-error text-xl hover:opacity-60 cursor-pointer absolute top-0 rtl:left-0 ltr:right-0 z-10"
      />
      <div class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="absolute top-0 rtl:left-0 ltr:right-0">
          <span class="font-bold text-xl">{{ ticket.price }} $</span>
        </div>
        <div>
          <span class="px-1.5 ring-1 ring-base-300 bg-base-200 rounded">
            {{ t(`${ticket.type}`) }}
          </span>
        </div>

        <div class="flex-none w-full mt-2 font-normal">
          <p class="text-slate-400 w-full truncate">
            {{ ticket.description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
