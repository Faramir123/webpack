import { DateTime } from 'luxon';

function getTimer(finishDate) {
  let dateFromObj = DateTime.now();
  let dateToObj = DateTime.fromISO(finishDate);
  return dateToObj.diff(dateFromObj, ['years','months', 'days', 'hours', 'minutes', 'seconds']).toObject()
}

export default getTimer;