/**
 * Function to find the length of the longest consecutive sequence in an array.
 *
 * @function
 * @name betterSequenceCount
 * @param {number[]} arr - The input array of integers.
 * @returns {number} The length of the longest consecutive sequence in the array.
 *
 * @example
 * // Example usage:
 * console.log(betterSequenceCount([3, 3, 4, 5, 6, 7, 8, 9, 99, 100, 101, 102]));
 * // Output: 7
 * // Explanation: The longest consecutive sequence is [3, 4, 5, 6, 7, 8, 9]
 *
 * @description
 * The function `betterSequenceCount` takes an array of integers and returns the length of the longest
 * consecutive sequence. The steps involved are:
 *
 * 1. Initialize `currentCount` to 0 and `maxCount` to 1.
 * 2. Sort the array in ascending order.
 * 3. Set `lastChecked` to the maximum possible integer value.
 * 4. Iterate through the sorted array:
 *    a. If the current element is the next consecutive integer (i.e., `arr[i] === lastChecked + 1`), increment `currentCount` and update `lastChecked`.
 *    b. If the current element is not the next consecutive integer, reset `currentCount` to 1 and update `lastChecked`.
 * 5. Update `maxCount` to be the maximum of `maxCount` and `currentCount` during each iteration.
 * 6. Return `maxCount` as the result.
 *
 * Note: The input array may contain duplicate elements, which are handled by sorting the array and comparing consecutive elements.
 */

const betterSequenceCount = (arr) => {
  let currentCount = 0;
  let maxCount = 1;
  arr.sort((a, b) => a - b);
  let lastChecked = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lastChecked + 1) {
      currentCount++;
      lastChecked = arr[i];
    } else if (arr[i] !== lastChecked + 1) {
      currentCount = 1;
      lastChecked = arr[i];
    }

    maxCount = Math.max(maxCount, currentCount);
  }
  return maxCount;
};

console.log(betterSequenceCount([3, 3, 4, 5, 6, 7, 8, 9, 99, 100, 101, 102]));

const optimalSequenceCount = (arr) => {
  const setted = new Set(arr);
  let max = 1;
  // console.log(setted);
  for (let item of setted) {
    if (!setted.has(item - 1)) {
      let count = 1;
      let x = item;
      while (setted.has(x + 1)) {
        x++;
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};
console.log(optimalSequenceCount([3, 3, 4, 5, 6, 7, 8, 9, 99, 100, 101, 102]));

const countSumSubArray = (arr) => {
  const hash = new Map();
  hash.set(0, 1);
  let count = 0;
  const k = 3;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    let preFixSum = sum - k;
    if (hash.has(preFixSum)) {
      count = count + hash.get(preFixSum);
    }
    if (hash.has(sum)) {
      hash.set(sum, hash.get(sum) + 1);
    } else {
      hash.set(sum, 1);
    }
  }
  return count;
};
console.log(countSumSubArray([3, 1, 2, 4]));
