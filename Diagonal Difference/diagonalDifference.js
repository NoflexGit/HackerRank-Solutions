const diagonalDifference = matrix => {
  if (!matrix || !Array.isArray(matrix)) return;

  let primalDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let row = 0; row < matrix.length; row++) {
    const matrixRow = matrix[row];

    // Addition of the each element of the secondary diagonal.
    // Means we add files from the left side of each matrix row
    // e.g. row[0][0] + row[1][1] + row[2][2] etc.
    primalDiagonalSum += matrixRow[row];

    // Addition of the each element of the secondary diagonal.
    // (matrix.length - row - 1)  means we add numbers from the right side of each matrix row
    // e.g. row[0][2] + row[0][1] + row[0][0] etc.
    secondaryDiagonalSum += matrixRow[matrix.length - row - 1];
  }

  // Return the absolute difference between the sums of matrix diagonals
  return Math.abs(primalDiagonalSum - secondaryDiagonalSum);
};
