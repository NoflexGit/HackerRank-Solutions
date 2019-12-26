const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const countSumm = (fruits, treePos) =>
    fruits.filter(
      fruitPos => fruitPos + treePos >= s && fruitPos + treePos <= t
    ).length;

  console.log(countSumm(apples, a));
  console.log(countSumm(oranges, b));
};

// Example
countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
