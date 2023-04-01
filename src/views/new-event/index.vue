<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import EventForm from "../../components/events/EventForm.vue";
import TicketForm from "../../components/events/TicketForm.vue";

import { useEventsStore } from "@/stores/events.js";
import { useToastStore } from "@/stores/toast.js";
import { useRouter } from "vue-router";
import BackBtn from "../../components/general/BackBtn.vue";

const { t } = useI18n();
const router = useRouter();

const eventData = reactive({});
const ticketData = reactive({ sold: 0 });

const store = useEventsStore();
const toastStore = useToastStore();
const activeTab = ref("event");

const onEventFormSubmitted = () => {
  activeTab.value = "ticket";
};

const onTicketFormSubmitted = () => {
  eventData.tickets = [ticketData];
  store.createNewEvent(eventData);
  toastStore.showToast(t("eventCreatedMessage"));
  router.push({ name: "events" });
};
</script>

<template>
  <div class="pb-4">
    <BackBtn route="events" />

    <h2 class="text-3xl capitalize">
      {{ t("newEventTitle") }}
    </h2>
    <div class="divider"></div>
    <div class="w-full flex justify-center">
      <div class="tabs tabs-boxed">
        <a :class="{ 'tab-active': activeTab === 'event' }" class="tab tab-lg">
          {{ t("eventInfo") }}</a
        >
        <a :class="{ 'tab-active': activeTab === 'ticket' }" class="tab tab-lg">
          {{ t("ticektInfo") }}</a
        >
      </div>
    </div>

    <EventForm
      v-if="activeTab === 'event'"
      @submit="onEventFormSubmitted"
      v-model="eventData"
    />

    <TicketForm
      v-if="activeTab === 'ticket'"
      @submit="onTicketFormSubmitted"
      v-model="ticketData"
    />
  </div>
</template>
