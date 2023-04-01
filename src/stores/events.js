import { defineStore } from "pinia";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const useEventsStore = defineStore("events", {
  state: () => {
    return { events: [], updateKey: 0 };
  },

  getters: {
    upcoming: (state) => {
      return state.events.filter((el) =>
        dayjs(el.start).isSameOrAfter(dayjs())
      );
    },
    past: (state) => {
      return state.events.filter((el) =>
        dayjs(el.start).isSameOrBefore(dayjs())
      );
    },
  },

  actions: {
    setEvents(events) {
      this.events = events;
      this.updateEvents();
    },
    buyTicket(ticketId, eventId) {
      this.events[parseInt(eventId)].tickets[parseInt(ticketId)].sold += 1;
      this.updateEvents();
    },
    createNewEvent(eventData) {
      this.events.push(eventData);
      this.updateEvents();
    },
    editEvent(eventData, id) {
      this.events[id] = eventData;
      this.updateEvents();
    },
    deleteEvent(id) {
      this.events.splice(id, 1);
      this.updateEvents();
    },
    addTicket(ticketData, eventId) {
      this.events[eventId].tickets.push(ticketData, eventId);
      this.updateEvents();
    },

    editTicket(ticketData, id, eventId) {
      this.events[eventId].tickets[id] = { ...ticketData };
      this.updateEvents();
    },
    deleteTicket(id, eventId) {
      this.events[eventId].tickets.splice(id, 1);
      this.updateEvents();
    },

    updateEvents() {
      localStorage.setItem("events", JSON.stringify(this.events));
      this.updateKey++;
    },
  },
});
