import refs from './refs.js'
const {daysCounter,  hoursCounter, minsCounter, secsCounter} = refs
console.log(daysCounter, hoursCounter, minsCounter, secsCounter);

const finishDate = new Date('Jul 17, 2019').getTime()
console.log(finishDate);

function start() {
  setInterval(() => {
    let currentDate = Date.now()
    
    let time = finishDate - currentDate
    /*
    * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
    * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
    */
   const days = Math.floor(time / (1000 * 60 * 60 * 24));
  //  console.log(days);
   
   // /*
   //  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   //  * остатка % и делим его на количество миллисекунд в одном часе
   //  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   //  */
   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //  console.log(hours);
   // /*
   //  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   //  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   //  */
   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  //  console.log(mins);
   /*
   //  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   //  * миллисекунд в одной секунде (1000)
   //  */
   const secs = Math.floor((time % (1000 * 60)) / 1000);
  //  console.log(secs);
    insertData(daysCounter, days)
    insertData(hoursCounter, hours)
    insertData(minsCounter, mins)
    insertData(secsCounter, secs)
   }, 1000);
   }
   start()

