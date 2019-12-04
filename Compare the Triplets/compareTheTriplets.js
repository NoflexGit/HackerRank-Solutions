const compareTheTriplets = (a, b) => {
  if (a.length !== b.length) return;

  const points = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (a[i] < b[i]) {
      points[1]++;
    }
  }

  return points;
};
