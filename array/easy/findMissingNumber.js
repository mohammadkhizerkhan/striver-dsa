const hashedFinding = (arr, N) => {
  const hashedArray = new Array(N + 1).fill(0);
  for (let i = 0; i < N - 1; i++) {
    hashedArray[arr[i]]++;
  }
  console.log(hashedArray); // [ 0, 1, 1, 0,1, 1, 1]
  for (let i = 1; i < hashedArray.length; i++) {
    if (hashedArray[i] == 0) return i;
  }
  return -1;
};
console.log(hashedFinding([1, 2, 6, 5, 4], 6));

const optimalApproach = (arr, n) => {
  const mainSum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    arrSum = arrSum + arr[i];
  }
  return mainSum - arrSum;
};

console.log(optimalApproach([1, 2, 6, 5, 4], 6));
