const bruteForce = (arr) => {
  const n = arr.length;
  if (n == 1) {
    return arr[0];
  }
  for (let i = 0; i < n; i++) {
    if (
      (i == 0 || arr[i] > arr[i + 1]) &&
      (i == n - 1 || arr[i] > arr[i - 1])
    ) {
      return arr[i];
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
console.log(bruteForce(arr));

const binarySearch = (arr) => {
  const n = arr.length;
  let left = 1;
  let right = n - 2;
  if (n == 1) {
    return arr[0];
  }
  if (arr[0] > arr[1]) {
    return arr[0];
  }
  if (arr[n - 1] > arr[n - 2]) {
    return arr[n - 1];
  }
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[mid - 1]) {
      left = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) {
      right = right + 1;
    } else {
      left = mid + 1;
    }
  }
};
console.log(binarySearch(arr));
