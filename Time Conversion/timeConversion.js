const timeConversion = timeString => {
  //  1. Transfrom a time string to an array of its' parts [ '12', '59', '59' ]
  const timeArray = timeString.slice(0, 8).split(':');

  // 2. Save hours to a variable
  let hours = dateArray[0];

  // 3. If it's the AM format set 12AM to 00
  if (timeString.includes('AM')) {
    if (hours === '12') hours = '00';
  }

  // 3. If it's the PM format add 12 to hours
  if (timeString.includes('PM')) {
    if (hours !== '12') hours = Number(hours) + 12;
  }

  // 4. Change hours in the time array
  timeArray[0] = hours.toString();

  // 5. Transform the time array to a string and return it
  return timeArray.join(':');
};
