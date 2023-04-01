<script setup>
import { computed, ref } from "vue";

const props = defineProps(["value", "inputAttrs", "label"]);
const emit = defineEmits(["imageUploaded"]);
const uploadedImg = ref(null);

function onImageInput(e) {
  uploadedImg.value = e.target.files[0];
  emit("imageUploaded", e.target.files[0]);
}

var imagePreview = computed(() => {
  return uploadedImg.value
    ? URL.createObjectURL(uploadedImg.value)
    : props.value;
});
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text capitalize">{{ label }}</span>
    </label>
    <input
      @change="onImageInput"
      type="file"
      v-bind="inputAttrs"
      class="file-input file-input-bordered w-full max-w-xs"
    />
  </div>
  <div>
    <img
      class="poster-preview"
      v-if="imagePreview"
      :src="imagePreview"
      alt="event poster preview"
    />
  </div>
</template>

<style>
.poster-preview {
  height: 450px;
  max-width: 300px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
