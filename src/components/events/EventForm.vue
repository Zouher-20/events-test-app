<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import FormInputVue from "@/components/form-controls/FormInput.vue";
import FormTextarea from "@/components/form-controls/FormTextarea.vue";
import FormImageInput from "@/components/form-controls/FormImageInput.vue";
import FormDateTime from "@/components/form-controls/FormDateTime.vue";
const { t } = useI18n();

const props = defineProps(["modelValue", "inputAttrs", "label"]);
const emit = defineEmits(["update:modelValue", "submit"]);

const eventInfo = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <form @submit.prevent="emit('submit')" class="flex flex-col gap-4">
    <FormInputVue
      :input-attrs="{ required: true }"
      :label="t('eventTitle')"
      v-model="eventInfo.title"
    />

    <div class="flex space-x-4">
      <label class="label w-24 cursor-pointer">
        <div class="label-text text">{{ t("online") }}</div>
        <input
          required
          type="radio"
          value="online"
          name="event-type"
          class="radio radio-success"
          v-model="eventInfo.type"
        />
      </label>
      <label class="label w-28 cursor-pointer">
        <span class="label-text">{{ t("inPerson") }}</span>
        <input
          required
          type="radio"
          value="in-person"
          name="event-type"
          class="radio radio-warning"
          v-model="eventInfo.type"
        />
      </label>
    </div>

    <FormTextarea
      :input-attrs="{ required: true }"
      v-model="eventInfo.description"
      :label="t('eventDescription')"
    />

    <FormDateTime
      :input-attrs="{ required: true }"
      v-model="eventInfo.start"
      :label="t('startAt')"
    />

    <FormDateTime
      :input-attrs="{ required: true }"
      v-model="eventInfo.end"
      :label="t('finishAt')"
    />

    <FormImageInput
      :input-attrs="{ required: true }"
      @imageUploaded="eventInfo.poster = $event"
      :label="t('eventPoster')"
    />

    <div class="form-control mt-6">
      <button
        type="submit"
        class="btn font-bold lg:w-32 w-full ml-auto text-base-100 btn-success"
      >
        {{ t("save") }}
      </button>
    </div>
  </form>
</template>
