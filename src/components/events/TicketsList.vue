<script setup>
import TicketListItem from "./TicketListItem.vue";
import Modal from "@/components/general/Modal.vue";
import { useToastStore } from "@/stores/toast";
import { reactive, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import FormInput from "../form-controls/FormInput.vue";
const props = defineProps(["tickets", "eventId", "id"]);
const emit = defineEmits(["deleteTicketConfirmed"]);
const { t } = useI18n();
const deleteModalVisible = ref(false);
const toDeleteIndex = ref(null);
const toast = useToastStore();
var filteredTickets = reactive([...props.tickets]);

const search = ref("");

watch(search, (val) => {
  filteredTickets = props.tickets.filter((e) => e.title.includes(val));
});

function onDeleteConfirmed() {
  emit("deleteTicketConfirmed", toDeleteIndex.value);
  toast.showToast(t("ticketDeletedMessage"));
  deleteModalVisible.value = false;
}
</script>

<template>
  <FormInput
    class="lg:w-1/2 w-full mb-4"
    :input-attrs="{ placeholder: t('search') }"
    v-model="search"
  />
  <ul class="divide-y divide-base-200">
    <Modal
      @confirmed="onDeleteConfirmed"
      @canceled="deleteModalVisible = false"
      v-model:showModal="deleteModalVisible"
    >
      {{ t("deleteConfirmation") }}
    </Modal>
    <TicketListItem
      @deleteClicked="
        deleteModalVisible = true;
        toDeleteIndex = index;
      "
      v-for="(ticket, index) in filteredTickets"
      :key="index"
      class="transition-all ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1"
      :ticket="ticket"
      :id="tickets.indexOf(ticket)"
      :event-id="eventId"
    />
  </ul>
</template>
