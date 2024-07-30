/**
 * Naive Approach
 * This approach marks rows and columns to be changed by iterating through the matrix twice.
 * The first iteration marks the cells with -1 if they belong to a row or column containing a zero,
 * and the second iteration replaces -1 with 0.
 */
const markRow = (matrix, colLength, row) => {
  for (let col = 0; col < colLength; col++) {
    if (matrix[row][col] !== 0) matrix[row][col] = -1;
  }
};

const markCol = (matrix, rowLength, col) => {
  for (let row = 0; row < rowLength; row++) {
    if (matrix[row][col] !== 0) matrix[row][col] = -1;
  }
};

const matrixReplaceZero = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  // First pass: mark rows and columns
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        markRow(matrix, colLength, row);
        markCol(matrix, rowLength, col);
      }
    }
  }

  // Second pass: replace -1 with 0
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === -1) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

console.log('Naive Approach:');
let matrix1 = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];
console.log(matrixReplaceZero(matrix1));

/**
 * Better Approach
 * This approach uses additional space to keep track of rows and columns that need to be changed.
 * It uses two arrays to record the rows and columns that contain zeros.
 * Then it iterates through the matrix to change the marked rows and columns.
 */
const betterApproach = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const trackRow = new Array(rowLength).fill(0);
  const trackCol = new Array(colLength).fill(0);

  // First pass: track rows and columns with zeros
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        trackRow[row] = 1;
        trackCol[col] = 1;
      }
    }
  }

  // Second pass: update the matrix based on tracked rows and columns
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (trackRow[row] === 1 || trackCol[col] === 1) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
};

console.log('Better Approach:');
let matrix2 = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [9, 10, 0, 12],
  [13, 14, 15, 16],
];
console.log(betterApproach(matrix2));

/**
 * Optimal Approach
 * This approach optimizes space by using the first row and first column of the matrix itself to track
 * which rows and columns need to be zeroed.
 * Additionally, it uses a variable to track if the first column should be zeroed.
 */
const optimalApproach = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  let col0 = 1;

  // First pass: use first row and first column as markers
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        if (col !== 0) {
          matrix[0][col] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  // Second pass: update the matrix based on markers
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // Update the first row if necessary
  if (matrix[0][0] === 0) {
    for (let col = 0; col < colLength; col++) {
      matrix[0][col] = 0;
    }
  }

  // Update the first column if necessary
  if (col0 === 0) {
    for (let row = 0; row < rowLength; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
};

console.log('Optimal Approach:');
let matrix3 = [
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
];
console.log(optimalApproach(matrix3));
