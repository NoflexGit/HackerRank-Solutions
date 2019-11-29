const plusMinus = array => {
  if (!array || array.length === 0) {
    rerurn;
  }

  let positive = 0;
  let negative = 0;
  let zeros = 0;
  const length = array.length;

  array.forEach(element => {
    // Count only numbers
    if (typeof element === "number") {
      if (element < 0) {
        negative++;
      } else if (element > 0) {
        positive++;
      } else {
        zeros++;
      }
    }
  });

  console.log(positive / length);
  console.log(negative / length);
  console.log(zeros / length);
};
