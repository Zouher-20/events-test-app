<script setup>
import { onBeforeMount, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import EventForm from "../../components/events/EventForm.vue";
import { useEventsStore } from "@/stores/events.js";
import { useToastStore } from "@/stores/toast.js";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const props = defineProps(["id"]);
const { t } = useI18n();
const router = useRouter();
var eventData = reactive({});
const store = useEventsStore();
const toastStore = useToastStore();

const { event, events } = storeToRefs(store);

onBeforeMount(() => {
  console.log(events.value[parseInt(props.id)]);
  eventData = reactive({ ...events.value[parseInt(props.id)] });
});
const onFormSubmitted = () => {
  store.editEvent(eventData, parseInt(props.id));
  toastStore.showToast(t("eventEditedMessage"));
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
