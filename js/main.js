import { printError, printResult, printTimerTick, printTimerResult, printErrorTimer  } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import getTimer from './startDate.js'
import toggle from './toggle.js';
/* import {Howl} from '../howler' */

const form = document.getElementById('datecalc');
const timer = document.getElementById('timerEvent');
const stopTimer = document.getElementById('stopTimer')
let startTimer
toggle();


form.onsubmit = (event) => {
  event.preventDefault();
  const dataForm = new FormData(event.target);
  const firstDate = dataForm.get('firstDate');
  const secondDate = dataForm.get('secondDate');
  if (!firstDate || !secondDate) {
    printError('Oooopps! Введите дату')
  } else {
    const dateREsult = getDateDiff(firstDate, secondDate);
        printResult(dateREsult)
    
  }
}

timer.onsubmit = (event) => {
      event.preventDefault();
      const dataTimerForm = new FormData(event.target);
      const finishDate = dataTimerForm.get('startDate');
      if (!finishDate) {
        printErrorTimer('Oooopps! Введите дату')
      } else {
              startTimer = setInterval(()=>{
                  const timerResult = getTimer(finishDate);
                  if (timerResult.seconds >= 0){
                     printTimerTick(timerResult);
                  } 
                  else {
                      clearTimeout(startTimer);
                      printTimerResult();
                 /*      var sound = new Howl({
                        src: ['../assets/jamaican-piano_mytjcqbd.mp3']
                      });
                        sound.play() */;                      
                  }
              },1000)
          }
          stopTimer.addEventListener('click', ()=>{
            clearTimeout(startTimer);
          })
}


//событие переключения калькулятора дат и таймера
