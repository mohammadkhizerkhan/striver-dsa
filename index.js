// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const bs = (num) => {
//   let low = 0;
//   let high = arr.length - 1;
//   do {
//     let mid = Math.floor(low + (high - low) / 2);
//     if (arr[mid] === num) {
//       return mid;
//     } else if (num < arr[mid]) {
//       high = mid - 1;
//     } else if (num > arr[mid]) {
//       low = mid + 1;
//     }
//   } while (low <= high);
// };

// console.log(bs(4));

// var getConcatenation = function (nums) {
//   let ans = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     ans.push(nums[i]);
//   }
//   return ans;
// };

// console.log(getConcatenation([1, 2, 3]));

// front end cors fix
// open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials
