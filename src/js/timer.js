
const template = () => `
<div class="timer-section">
<div class="days-block">
    <span class="days" data-value="days"></span>
    <span class="uncorrectDays">Days</span>
  </div>
  </div>

  <div class="timer-section">
  <div class="hours-block">
    <span class="hours" data-value="hours"></span>
    <span class="uncorrectHours">Hours</span>
  </div>
  </div>

  <div class="timer-section">
  <div class="minutes-block">
    <span class="minutes" data-value="mins"></span>
    <span class="uncorrectMinutes">Minutes</span>
  </div>
  </div>

  <div class="timer-section">
  <div class="seconds-block">
    <span class="seconds" data-value="secs"></span>
    <span class="uncorrectSeconds">Seconds</span>
  </div>
  </div>
  `;

class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.selector = selector;
    }
    
    getRefs() {
        const daysRef = document.querySelector(`${this.selector} span[data-value="days"]`);
        const hoursRef = document.querySelector(`${this.selector} span[data-value="hours"]`);
        const minsRef = document.querySelector(`${this.selector} span[data-value="mins"]`);
        const secsRef = document.querySelector(`${this.selector} span[data-value="secs"]`);

        return { daysRef, hoursRef, minsRef, secsRef };
    }
    
    getDate(target) {
        const time = new Date(target) - new Date();
        
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    };

    pad(value) {
        return String(value).padStart(2, '0')
    };
    
    
    start() {
        document.querySelector(this.selector).insertAdjacentHTML('beforeend', template());

        setInterval(() => {
            if (new Date(this.targetDate) >= new Date()) {
               this.getRefs().daysRef.textContent = this.getDate(this.targetDate).days;
               this.getRefs().hoursRef.textContent = this.getDate(this.targetDate).hours;
               this.getRefs().minsRef.textContent = this.getDate(this.targetDate).mins;
               this.getRefs().secsRef.textContent = this.getDate(this.targetDate).secs;
                this.wordsEndings();
                
            }
            else {
                this.getRefs().daysRef.textContent = '0';
                this.getRefs().hoursRef.textContent = '00';
                this.getRefs().minsRef.textContent = '00';
                this.getRefs().secsRef.textContent = '00';
            }
        }, 100);
    }

    wordsEndings() {
        const daysEnd = document.querySelector(`${this.selector} .uncorrectDays`);
        const hoursEnd = document.querySelector(`${this.selector} .uncorrectHours`);
        const minsEnd = document.querySelector(`${this.selector} .uncorrectMinutes`);
        const secsEnd = document.querySelector(`${this.selector} .uncorrectSeconds`);

        
        switch (this.getRefs().secsRef.textContent) {
                    case '01':
                secsEnd.textContent = "Second";
                    break;
                
            default:
                secsEnd.textContent = "Seconds";
                        break;
                }
        
        switch (this.getRefs().minsRef.textContent) {
                    case '01':
                minsEnd.textContent = "Minute";
                    break;
                
            default:
                minsEnd.textContent = "Minutes";
                        break;
        }
        switch (this.getRefs().hoursRef.textContent) {
                    case '01':
                hoursEnd.textContent = "Hour";
                    break;
                
            default:
                hoursEnd.textContent = "Hours";
                        break;
        }
        switch (this.getRefs().daysRef.textContent) {
                    case '1':
                daysEnd.textContent = "Day";
                    break;
                
            default:
                daysEnd.textContent = "Days";
                        break;
                }

    }


}


export default CountdownTimer;


