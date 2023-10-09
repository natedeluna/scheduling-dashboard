
/* eslint-disable */
import { $, component$, useSignal } from "@builder.io/qwik";

export const TimeSlots = component$((props: {timeSlots:any}) => {
    let times = useSignal(props.timeSlots);
    const selectTime = $((event:any, currentTarget:any) => {
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
    return (
        <>
            {times.value.value.map((time:String) => {
                return (
                    <div
                        onClick$={$((event:any, currentTarget:any) => {
                            selectTime(event, currentTarget)
                        })} 
                        class={["time-slot","rounded-lg", "border", "text-slate-900", "py-3","my-2", "text-center","active:bg-slate-200", "hover:bg-slate-50", "ease-out", "duration-300", "cursor-pointer"]}>
                        {time}
                    </div>
                )
            })}
        </>
    );
    }
);

export default TimeSlots;