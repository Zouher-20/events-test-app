<script setup>
import { onBeforeMount, ref } from "vue";
import EventDetails from "../../components/events/EventDetails.vue";
import { useEventsStore } from "../../stores/events";
const props = defineProps(["id"]);
const store = useEventsStore();
const event = ref({});
onBeforeMount(() => {
  event.value = store.events[parseInt(props.id)];
});
</script>

<template>
  <div class="pb-8">
    <EventDetails :event-id="id" :event="event" />
  </div>
</template>
