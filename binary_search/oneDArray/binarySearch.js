// const binarySearch = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   let k = 6;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (k < arr[mid]) {
//       right = mid - 1;
//     } else if (k > arr[mid]) {
//       left = mid + 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };

const bs = (arr, k, left, mid, right) => {
  if (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (k < arr[mid]) {
      right = mid - 1;
      return bs(arr, k, left, mid, right);
    } else if (k > arr[mid]) {
      left = mid + 1;
      return bs(arr, k, left, mid, right);
    } else {
      return mid;
    }
  }
  return -1;
};

const recursiveBinarySearch = (arr, k) => {
  const left = 0;
  const right = arr.length - 1;
  const mid = Math.floor((left + right) / 2);

  return bs(arr, k, 0, mid, right);
};

const arr = [3, 4, 6, 7, 9, 12, 16, 17];
console.log(recursiveBinarySearch(arr, 6));
