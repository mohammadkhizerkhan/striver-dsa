// const rotateByKElements = (arr, k) => {
//   //brute force
//   const temp = [];
//   for (let i = k; i > 0; i--) {
//     temp.push(arr[arr.length - i]);
//   }
//   return [...temp, ...arr.splice(0, k + 1)];
// };
// TC: O(n) SC: O(n)
// console.log(rotateByKElements([1, 2, 3, 4, 5], 2));

const reverseArray = (arr, left, right) => {
  while (left <= right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    ++left;
    --right;
  }
};

const rotateByKElements = (arr, k) => {
  const n = arr.length;
  reverseArray(arr, 0, n - k - 1);
  reverseArray(arr, n - k, n - 1);
  reverseArray(arr, 0, n - 1);
  return arr;
};
console.log(rotateByKElements([1, 2, 3, 4, 5], 2));
