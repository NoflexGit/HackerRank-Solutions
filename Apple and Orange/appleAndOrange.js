const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const countSumm = (fruits, treePosition) => {
    let result = 0;
    fruits.forEach(fruit => {
      const fruitPosition = treePosition + fruit;
      if (fruitPosition >= s && fruitPosition <= t) result++;
    });
    return result;
  };

  console.log(countSumm(apples, a));
  console.log(countSumm(oranges, b));
};

// Example
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
