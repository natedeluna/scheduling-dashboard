
import { $, component$, useSignal, useStore, useVisibleTask$} from "@builder.io/qwik";

export const DurationItem = component$((props: {time: number, menuExpanded: boolean, selectedDuration: number, updateSelectedDuration: (newDur: number) => void} ) => {
    return <span
    onClick$={$((event:any, currentTarget:any) => {     props.updateSelectedDuration(props.time)    })}
    class=  {[
        ["relative","py-1", "px-1", "opacity-100", "block", "overflow-auto", "w-fit"],
        props.menuExpanded ? ["hover:bg-slate-100", "active:bg-slate-200"] : ["hover:none"],
         "text-slate-800", "rounded-md", "transition-all", "duration-300", "ease-out", "whitespace-nowrap"]}
    >{props.time} Min</span>;
});

export const DurationSlider = component$(() => {
    let selectedDuration = useSignal(60);
    let showDurationOptions = useSignal(false);
    let durationOptions = [15, 30, 60];

    const toggleDurationMenu = $((event:any, currentTarget:any) => {
        showDurationOptions.value = !showDurationOptions.value;
    });

    const updateSelectedDuration = $((newDur: number) => {
        selectedDuration.value = newDur;
    });
    return (
        <>
            <div id= ""
            class={["relative","w-full","font-[600]", "text-[1rem]", "text-slate-800", "flex"," gap-3","", "py-2","h-fit", "px-2"," rounded-md", !showDurationOptions.value ? ["active:bg-slate-200", "hover:bg-slate-100"]: "",  "transition", "items-center"]}
            onClick$={toggleDurationMenu}
            >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
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
                return <DurationItem time={time} menuExpanded={showDurationOptions.value} selectedDuration={selectedDuration.value} updateSelectedDuration={updateSelectedDuration}/>;
            })}
            </div>
            <div id="container"></div>
        </>
    );
});

export default DurationSlider;