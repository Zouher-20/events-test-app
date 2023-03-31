<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import EventForm from "../../components/events/EventForm.vue";
import { useEventsStore } from "@/stores/events.js";
import { useToastStore } from "@/stores/toast.js";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const eventData = reactive({});
const store = useEventsStore();
const toastStore = useToastStore();

const onFormSubmitted = () => {
  store.createNewEvent(eventData);
  toastStore.showToast(t("eventCreatedMessage"));
  router.push({ name: "events" });
};
</script>

<template>
  <div class="pb-4">
    <h2 class="text-3xl">
      {{ t("newEventTitle") }}
    </h2>
    <div class="divider"></div>
    <EventForm @submit="onFormSubmitted" v-model="eventData" />
  </div>
</template>
