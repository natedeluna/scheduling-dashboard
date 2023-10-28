/* eslint-disable */
import { component$, useSignal, $} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {Calendar} from "../components/calendar";
import {SchedulingInfo} from "../components/scheduling_info";
import {TimeSlots} from "../components/time_slots";
import {DurationToggle} from "../components/duration_toggle";
import {DurationSlider} from "~/components/duration_slider";
import days_meta_data from "~/components/time_slots_singleton.js";

export default component$(() => {
  const days = useSignal<any>(days_meta_data.generateTimes({}));
  let timeSlots = useSignal<any>(days_meta_data.list[0].timeSlots || [""]);

  const updateSelDay = $((newDay: number) => {
    timeSlots.value = days.value[newDay-1].timeSlots;
  });
  return (
      <main class="grid grid-cols-7 divide-grey divide-x border rounded-[5px] bg-white max-w-6xl mx-auto min-w-[1040px] ">
        <div class="col-span-2 p-6 overflow-x-hidden">
          <SchedulingInfo/>
        </div>
        <div class="col-span-3 p-6 relative transform -translate-x-full left-full max-w-[500px]">
          <Calendar days={days.value} updateSelDay={updateSelDay}/>
        </div>
        <div class="col-span-2 p-6">
          <TimeSlots timeSlots={timeSlots}/>
          <DurationToggle/>
          <DurationSlider/>
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
