import { $, component$, useSignal } from "@builder.io/qwik";

export const TimeSlots = component$(() => {
    let isSelected = useSignal(false);
    return (
        <>
            <div
                onClick$={$((event, currentTarget) => {isSelected.value = !isSelected.value})} 
                class={["rounded-lg", "border", "text-slate-900", "py-3", "text-center","active:bg-slate-200", isSelected.value ? "bg-[#e8f0fa]" : "hover:bg-slate-50", "ease-out", "duration-300", "cursor-pointer"]}>
                10:00AM - 11:00AM</div>
        </>
    );
    }
);

export default TimeSlots;