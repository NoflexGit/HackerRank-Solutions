const staircase = num => {
  if (num < 0 || num > 100 || typeof num !== "number") {
    return;
  }

  let i = 0;

  while (i < num) {
    console.log(" ".repeat(num - i - 1) + "#".repeat(i + 1));
    i++;
  }
};
