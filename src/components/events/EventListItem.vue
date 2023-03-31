<script setup>
const props = defineProps(["event"]);
var eventImage =
  props.event.poster && typeof props.event.poster === "file"
    ? URL.createObjectURL(props.event.poster)
    : null;
</script>

<template>
  <article class="flex items-start space-x-6 p-6">
    <img
      :src="eventImage"
      alt=""
      width="60"
      height="90"
      class="flex-none rounded-md bg-slate-100"
    />
    <div class="min-w-0 relative flex-auto">
      <h2 class="font-semibold text-lg truncate pr-20">
        {{ event.title }}
      </h2>
      <div class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="absolute top-0 right-0">
          <span>{{ event.start }}</span> - <span>{{ event.end }}</span>
        </div>
        <div>
          <span class="px-1.5 ring-1 ring-base-300 bg-base-200 rounded">
            {{ event.type }}
          </span>
        </div>

        <div>
          <div class="flex items-center">
            <svg
              width="2"
              height="2"
              fill="currentColor"
              class="mx-2 text-slate-300"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
          </div>
        </div>

        <div class="flex-none w-full mt-2 font-normal">
          <p class="text-slate-400 w-full truncate">
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
