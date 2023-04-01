<script setup>
import { onBeforeMount, ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import EventForm from "../../components/events/EventForm.vue";
import { useEventsStore } from "@/stores/events.js";
import { useToastStore } from "@/stores/toast.js";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import TicketsList from "../../components/events/TicketsList.vue";
import { computed } from "@vue/reactivity";
import { Icon } from "@iconify/vue";
import BackBtn from "../../components/general/BackBtn.vue";

const props = defineProps(["id"]);
const { t } = useI18n();
const router = useRouter();
var eventData = reactive({});
const store = useEventsStore();
const toastStore = useToastStore();

const { events } = storeToRefs(store);
const activeTab = ref("event");

const tickets = computed(() => {
  return eventData.tickets || [];
});

onBeforeMount(() => {
  eventData = reactive({ ...events.value[parseInt(props.id)] });
});

const onFormSubmitted = () => {
  store.editEvent(eventData, parseInt(props.id));
  toastStore.showToast(t("eventEditedMessage"));
  router.push({ name: "events" });
};

const deleteTicket = (ticketId) => {
  store.deleteTicket(ticketId, parseInt(props.id));
  toastStore.showToast(t("eventEditedMessage"));
};
</script>

<template>
  <div class="pb-4">
    <BackBtn route="events" />
    <h2 class="text-3xl capitalize">
      {{ t("editEventTitle") }}
    </h2>
    <div class="divider"></div>
    <div class="flex justify-center">
      <div class="tabs tabs-boxed">
        <a
          @click="activeTab = 'event'"
          class="tab tab-lg"
          :class="{ 'tab-active': activeTab === 'event' }"
          >{{ t("event", 0) }}</a
        >
        <a
          @click="activeTab = 'ticket'"
          class="tab tab-lg"
          :class="{ 'tab-active': activeTab === 'ticket' }"
          >{{ t("ticket") }}</a
        >
      </div>
    </div>
    <EventForm
      v-if="activeTab === 'event'"
      @submit="onFormSubmitted"
      v-model="eventData"
    />
    <template v-else>
      <RouterLink
        class="w-fit block"
        :to="{ name: 'new-ticket', params: { id } }"
      >
        <button
          class="btn mt-6 btn-success flex gap-1 text-base-100 items-center"
        >
          <Icon icon="mdi-plus" class="text-lg" />
          <div>
            {{ t("newTicket") }}
          </div>
        </button>
      </RouterLink>

      <TicketsList
        @delete-ticket-confirmed="deleteTicket"
        :event-id="id"
        v-model:tickets="tickets"
      />
    </template>
  </div>
</template>
