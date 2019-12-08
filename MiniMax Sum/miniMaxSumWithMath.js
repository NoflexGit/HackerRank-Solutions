/**
 * Counts an array summ
 * @param {Array<number>} array - Input array
 */
const countArray = array => array.reduce((acc, value) => (acc += value), 0);

const minMaxSum = array => {

  // Count the sum of an array
  const sum = countArray(array);

  // Get the min value of an array
  const min = sum - Math.min(...array);

  // Get the max value of an array
  const max = sum - Math.max(...array);

  return `${max min}`;
};
