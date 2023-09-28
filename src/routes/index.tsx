import { component$, $, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {Calendar} from "../components/calendar";
import {SchedulingInfo} from "../components/scheduling_info";
import {TimeSlots} from "../components/time_slots";

export const RenderTimeSlots = $(() => {
  return Array.from({ length: (Math.floor(Math.random() * 4) + 1) }).map(() => {
    return <TimeSlots />;
  }
  );
});
const detectMobile = $(() => {
  return window.innerWidth <= 768 
});


export default component$(() => {
  return (
      <main class="grid grid-cols-7 divide-grey divide-x border rounded-[5px] bg-white">
        <div class="col-span-2 p-6">
          <SchedulingInfo/>
        </div>
        <div class="col-span-3 p-6 relative transform -translate-x-full left-full max-w-[500px]">
          <Calendar renderTimeSlots={RenderTimeSlots}/>
        </div>
        <div class="col-span-2 p-6">
          <RenderTimeSlots/>
        </div>
      </main>
  );
});

export const head: DocumentHead = {
  title: "Scheduler v0",
  meta: [
    {
      name: "Scheduling Page",
      content: "A Shallow Copy of a Scheduler App",
    },
  ],
};
