/**
 * Counts an array summ
 * @param {Array<number>} array - Input array
 */
const countArray = array => array.reduce((acc, value) => (acc += value), 0);

const minMaxSum = array => {

  // Count the sum of an array
  const sum = countArray(array);

  // Get the end value by substracting min value of the array from the array sum
  const end = sum - Math.min(...array);

  // Get the start value by substracting max value of the array from the array sum
  const start = sum - Math.max(...array);

  return `${start} ${end}`;
};
