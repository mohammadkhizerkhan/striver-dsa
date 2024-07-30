const countZero = (arr) => {
  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
      ++count;
    }
  }
  return count;
};

console.log(countZero([1, 1, 1, 10, 0, 00, 00]));


