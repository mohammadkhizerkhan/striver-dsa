const countRotation = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let min = Number.MAX_VALUE;
  let index = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[left] <= arr[right]) {
      if (arr[left] < min) {
        index = left;
        min = arr[left];
      }
      break;
    }
    if (arr[left] <= arr[mid]) {
      if (arr[left] < min) {
        index = left;
        min = arr[left];
      }
      left = mid + 1;
    } else {
      if (arr[mid] < min) {
        index = mid;
        min = arr[mid];
      }
      right = mid - 1;
    }
  }
  return index;
};

const arr = [5, 6, 0, 1, 2, 3, 4];

console.log(countRotation(arr));
