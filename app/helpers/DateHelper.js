export const convertEpochToString = (epochValue) => {
  const dateVal = new Date(parseInt(epochValue)* 1000);
  return dateVal.toDateString();
}


export const getEventShortDate = (startDateEpoch, endDateEpoch = null) => {
  let startDateString = getDate(startDateEpoch)
  let endDateString = getDate(endDateEpoch)

  if (!endDateEpoch || startDateEpoch == endDateEpoch) return startDateString;

  return getDateSpan(startDateString, endDateString);
}

const getDateSpan = (startDateString, endDateString) => {
  let [startMonth, startDay]  = startDateString.split(' ');
  let [endMonth, endDay] = endDateString.split(' ');
  let dateSpanString;

  if (startMonth == endMonth) {
    return `${ startMonth } ${ startDay } - ${ endDay }`;
  } else {
    return `${ startMonth } ${ startDay } - ${ endMonth } ${ endDay }`;
  }
}


export const getDate = (epochValue) => {
  let eventDate;
  const dateVal = new Date(parseInt(epochValue) * 1000);
  if (!dateVal) return;
  return `${ getMonth(dateVal) } ${ getDay(dateVal) } `;
}


const getDay = (date) => {
  return date.getDay();
}

const getMonth = (date) => {
  let monthString = date.toDateString().match(/\w{3}\s(\w+)\s\d+\s\d+/)
  return monthString[1];
}
