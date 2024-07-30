// https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/

// const findMajority = (arr) => {
//   const hash = {};
//   const n = arr.length;
//   const count = 3;
//   for (let i = 0; i < n; i++) {
//     if (hash[arr[i]]) {
//       hash[arr[i]] = hash[arr[i]] + 1;
//     } else {
//       hash[arr[i]] = 1;
//     }
//   }
//   console.log(hash);
//   let max = 0;
//   for (let key in hash) {
//     if (hash[key] > count / 2) {
//       max = key;
//     }
//   }
//   return max;
// };

// console.log(findMajority([1, 1, 2, 2, 2, 2]));

const mooresVoting = (arr) => {
  let count = 0;
  let candidate = null;
  let n = 3;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (candidate === arr[i + 1]) {
      count++;
    } else {
      --count;
    }
  }
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == candidate) {
      count++;
    }
  }
  return count > n / 2 ? candidate : null;
};
console.log(mooresVoting([1, 1, 2, 2, 2, 2]));
