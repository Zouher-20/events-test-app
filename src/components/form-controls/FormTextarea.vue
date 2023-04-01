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
      <span class="label-text capitalize">{{ label }}</span>
    </label>
    <textarea
      v-model="value"
      type="text"
      v-bind="inputAttrs"
      class="textarea textarea-bordered w-full h-28"
    />
  </div>
</template>
