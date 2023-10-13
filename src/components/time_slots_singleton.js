class TimeSlotsSingleton {
    constructor() {
        this.daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        this.monthsLong = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September",
        ];    
        this.today = new Date();
        this.currentYear = this.today.getFullYear();
        this.currentMonth = this.today.getMonth();
        this.daysInCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.selectedTimeWindow = 60;
        // **********************
        this.list = Array.from({ length: this.daysInCurrentMonth }, (_, i) => {
          return {
            day: i + 1,
            month: this.currentMonth,
            year: this.currentYear,
            dayOfWeek: new Date(this.currentYear, this.currentMonth, i + 1).getDay(),
            timeSlots: [],
          };
        });
        // **********************

        for (let i = 0; i < this.list.length -1 ; i++) {
            function formatHour(hour) {
                const period = hour < 12 || hour === 24 ? 'AM' : 'PM';
                const formattedHour = hour % 12 || 12; // Convert to 12-hour format, with 0 replaced by 12
                return `${formattedHour}:00 ${period}`;
              }
              let startingTime = 8;
              Array(Math.floor(Math.random() * 4)).fill().forEach(() => {
                const firstHour = Math.floor(Math.random() * (23 - startingTime + 1)) + startingTime;
                let secondHour = firstHour + this.selectedTimeWindow / 60;
                if (secondHour > 23) {  secondHour = 0;  }
                this.list[i].timeSlots.push(
                    `${formatHour(firstHour)} - ${formatHour(secondHour)}`
                );
                startingTime = secondHour;
            });
        }
        return this.list;
    }
}

const days_meta_data = Object.freeze(new TimeSlotsSingleton());
export default days_meta_data;