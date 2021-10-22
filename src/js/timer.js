
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
    
    document.querySelector(selector).insertAdjacentHTML('beforeend', template());
    
    const daysRef = document.querySelector('[data-value="days"]');
    const hoursRef = document.querySelector('[data-value="hours"]');
    const minsRef = document.querySelector('[data-value="mins"]');
    const secsRef = document.querySelector('[data-value="secs"]');

    
    function getDate(targetDate) {
        const time = new Date(targetDate) - new Date();
        
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
        
        
    };

    function pad(value) {
        return String(value).padStart(2, '0')
    };
    
    
    setInterval(() => {
        if (new Date(targetDate) >= new Date()) {
            daysRef.textContent = getDate(targetDate).days;
            hoursRef.textContent = getDate(targetDate).hours;
            minsRef.textContent = getDate(targetDate).mins;
            secsRef.textContent = getDate(targetDate).secs;
        }
        else {
            daysRef.textContent = '0';
            hoursRef.textContent = '0';
            minsRef.textContent = '0';
            secsRef.textContent = '0';
         }
}, 100);

}
    
}



export default CountdownTimer;


