<script setup>
import EventListItem from "./EventListItem.vue";
import Modal from "@/components/general/Modal.vue";
import { useEventsStore } from "@/stores/events";
import { useToastStore } from "@/stores/toast";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
defineProps({ events: Array });
const { t } = useI18n();
const deleteModalVisible = ref(false);
const toDeleteIndex = ref(null);
const store = useEventsStore();
const toast = useToastStore();
function onDeleteConfirmed() {
  store.deleteEvent(toDeleteIndex.value);
  toast.showToast(t("eventDeletedMessage"));
  deleteModalVisible.value = false;
}

// TODO : delete event Functionality
</script>

<template>
  <ul class="divide-y divide-base-200">
    <Modal
      @confirmed="onDeleteConfirmed"
      @canceled="deleteModalVisible = false"
      v-model:showModal="deleteModalVisible"
    >
      {{ t("deleteConfirmation") }}
    </Modal>
    <template v-if="events.length > 0">
      <EventListItem
        @deleteClicked="
          deleteModalVisible = true;
          toDeleteIndex = store.events.indexOf(event);
        "
        v-for="(event, index) in events"
        :key="index"
        class="transition-all ease-in-out duration-300 hover:shadow-lg hover:-translate-y-1"
        :event="event"
        :id="store.events.indexOf(event)"
      />
    </template>
    <div v-else class="w-full text-center py-4 opacity-70">
      {{ t("noEvents") }}
      <RouterLink class="link link-hover text-info" :to="{ name: 'new-event' }">
        {{ t("newEvent") }}
      </RouterLink>
    </div>
  </ul>
</template>
