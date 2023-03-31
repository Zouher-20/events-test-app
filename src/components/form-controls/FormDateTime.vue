<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { computed } from "vue";
import { useThemeStore } from "@/stores/theme.js";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const props = defineProps(["modelValue", "inputAttrs", "label"]);
const emit = defineEmits(["update:modelValue"]);

const date = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div>
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <VueDatePicker
      v-bind="inputAttrs"
      :dark="theme === 'dark'"
      :min-date="new Date()"
      v-model="date"
    ></VueDatePicker>
  </div>
</template>

<style>
.dp__overlay {
  position: fixed;
}
.dp__theme_dark {
  --dp-background-color: hsl(var(--b1));
  --dp-text-color: #ffffff;
  --dp-hover-color: hsl(var(--b1));
  --dp-hover-text-color: #ffffff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #005cb2;
  --dp-primary-text-color: #ffffff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #434955;
  --dp-menu-border-color: hsl(var(--b3));
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: hsl(var(--su));
  --dp-success-color-disabled: hsl(var(--suc));
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-highlight-color: rgba(0, 92, 178, 0.2);
}

.dp__input {
  padding: 11px 35px 11px 35px;
  border-radius: 0.5rem;
}
</style>
