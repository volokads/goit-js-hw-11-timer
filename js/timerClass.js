import refs from './refs.js'
const {daysCounter,  hoursCounter, minsCounter, secsCounter} = refs

class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate
    this.selectorID = null
    this.time = 0
  }
  start() {
    this.targetDate = this.targetDate.targetDate.getTime()
    this.intrvalId = setInterval(() => {
    let currentDate = Date.now()
    this.time = this.targetDate - currentDate
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    
    this.insertData(daysCounter, days)
    this.insertData(hoursCounter, hours)
    this.insertData(minsCounter, mins)
    this.insertData(secsCounter, secs)
    }, 1000);
  }
    insertData(place, value) {
    place.textContent = value
  }
}

const Timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
console.log(Timer);
Timer.start()

