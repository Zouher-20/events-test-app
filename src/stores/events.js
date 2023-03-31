import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", {
  state: () => {
    return { events: [] };
  },

  actions: {
    setEvents(events) {
      this.events = events;
    },
    createNewEvent(eventData) {
      this.events.push(eventData);
      this.updateEvents();
    },
    editEvent(eventData, id) {
      this.events[id] = eventData;
      this.updateEvents();
    },
    updateEvents() {
      localStorage.setItem("events", JSON.stringify(this.events));
    },
  },
});
