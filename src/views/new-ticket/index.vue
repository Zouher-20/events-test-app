<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useEventsStore } from "@/stores/events.js";
import { useToastStore } from "@/stores/toast.js";
import { useRouter } from "vue-router";

import TicketForm from "../../components/events/TicketForm.vue";

const props = defineProps(["id"]);
const { t } = useI18n();
const router = useRouter();
var ticketData = reactive({ sold: 0 });
const store = useEventsStore();
const toastStore = useToastStore();

const onFormSubmitted = () => {
  store.addTicket(ticketData, parseInt(props.id));
  toastStore.showToast(t("ticketAddedMessage"));
  router.push({ name: "edit-event", params: { id: props.id } });
};
</script>

<template>
  <div class="pb-4">
    <h2 class="text-3xl capitalize">
      {{ t("newTicketTitle") }}
    </h2>

    <div class="divider"></div>

    <TicketForm @submit="onFormSubmitted" v-model="ticketData" />
  </div>
</template>
