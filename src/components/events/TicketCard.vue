<script setup>
import { useI18n } from "vue-i18n";
import Modal from "@/components/general/Modal.vue";
import { ref } from "vue";
const props = defineProps(["ticket"]);
const { t } = useI18n();
const emit = defineEmits(["ticektBought"]);

const ticketModalVisible = ref(false);
function onTicketConfirmed() {
  emit("ticektBought");
  ticketModalVisible.value = false;
}
</script>

<template>
  <div class="card bg-base-200">
    <Modal
      @confirmed="onTicketConfirmed"
      @canceled="ticketModalVisible = false"
      v-model:showModal="ticketModalVisible"
    >
      {{ t("buyTicketMessage") }}
    </Modal>
    <div class="card-body">
      <h2 class="card-title font-bold">{{ ticket.title }}</h2>
      <div class="flex items-center justify-between">
        <div class="badge my-2">{{ t(ticket.type) }}</div>

        <div class="text-2xl">{{ ticket.price }} $</div>
      </div>

      <p>{{ ticket.description }}</p>
      <div class="card-actions mt-2 items-center justify-between">
        <div class="text-sm">
          {{ t("available") }} :
          <span
            class="text-lg"
            :class="
              ticket.quantity - ticket.sold <= 0 ? 'text-error' : 'text-success'
            "
          >
            {{
              ticket.quantity - ticket.sold <= 0
                ? t("soldOut")
                : ticket.quantity - ticket.sold
            }}</span
          >
        </div>
        <button
          :disabled="ticket.quantity - ticket.sold <= 0"
          @click="ticketModalVisible = true"
          class="btn btn-primary"
        >
          {{ t("buyTicket") }}
        </button>
      </div>
    </div>
  </div>
</template>
