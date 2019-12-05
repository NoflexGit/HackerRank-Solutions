/**
 * Counts an array summ
 * @param {Array<number>} array - Input array
 */
const countArray = array => array.reduce((acc, value) => (acc += value), 0);

const minMaxSum = array => {
  // So, first of all we need to sort our array for getting correctly sorted numeric values
  // e.g. [10, 23, 18, 24, 90] -> [10, 18, 23, 24, 90]
  array = array.sort((a, b) => a - b);

  // Get sum of the elemnts without the first one [23, 18, 24, 90]
  const start = countArray(array.slice(0, 4));

  // Get sum of the elemnts without the last one [10, 23, 18, 24]
  const end = countArray(array.slice(1));

  return `${start} ${end}`;
};
