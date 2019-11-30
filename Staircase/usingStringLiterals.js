const staircase = num => {
  if (num < 0 || num > 100 || typeof num !== "number") {
    return;
  }

  let i = 1;
  let k = num - 1;

  for (i, k; i <= num; i++) {
    const spaces = " ".repeat(k);
    const hashes = "#".repeat(i);
    console.log(`${spaces}${hashes}`);
    k--;
  }
};
