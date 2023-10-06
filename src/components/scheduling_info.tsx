/* eslint-disable */
import { $, component$, useSignal } from "@builder.io/qwik";


export const DurationOption = component$((props: {time: number, menuExpanded: boolean, selectedDuration: number, updateSelectedDuration: (newDur: number) => void} ) => {
    return <span
    onClick$={$((event, currentTarget) => {     props.updateSelectedDuration(props.time)    })}
    class=  {[
        props.menuExpanded || props.time == props.selectedDuration ? ["py-1", "px-1", "opacity-100", "block", "overflow-auto"] : ["hidden", "py-1", "px-1", "opacity-0", "overflow-hidden"],
        props.menuExpanded ? ["hover:bg-slate-100", "active:bg-slate-200"] : ["hover:none"],
         "text-slate-800", "rounded-md", "transition-all", "duration-300", "ease-out"]}
    >{props.time} Min</span>;
});

export const SchedulingInfo = component$(() => {

    let selectedDuration = useSignal(60);
    let showDurationOptions = useSignal(false);
    let durationOptions = [15, 30, 60];

    const toggleDurationMenu = $((event, currentTarget) => {
        showDurationOptions.value = !showDurationOptions.value;
    });

    const updateSelectedDuration = $((newDur: number) => {
        selectedDuration.value = newDur;
    });

    return (
        <>
            <div class="flex flex-col justify-center items-start gap-3">
                <div class="w-[32px] h-[32px] rounded-[100px] bg-slate-50 overflow-hidden">
                    <img src="public/static/4ACBD75E-C9DD-443C-AD35-8A6E0C5D67EB.JPG" alt="Profile Image" width="200" height="200" class=""/>
                </div>
                <h3 class="font-[600] text-slate-500">Nate De Luna</h3>
            </div>
            <div id= "duration-menu"
                class={["font-[600]", "text-[1rem]", "text-slate-800", "flex"," gap-3"," my-5", "py-2", "px-2"," rounded-md", !showDurationOptions.value ? ["active:bg-slate-200", "hover:bg-slate-100"]: "",  "transition"]}
                onClick$={toggleDurationMenu}
                >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: auto 0;">
                    <g clip-path="url(#clip0_451_5)">
                    <path d="M17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9ZM2.25512 9C2.25512 12.7251 5.27491 15.7449 9 15.7449C12.7251 15.7449 15.7449 12.7251 15.7449 9C15.7449 5.27491 12.7251 2.25512 9 2.25512C5.27491 2.25512 2.25512 5.27491 2.25512 9Z" fill="#0F0F0F"/>
                    <path d="M9 3.75C8.58577 3.75 8.25 4.08578 8.25 4.5V9.35002C8.25 9.35002 8.25 9.54555 8.34503 9.69263C8.40863 9.81735 8.50777 9.92573 8.63805 10.001L12.1029 12.0014C12.4616 12.2085 12.9203 12.0856 13.1274 11.7269C13.3345 11.3681 13.2116 10.9094 12.8529 10.7024L9.75 8.9109V4.5C9.75 4.08579 9.41422 3.75 9 3.75Z" fill="#0F0F0F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_451_5">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                {durationOptions.map((time) => {
                    return <DurationOption time={time} menuExpanded={showDurationOptions.value} selectedDuration={selectedDuration.value} updateSelectedDuration={updateSelectedDuration}/>;
                })}
            </div>
            <div class={["py-1","px-2","w-fit", "bg-slate-100", "flex", "gap-3", "rounded-md", "text-[.8rem]", "font-[600]", "block"]}>
                <svg class="mt-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0C4.0293 0 0 4.0293 0 9C0 13.9707 4.0293 18 9 18C13.9707 18 18 13.9707 18 9C18 4.0293 13.9707 0 9 0ZM12.582 8.1C12.4884 5.74875 12.0316 3.6693 11.3553 2.20365C13.8973 3.08745 15.7927 5.35275 16.1374 8.1H12.582ZM9 16.155C8.45415 15.7253 7.3764 13.5738 7.2207 9.9H10.7793C10.6236 13.5738 9.54585 15.7253 9 16.155ZM7.2207 8.1C7.3764 4.4262 8.45415 2.27475 9 1.845C9.54585 2.27475 10.6236 4.4262 10.7793 8.1H7.2207ZM6.6447 2.20365C5.9688 3.6693 5.5116 5.74875 5.418 8.1H1.86255C2.20725 5.3532 4.10265 3.08745 6.6447 2.20365ZM5.418 9.9C5.5116 12.2512 5.96835 14.3307 6.6447 15.7963C4.10265 14.9125 2.20725 12.6468 1.86255 9.9H5.418ZM11.3553 15.7963C12.0312 14.3307 12.4884 12.2512 12.582 9.9H16.1379C15.7927 12.6468 13.8973 14.9125 11.3553 15.7963Z" fill="#455060"/>
                </svg>
                America / New York
            </div>
            <div class="text-sm text-gray-500 my-5"><span class="text-gray-300">
                Meeting Notes:</span><br></br>
                <textarea maxLength={100}> A quick product demo</textarea>
            </div>
            <div class="flex gap-3 text-slate-800 py-2 px-2 cursor-pointer rounded-md hover:bg-emerald-100 active:bg-emerald-200 transition mt-[5rem]">
                <svg class="my-auto"width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 1.9375L8.52941 10.375L5.70588 7.5625M12.2941 1H2.88235C1.84276 1 1 1.83947 1 2.875V14.125C1 15.1606 1.84276 16 2.88235 16H14.1765C15.2161 16 16.0588 15.1606 16.0588 14.125V8.5" stroke="#455060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Verify Time
            </div>
        </>
    );
    }
);

export default SchedulingInfo;