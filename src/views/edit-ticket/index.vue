<script setup>
import { onBeforeMount, ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useEventsStore } from "@/stores/events.js";
import { useToastStore } from "@/stores/toast.js";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import TicketForm from "../../components/events/TicketForm.vue";
import BackBtn from "../../components/general/BackBtn.vue";

const props = defineProps(["id", "eventId"]);
const { t } = useI18n();
const router = useRouter();
var ticketData = reactive({});
const store = useEventsStore();
const toastStore = useToastStore();

const { events } = storeToRefs(store);

onBeforeMount(() => {
  ticketData = reactive({
    ...events.value[parseInt(props.eventId)].tickets[parseInt(props.id)],
  });
});

const onFormSubmitted = () => {
  store.editTicket(ticketData, parseInt(props.id), parseInt(props.eventId));
  toastStore.showToast(t("ticketEditedMessage"));
  router.push({ name: "edit-event", params: { id: props.eventId } });
};
</script>

<template>
  <div class="pb-4">
    <BackBtn route="edit-event" :params="{ eventId }" />
    <h2 class="text-3xl capitalize">
      {{ t("editTicketTitle") }}
    </h2>
    <div class="divider"></div>

    <TicketForm @submit="onFormSubmitted" v-model="ticketData" />
  </div>
</template>
