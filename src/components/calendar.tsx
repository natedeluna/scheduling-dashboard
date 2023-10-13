/* eslint-disable */
import { $, component$, useSignal } from "@builder.io/qwik";

export const Calendar = component$((props:{days: Object, updateSelDay: (newDay: number) => void } ) => {
    let days = useSignal<any>(props.days);
    const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsLong = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];    
    
    const nextMonth = $((event:any, currentTarget:any) => {
        const direction = currentTarget.getAttribute("data-index");
        console.log(direction);
    });
    const selectDate = $((event:any, currentTarget:any) => {
        currentTarget.classList.toggle('date-selected')
        Array.from(document.querySelectorAll('.date-item')).forEach((el) => {
            if (el !== currentTarget) {
                el.classList.remove('date-selected');
            }
        });
        
        props.updateSelDay(parseInt(currentTarget.getAttribute("data-key")));
    });

    const max = 6;
    let start = 0;
    let el_array = [];
    for (let i = 0; i <= Object.keys(days.value).length-1;) {
        start < max ? start++ : start = 0;
        if (days.value[i].dayOfWeek === start) {
            el_array.push (
                <div 
                    data-key={days.value[i].day}
                    class={["relative","flex", "hover:bg-slate-50" ,"active:bg-slate-200" ,"justify-center" ,"cursor-default" ,"bg-slate-0" ,"rounded-lg" ,"py-5" ,"date-item" ,"transition-all" ,"duration-800" ,"ease-out" ,days.value[i].timeSlots.length !== 0 ? "slots-available" : ""]}
                    onClick$={selectDate}>
                    {days.value[i].day}
                </div>
            );
            i++;
        } else {
            el_array.push (
                <div data-key={days.value[i].day} class="flex justify-center cursor-default rounded-lg py-5 transition-all duration-700 ease-out">
                </div>
            );
        }
    }

    return (
        <>
            <div id="cal-top-bar" class=" relative flex gap-3">

                <h1 class="text-gray-400 ">{monthsLong[(days.value[0].month)]}</h1>
                <h1 class="">{days.value[0].year}</h1>

                <div class=" ml-auto flex gap-5 items-center">
                    <div onClick$={nextMonth} data-index="left" style="padding: 7px; border-radius: 5px;" class="hover:bg-slate-100 ">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 11L1.91743 6.7141C1.43999 6.3115 1.44431 5.57463 1.92642 5.17765L7 1" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
                    </svg>

                    </div>
                    <div onClick$={nextMonth} data-index="right" style="padding: 7px; border-radius: 5px;" class="hover:bg-slate-100 ">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.08257 5.2859C6.56001 5.6885 6.55569 6.42537 6.07358 6.82235L1 11" stroke="#969696" stroke-width="2" stroke-linecap="round"/>
                    </svg>

                    </div>
                </div>
            </div>
            <div id="cal-days-bar" class="w-full my-5 flex justify-around">
                {daysShort.map((day, index) => {
                    return (
                        <h1 key={index} class="text-gray-600 tracking-wide text-sm">{day}</h1>
                    );
                })}
            </div>
            <div class="cal-grid-in-view grid grid-cols-7 gap-0.5">
                {
                    el_array.map((day, index) => {
                        return (
                            day
                        );
                    })
                }
            </div>
        </>
    );
    }
);

export default Calendar;