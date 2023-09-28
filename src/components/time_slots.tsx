import { $, component$, useSignal } from "@builder.io/qwik";

export const TimeSlots = component$(() => {
    const selectTime = $((event, currentTarget) => {
        Array.from(document.querySelectorAll('.time-slot')).forEach((el) => {
            if (el !== currentTarget) {
                el.classList.remove('bg-[#e8f0fa]');
                el.classList.add("hover:bg-slate-50");
            } else {
                el.classList.add('bg-[#e8f0fa]');
                el.classList.remove("hover:bg-slate-50");
            }
        });
    });
    const timeWindow = useSignal(`${Math.floor(Math.random() * 12) + 1}:00 PM - ${Math.floor(Math.random() * 12) + 1}:00 PM`);
    return (
        <>
            <div
                onClick$={$((event, currentTarget) => {
                    selectTime(event, currentTarget)
                })} 
                class={["time-slot","rounded-lg", "border", "text-slate-900", "py-3","my-2", "text-center","active:bg-slate-200", "hover:bg-slate-50", "ease-out", "duration-300", "cursor-pointer"]}>
                {timeWindow}
            </div>
        </>
    );
    }
);

export default TimeSlots;