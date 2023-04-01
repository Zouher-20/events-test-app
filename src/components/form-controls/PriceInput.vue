<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["modelValue", "inputAttrs", "label"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text capitalize">{{ label }}</span>
    </label>
    <label>
      <input
        v-model="value"
        type="number"
        v-bind="inputAttrs"
        class="input input-bordered"
      />
      <span class="ml-3 text-2xl"> $ </span>
    </label>
  </div>
</template>
