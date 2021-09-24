import refs from './refs.js'
const {timerbyId ,daysCounter,  hoursCounter, minsCounter, secsCounter} = refs

class CountdownTimer {
  constructor({selector, targetDate }) {
    this.targetDate = targetDate
    this.selector = selector
  }

intervalStart = setInterval(() => {
    let currentDate = Date.now()
    const time = this.targetDate - currentDate
  this.getDataTime(time)
  this.finishTimerCount(time)
}, 1000);

  getDataTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    
    this.insertData(daysCounter, days)
    this.insertData(hoursCounter, hours)
    this.insertData(minsCounter, mins)
    this.insertData(secsCounter, secs)
  }
   insertData(place, value) {
   place.textContent = value
  }
  finishTimerCount(time) {
    if (time <= 0) {
      clearInterval(this.intervalStart)
    }
  }
}

const Timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});


