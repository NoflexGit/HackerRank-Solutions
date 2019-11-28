const aVeryBigSum = array => {
  let sum = 0;
  let i;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};
