const birthdayCakeCandles = array => {
  if (!Array.isArray(array)) return;

  let count = 0;

  // Getting the max value from array
  const max = Math.max(...array);

  array.forEach(value => {
    if (value === max) count++;
  });

  return count;
};
