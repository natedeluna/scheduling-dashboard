/* eslint-disable */
import { component$, useSignal, $} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {Calendar} from "../components/calendar";
import {SchedulingInfo} from "../components/scheduling_info";
import {TimeSlots} from "../components/time_slots";
import days_meta_data from "~/components/time_slots_singleton.js";

export default component$(() => {
  const days = useSignal<Object>(days_meta_data);
  let timeSlots = useSignal<any>(days_meta_data[0]?.timeSlots || [""]);

  const updateSelDay = $((newDay: number) => {
    timeSlots.value = days.value[newDay-1].timeSlots;
  });
  return (
      <main class="grid grid-cols-7 divide-grey divide-x border rounded-[5px] bg-white">
        <div class="col-span-2 p-6">
          <SchedulingInfo/>
        </div>
        <div class="col-span-3 p-6 relative transform -translate-x-full left-full max-w-[500px]">
          <Calendar days={days.value} updateSelDay={updateSelDay}/>
        </div>
        <div class="col-span-2 p-6">
          <TimeSlots timeSlots={timeSlots}/>
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
