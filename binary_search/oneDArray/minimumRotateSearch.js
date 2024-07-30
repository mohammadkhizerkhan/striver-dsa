const minimumRotateSearch = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let min = Number.MAX_VALUE;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[left] <= arr[mid] && arr[left] >= arr[right]) {
      min = Math.min(min, arr[right]);
      left = mid + 1;
    } else {
      min = Math.min(min, arr[left]);
      right = mid - 1;
    }
  }
  return min;
};

const minimumRotateSearch2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let min = Number.MAX_VALUE;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[left] <= arr[right]) {
      min = Math.min(min, arr[left]);
      break;
    }
    if (arr[left] <= arr[mid]) {
      min = Math.min(min, arr[right]);
      left = mid + 1;
    } else {
      min = Math.min(min, arr[mid]);
      right = mid - 1;
    }
  }
  return min;
};

const arr = [5, 6, 0, 1, 2, 3, 4];

console.log(minimumRotateSearch2(arr));
