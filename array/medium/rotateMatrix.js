const createMatrix = (matrix) => {
  let newMatrix = [];
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let i = 0; i < colLength; i++) {
    newMatrix[i] = [];
  }
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      newMatrix[col][colLength - 1 - row] = matrix[row][col];
    }
  }
  return newMatrix;
};
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(createMatrix(matrix));

const rotateMatrix = (matrix) => {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = i + 1; j < colLength; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < rowLength; i++) {
    matrix[i] = matrix[i].reverse();
  }
  return matrix;
};

console.log(rotateMatrix(matrix));
