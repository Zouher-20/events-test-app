<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import EventCard from "../../components/events/EventCard.vue";
import { useEventsStore } from "../../stores/events";
const { t } = useI18n();
const activeTab = ref("upcoming");
const store = useEventsStore();
const events = ref(store.upcoming);
</script>

<template>
  <div class="py-8">
    <div class="w-full flex justify-center">
      <div class="tabs tabs-boxed">
        <a
          class="tab tab-lg"
          :class="{ 'tab-active': activeTab === 'upcoming' }"
          @click="
            events = store.upcoming;
            activeTab = 'upcoming';
          "
          >{{ t("upcoming") }}</a
        >
        <a
          @click="
            events = store.past;
            activeTab = 'past';
          "
          class="tab tab-lg"
          :class="{ 'tab-active': activeTab === 'past' }"
          >{{ t("past") }}</a
        >
      </div>
    </div>

    <Transition mode="out-in">
      <template v-if="events.length > 0">
        <div
          :key="activeTab"
          class="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <RouterLink
            v-for="(event, index) in events"
            :key="index"
            :to="{
              name: 'event-details',
              params: { id: store.events.indexOf(event) },
            }"
          >
            <EventCard :event="event" />
          </RouterLink>
        </div>
      </template>
      <div v-else class="w-full text-center py-4 opacity-70">
        {{ t("noEvents") }}
      </div>
    </Transition>
  </div>
</template>
