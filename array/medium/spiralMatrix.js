const spiralMatrix = (arr) => {
  const row = arr.length;
  const column = arr[0].length;
  let left = 0,
    top = 0;
  let right = column - 1,
    bottom = row - 1;
  const res = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(arr[i][left]);
      }
      left++;
    }
  }
  return res;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('------------->', spiralMatrix(arr));
