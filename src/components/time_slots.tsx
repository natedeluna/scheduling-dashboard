
/* eslint-disable */
import { $, component$, useSignal } from "@builder.io/qwik";
import { match } from "assert";

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
    // const parseTimes = $((time: string) => {
    //     const reg = /(\d+:\d+)\s*([APMapm]{2})\s*(\-)\s*(\d+:\d+)\s*([APMapm]{2})/;
    //     const matches = time.match(reg);
    //     if (!matches) {
    //         return "Invalid Time";
    //     }
    //     return (
    //         <div class="flex gap-0 mx-auto font-medium align-bottom justify-center">
    //             {matches[1]} <div class="text-xs">{matches[2]}</div> {matches[3]} {matches[4]} <div class="transform translate-y-1">{matches[5]}</div>
    //         </div>
    //     )
    // });
    return (
        <>
            {times.value.value.map((time:String) => {
                return (
                    <div
                        onClick$={$((event:any, currentTarget:any) => {
                            selectTime(event, currentTarget)
                        })} 
                        class={["time-slot","font-medium", "relative","rounded-lg", "border", "text-slate-700", "py-3","my-2", "text-center","active:bg-slate-200", "hover:bg-slate-50", "ease-out", "duration-300", "cursor-pointer"]}>
                        {time}
                    </div>
                )
            })}
        </>
    );
    }
);

export default TimeSlots;