<script setup>
import EventListItem from "./eventListItem.vue";
defineProps({ events: Array });
</script>

<template>
  <ul class="divide-y divide-base-200">
    <RouterLink
      :to="{ name: 'edit-event', params: { id: index } }"
      v-for="(event, index) in events"
      :key="index"
    >
      <EventListItem
        class="transition-all ease-in-out duration-300 hover:shadow-lg hover:cursor-pointer hover:-translate-y-1"
        :event="event"
      />
    </RouterLink>
  </ul>
</template>
