<script setup>
const emit = defineEmits(["confirmed", "canceled"]);
defineProps({
  showModal: Boolean,
  hideFooter: Boolean,
});
</script>

<template>
  <div
    v-if="showModal"
    class="backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center filter items-center flex"
  >
    <div class="relative w-11/12 md:w-1/2 lg:w-1/3 my-6 mx-auto">
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark2"
      >
        <div class="relative p-6 flex-auto">
          <p class="my-4 text-lg leading-relaxed">
            <slot />
          </p>
        </div>
        <div
          v-if="!hideFooter"
          class="flex items-center gap-2 justify-end py-6 px-4 border-t border-solid rounded-b"
        >
          <button
            class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-800 font-bold uppercase text-sm px-6 py-3 rounded outline-none ease-linear transition-all duration-150"
            type="button"
            @click="emit('canceled')"
          >
            Close
          </button>
          <button
            class="text-white bg-primary border-primary hover:opacity-80 border rounded background-transparent font-bold uppercase px-6 py-3 text-sm ease-linear transition-all duration-150"
            type="button"
            @click="emit('confirmed')"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-dark"></div>
</template>
