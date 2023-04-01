<script setup>
import { onMounted, onBeforeMount } from "vue";
import { useEventsStore } from "@/stores/events";
import Toast from "./components/general/Toast.vue";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
const store = useEventsStore();
const { updateKey } = storeToRefs(store);
const { locale } = useI18n();
onBeforeMount(() => {
  var getLocale = localStorage.getItem("lang") || "en";
  locale.value = getLocale;
});
onMounted(() => {
  var events = localStorage.getItem("events");
  if (events) store.setEvents(JSON.parse(events));
  // Dummy initial data
  else
    store.setEvents([
      {
        title: "كرنفال العيد",
        type: "online",
        address: "الدمام ",
        description:
          "فعالية كرنفال العيد الترفيهية؛ ستكون جاذبة وشاملة للعائلات وجميع الفئات والأذواق؛ لتسهم في إثراء العيد والاحتفال بأيامه، وذلك من خلال العروض البحرية، والاسلكية، والحية، والفرق الشعبية. ",
        start: "2023-04-08T15:34:00.000Z",
        end: "2023-04-11T20:46:00.000Z",
        poster: {},
        tickets: [
          {
            sold: 1,
            title: "تذكرة حضور لشخص واحد",
            price: 20,
            quantity: 18,
            type: "eTicket",
            description: "تذكرة حضور لشخص واحد دون مرافقين",
          },
        ],
      },
    ]);

  if (locale.value === "en") {
    document.documentElement.setAttribute("lang", "en");
    document.getElementsByTagName("body")[0].dir = "ltr";
  } else {
    document.documentElement.setAttribute("lang", "ar-SA");
    document.getElementsByTagName("body")[0].dir = "rtl";
  }
});
</script>

<template>
  <Toast />

  <div :key="updateKey">
    <RouterView />
  </div>
</template>
