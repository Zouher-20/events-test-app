<script setup>
import { onMounted } from "vue";
import { useEventsStore } from "@/stores/events";
import Toast from "./components/general/Toast.vue";
const store = useEventsStore();
onMounted(() => {
  var events = localStorage.getItem("events");
  console.log(JSON.parse(events));
  if (events) store.setEvents(JSON.parse(events));
  else store.setEvents([]);
});
</script>

<template>
  <Toast />

  <RouterView v-slot="{ Component }">
    <Transition mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
