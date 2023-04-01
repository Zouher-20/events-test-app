<script setup>
import StatisticCard from "@/components/dashboard/StatisticCard.vue";
import { useI18n } from "vue-i18n";
import EventsList from "@/components/events/EventsList.vue";
import { Icon } from "@iconify/vue";
import { useEventsStore } from "@/stores/events";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";

const store = useEventsStore();
const { events } = storeToRefs(store);
const { t } = useI18n();
const statisitics = ref([]);
var totalTicketsSold = ref(0);
var totalRevenue = ref(0);
onBeforeMount(() => {
  events.value.forEach((element) => {
    if (element.tickets)
      element.tickets.forEach((el) => {
        if (el.sold) {
          totalTicketsSold.value += el.sold;
          totalRevenue.value += el.sold * el.price;
        }
      });
  });
  statisitics.value = [
    {
      title: t("upcomingEvents"),
      value: store.upcoming.length,
      icon: "material-symbols:event",
    },
    {
      title: t("pastEvents"),
      value: store.past.length,
      icon: "mdi:event-clock",
    },
    {
      title: t("totalTicketsSold"),
      value: totalTicketsSold.value,
      icon: "ph:ticket",
    },
    {
      title: t("totalRevenue"),
      value: `${totalRevenue.value} $`,
      icon: "solar:dollar-minimalistic-linear",
    },
  ];
});
</script>

<template>
  <div class="pb-20">
    <div class="flex items-center justify-center">
      <!-- Dashboard Cards -->
      <div class="grid md:grid-cols-2 gap-6 w-full">
        <StatisticCard :card="card" v-for="card in statisitics" :key="n" />
      </div>
    </div>

    <div class="w-full mt-8 mb-4 flex justify-between items-center">
      <h3 class="text-2xl capitalize">{{ t("dashboardEvents") }}</h3>
      <RouterLink :to="{ name: 'events' }">
        <button class="btn btn-primary btn-sm text-xs flex gap-1 items-center">
          <Icon icon="material-symbols:format-list-bulleted" class="text-lg" />
          <div>
            {{ t("viewAll") }}
          </div>
        </button>
      </RouterLink>
    </div>

    <EventsList :events="events.slice(0, 5)" />
    <RouterLink :to="{ name: 'new-event' }">
      <button
        class="btn btn-success fixed bottom-5 flex gap-1 text-base-100 items-center right-5"
      >
        <Icon icon="mdi-plus" class="text-lg" />
        <div>
          {{ t("newEvent") }}
        </div>
      </button>
    </RouterLink>
  </div>
</template>
