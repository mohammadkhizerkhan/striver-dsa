// const maximumSubArraySum = (arr) => {
//   let max_so_far = arr[0];
//   let max_ending_here = arr[0];
//   let startIndex = 0;
//   let endIndex = 0;
//   let tempStartIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     let temp_max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
//     if (temp_max_ending_here === arr[i]) {
//       tempStartIndex = i;
//     }
//     max_ending_here = temp_max_ending_here;
//     if (max_ending_here > max_so_far) {
//       max_so_far = max_ending_here;
//       endIndex = i;
//       startIndex = tempStartIndex;
//     }
//   }
//   return { max_so_far, startIndex, endIndex };
// };

// console.log(maximumSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));

const buySell = (arr) => {
  let max = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    max = Math.max(max, arr[i] - minPrice);
  }
  return max;
};
console.log(buySell([7, 22, 5, 1, 100, 200]));
// console.log(buySell([7, 2, 5, 1, 8, 22, 2]));

const buySellStock = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        max = Math.max(max, arr[j] - arr[i]);
      }
    }
  }
  return max;
};
console.log(buySellStock([7, 22, 5, 1, 100, 200]));

const buySellStock = (arr) => {
  let max = 0;
  let minPrice = 0
  for (let i = 0; i < arr.length; i++){
    minPrice = Math.min(minPrice,arr[i])
    max = Math.max(max,arr[i]-minPrice)
    }
  }
  return max;
};