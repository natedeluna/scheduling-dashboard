
import { $, component$, useSignal, useVisibleTask$} from "@builder.io/qwik";

export const DurationItem = component$((props: {
    time: number, selectedDuration: number, updateSelectedDuration: (newDur: number) => void
    setOffsetLeft: (time: number, offsetLeft: number, width: number, init: boolean) => void; // Callback prop
} ) => {
    useVisibleTask$(() => {
        const offsetLeft = document.getElementById(`duration-item-${props.time}`)?.offsetLeft;
        const compWidth = parseInt(window.getComputedStyle(document.getElementById(`duration-item-${props.time}`)).width);
        props.setOffsetLeft(props.time, offsetLeft || 0, compWidth, true);
    });
    return <span
    onClick$={$((event:any, currentTarget:any) => {     props.updateSelectedDuration(props.time)    })}
    id={`duration-item-${props.time}`}
    class=  {[
        ["relative","py-1", "px-1", "opacity-100", "block", "overflow-auto", "w-fit", "cursor-pointer", "text-center", "font-500"],
        props.time == props.selectedDuration ?["text-slate-800"] : ["text-slate-300"],
        props.time == props.selectedDuration ?[""] : ["hover:bg-indigo-50"],
         "text-slate-800", "rounded-xl", "transition-all", "duration-300", "ease-out", "whitespace-nowrap", "z-10",]}
    >{props.time} Min</span>;
});

export const DurationSignal = component$((props:{
    transform: number
    width: number
}) => {
    const offsetLeft = props.transform.toString() + "px";
    return (
        <div
        class={[
          'absolute',
          'h-full',
          'rounded-lg',
          'bg-indigo-100',
          'pointer-events-none',
          'transition-transform', // Add transition-transform for the transform property
          'duration-300',
          'ease-out',
        ]}
        style={{ transform: `translateX(${offsetLeft})`, width: `${props.width}px` }}
      >
        </div>
    )
});

export const DurationSlider = component$(() => {
    let selectedDuration = useSignal(30);
    let durationOptions = [15, 30, 60];

    const currentOffsetLeft = useSignal(60);
    const currentWidth = useSignal(0);

    const setOffsetLeft = $((time: number, offsetLeft: number, width: number, init: boolean) => {
        if (time === selectedDuration.value && currentOffsetLeft.value !== offsetLeft && init) {
            currentOffsetLeft.value = offsetLeft;
            currentWidth.value = width;
            return;
        }
        if (!init) {
            currentOffsetLeft.value = offsetLeft;
            currentWidth.value = width;
        }
      });

    const selectDuration = $((event:any, currentTarget:any) => {
        if (event.target.id) {
            const offset = document.getElementById(event.target.id).offsetLeft;
            currentOffsetLeft.value = offset;
            const time = parseInt(event.target.id.split("-")[2]);
            selectedDuration.value = time;
            setOffsetLeft(time, currentOffsetLeft.value, currentWidth.value, false);
        }
    });

    const updateSelectedDuration = $((newDur: number) => {
        selectedDuration.value = newDur;
    });
    return (
        <>
            <div id= ""
                class={["relative","w-fit","font-[600]", "text-[1rem]", "text-slate-800", "flex"," gap-2","", "py-1","h-fit", "px-2"," rounded-xl", "transition", "items-center", "border", "border-slate-100", "bg-slate-50", "my-2"]}
                onClick$={selectDuration}
            >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style="min-width: 18px;">
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
            <div class={["relative" ,"flex" ,"w-full", "transition", "gap-3","h-fit" ,"items-center"]}>
                {durationOptions.map((time) => {
                    return <DurationItem 
                        time={time} 
                        selectedDuration={selectedDuration.value} 
                        updateSelectedDuration={updateSelectedDuration} 
                        setOffsetLeft={setOffsetLeft}
                        />;
                })}
                <DurationSignal transform={currentOffsetLeft.value} width={currentWidth.value}/>
            </div>
            </div>
            <div id="container"></div>
        </>
    );
});

export default DurationSlider;