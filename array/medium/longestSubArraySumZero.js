const bruteForce = (arr) => {
  const n = arr.length;
  let len = 0;
  let sum = 0;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    sum = sum + arr[i];
    if (sum === 0) {
      len = i + 1;
    } else {
      if (hash.has(sum)) {
        len = Math.max(len, i - hash.get(sum));
      } else {
        hash.set(sum, i);
      }
    }
  }
  return len;
};

const arr = [9, -3, 3, -1, 6, -5];
console.log(bruteForce(arr));
