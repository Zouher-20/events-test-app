<script setup>
import EventsList from "../../components/events/EventsList.vue";
import { useEventsStore } from "@/stores/events";
import FormInput from "../../components/form-controls/FormInput.vue";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useEventsStore();
const search = ref("");

var filteredEvents = [...store.events];

watch(search, (val) => {
  filteredEvents = store.events.filter((e) => e.title.includes(val));
});
</script>

<template>
  <div class="overflow-auto pb-5">
    <FormInput
      class="lg:w-1/2 w-full mb-4 px-5"
      :input-attrs="{ placeholder: t('search') }"
      v-model="search"
    />
    <EventsList :events="filteredEvents" />

    <RouterLink :to="{ name: 'new-event' }">
      <button
        class="btn btn-success fixed bottom-5 flex space-x-1 text-base-100 items-center right-5"
      >
        <Icon icon="mdi-plus" class="text-lg" />
        <div>
          {{ t("newEvent") }}
        </div>
      </button>
    </RouterLink>
  </div>
</template>
