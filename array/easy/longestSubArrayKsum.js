// function getLongestSubarray(a, k) {
//   let n = a.length; // size of the array

//   let preSumMap = new Map();
//   let sum = 0;
//   let maxLen = 0;
//   for (let i = 0; i < n; i++) {
//     // calculate the prefix sum till index i
//     sum += a[i];

//     // if the sum = k, update the maxLen
//     if (sum === k) {
//       maxLen = Math.max(maxLen, i + 1);
//     }

//     // calculate the sum of remaining part i.e. x - k
//     let rem = sum - k;

//     // calculate the length and update maxLen
//     if (preSumMap.has(rem)) {
//       let len = i - preSumMap.get(rem);
//       maxLen = Math.max(maxLen, len);
//     }

//     // update the map checking the conditions
//     if (!preSumMap.has(sum)) {
//       preSumMap.set(sum, i);
//     }
//   }

//   return maxLen;
// }

// let a = [-1, 1, 2, 3, 0, 1, 2];
// let k = 4;
// let len = getLongestSubarray(a, k);
// console.log('The length of the longest subarray is:', len);

// 3 loops
const printAllSubArrays1 = (arr) => {
  // let res = [];
  const n = arr.length;
  const k = 9;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum = sum + arr[k];
      }
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};
console.log(printAllSubArrays1([2, 2, 5, 1, 9]));

// 2 loops
const printAllSubArrays2 = (arr) => {
  const n = arr.length;
  const k = 10;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + arr[j];
      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
};

// we can skip calculating
// 2
// 2+2
// 2+2+5
// instead we just need to add arr[j] for sum and we can skip 3rd loop i,e  k'th loop

// console.log(printAllSubArrays2([2, 2, 5, 1, 9]));

const printAllSubArrays3 = (arr) => {
  const hash = new Map(); // Map to store the cumulative sum and its index
  let k = 9; // Target sum to find in the subarray
  let sum = 0; // Current cumulative sum
  let maxLen = 0; // Maximum length of the subarray with the target sum
  const n = arr.length; // Length of the input array

  for (let i = 0; i < n; i++) {
    sum = sum + arr[i]; // Update the cumulative sum with the current element

    // Store the cumulative sum and its index in the map
    hash.set(sum, i);

    // If the current cumulative sum equals the target sum, update the max length
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // If the (current cumulative sum - target sum)(x-k) exists in the map,
    // it means there is a subarray with the target sum
    if (hash.has(sum - k)) {
      maxLen = Math.max(maxLen, i - hash.get(sum - k));
    }

    // Store the cumulative sum and its index in the map
    // This ensures the cumulative sum is recorded only once
    hash.set(sum, i);
  }

  return maxLen; // Return the maximum length of the subarray with the target sum
};

console.log(printAllSubArrays3([2, 2, 5, 1, 9])); // Output: The length of the longest subarray with sum 3

const findLargestSubArraySum = (arr) => {
  let n = arr.length; // Length of the input array
  let num = 10; // Target sum to find in the subarray
  let left = 0; // Left pointer for the sliding window
  let sum = 0; // Current sum of the elements in the sliding window
  let maxLen = 0; // Maximum length of the subarray with the target sum

  // Iterate through the array with the right pointer
  for (let right = 0; right < n; right++) {
    sum = sum + arr[right]; // Add the current element to the sum

    // If the sum exceeds the target, move the left pointer to the right
    // and adjust the sum until it is no longer greater than the target
    while (sum > num && left < right) {
      sum = sum - arr[left];
      left++;
    }

    // If the current window's sum equals the target, update the max length
    if (sum == num) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen; // Return the maximum length of the subarray with the target sum
};

console.log(findLargestSubArraySum([2, 3, 5, 5, 1, 9])); // Output: 3 (subarray [2, 3, 5])
