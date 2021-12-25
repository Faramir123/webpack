import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

function getTimer(finishDate) {
  let dateFromObj = DateTime.now();
  let dateToObj = DateTime.fromISO(finishDate);
  return dateToObj.diff(dateFromObj, ['years','months', 'days', 'hours', 'minutes', 'seconds']).toObject()
}

export default getTimer;