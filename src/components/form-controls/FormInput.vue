<script setup>
import { computed } from "vue";

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
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      v-model="value"
      type="text"
      v-bind="inputAttrs"
      class="input input-bordered"
    />
  </div>
</template>
