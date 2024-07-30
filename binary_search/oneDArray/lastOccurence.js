const lastOccurance = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) {
      ans = mid;
      left = mid + 1;
    } else if (arr[mid] > k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

const firstOccurance = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) {
      ans = mid;
      right = mid - 1;
    } else if (arr[mid] > k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

const countOccurence = (arr, k) => {
  const first = firstOccurance(arr, k);
  const last = lastOccurance(arr, k);
  if (first == -1 || last == -1) {
    return -1;
  }
  return last - first + 1;
};

const arr = [1, 1, 2, 2, 2, 2, 2, 3];
console.log(firstOccurance(arr, 2));
console.log(lastOccurance(arr, 2));
console.log(countOccurence(arr, 2));
