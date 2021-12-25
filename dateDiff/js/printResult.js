const result = document.getElementById('datecalc__result');
const timerResult = document.getElementById('startTimer');

export const printError = (errorText) => {
  result.innerText = errorText;
}

export const printResult = ({years, months, days}) => {
  result.innerHTML = `Год: ${years} - Месяц: ${months} - День: ${days}`;
}

export const printTimerTick = ({years, months, days, hours, minutes, seconds}) => {
  timerResult.innerHTML = `До конца события осталось Лет: ${years} - Месяцев: ${months} - Деней ${days} - Часов ${hours} - Минут ${minutes} - Секунд ${seconds}`;
}
export const printTimerResult = () => {
  timerResult.innerHTML = 'СОБЫТИЕ НАЧАЛОСЬ!!!!';
}
export const printErrorTimer = (errorText) => {
  timerResult.innerHTML = errorText;
}