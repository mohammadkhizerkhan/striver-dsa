// function removeDuplicates(arr) {
//   let res = {};
//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];
//     if (!res.hasOwnProperty(key)) {
//       res[key] = 1;
//     } else {
//       res[key] = res[key] + 1;
//     }
//   }
//   return Object.keys(res);
// }
// TC: O(n) SC:O(n)
// const arr = [1, 1, 2, 2, 2, 3, 3];
// const k = removeDuplicates(arr);
// console.log(k);

function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);
console.log(arr.slice(0, k));
