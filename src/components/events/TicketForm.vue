<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import FormInputVue from "@/components/form-controls/FormInput.vue";
import FormTextarea from "@/components/form-controls/FormTextarea.vue";
import FormImageInput from "@/components/form-controls/FormImageInput.vue";
import FormDateTime from "@/components/form-controls/FormDateTime.vue";
import PriceInput from "../form-controls/PriceInput.vue";
const { t } = useI18n();

const props = defineProps(["modelValue", "inputAttrs", "label"]);
const emit = defineEmits(["update:modelValue", "submit"]);

const ticketInfo = computed({
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
      :label="t('ticketTitle')"
      v-model="ticketInfo.title"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <PriceInput
        :input-attrs="{ required: true }"
        :label="t('price')"
        v-model="ticketInfo.price"
      />
      <FormInputVue
        :input-attrs="{ required: true, type: 'number' }"
        :label="t('quantity')"
        v-model.number="ticketInfo.quantity"
      />
    </div>

    <div class="flex gap-4">
      <label class="label w-36 cursor-pointer">
        <div class="label-text capitalize text">{{ t("eTicket") }}</div>
        <input
          required
          type="radio"
          value="eTicket"
          name="ticket-type"
          class="radio radio-success"
          v-model="ticketInfo.type"
        />
      </label>
      <label class="label w-36 cursor-pointer">
        <span class="label-text capitalize">{{ t("physicalTicket") }}</span>
        <input
          required
          type="radio"
          value="physicalTicket"
          name="ticket-type"
          class="radio radio-warning"
          v-model="ticketInfo.type"
        />
      </label>
    </div>

    <FormTextarea
      :input-attrs="{ required: true }"
      v-model="ticketInfo.description"
      :label="t('ticketDescription')"
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
