import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {Calendar} from "../components/calendar";
import {SchedulingInfo} from "../components/scheduling_info";
import {TimeSlots} from "../components/time_slots";

export default component$(() => {
  return (
    <main class="grid grid-cols-7 divide-grey divide-x border rounded-[5px] bg-white">
      <div class="col-span-2 p-6 ">
        <SchedulingInfo />
      </div>
      <div class="col-span-3 p-6 relative transform -translate-x-full left-full max-w-[500px]">
        <Calendar />
      </div>
      <div class="col-span-2 p-6">
        <TimeSlots />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
