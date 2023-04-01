<script setup>
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import TicketCard from "./TicketCard.vue";
import { useEventsStore } from "@/stores/events";
import { useToastStore } from "@/stores/toast";
import dayjs from "dayjs";
import "dayjs/locale/ar-sa";
import BackBtn from "../general/BackBtn.vue";
const { t, locale } = useI18n();
const props = defineProps(["event", "eventId"]);
const store = useEventsStore();
const toast = useToastStore();

var eventImage = computed(() => {
  return props.event.poster.name
    ? URL.createObjectURL(props.event.poster)
    : null;
});

function onTicketBuy(ticketId) {
  store.buyTicket(ticketId, props.eventId);
  toast.showToast(t("ticketBoughtMessage"));
}
</script>

<template>
  <!-- component -->
  <section class="body-font overflow-hidden">
    <div class="py-12 mx-auto">
      <BackBtn class="mb-5" route="view-store" />

      <div class="mx-auto flex flex-wrap">
        <img
          class="lg:w-1/4 h-96 w-full object-cover object-center rounded border border-gray-200"
          :src="eventImage"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-3xl capitalize title-font font-bold mb-1">
            {{ event.title }}
          </h1>
          <div class="flex gap-2 mt-6 mb-4 items-center">
            <div class="badge">{{ t(event.type) }}</div>
            <div>-</div>
            <div
              class="flex w-full text-slate-400 items-center gap-1 font-normal"
            >
              <Icon icon="material-symbols:pin-drop-outline" class="text-xl" />
              <p class="w-full truncate">
                {{ event.address }}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <div>
              {{ t("startAt") }} :
              <time>{{
                locale === "en"
                  ? dayjs(event.start).format("MMM DD , HH:mm A")
                  : dayjs(event.start)
                      .locale("ar-sa")
                      .format("MMM DD , HH:mm A")
              }}</time>
            </div>
            <div>
              {{ t("finishAt") }} :
              <time>{{
                locale === "en"
                  ? dayjs(event.end).format("MMM DD , HH:mm A")
                  : dayjs(event.end).locale("ar-sa").format("MMM DD , HH:mm A")
              }}</time>
            </div>
          </div>
          <p class="leading-relaxed text-justify">
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <TicketCard
        @ticekt-bought="onTicketBuy(index)"
        v-for="(ticket, index) in event.tickets"
        :key="index"
        :ticket="ticket"
      />
    </div>
  </section>
</template>
