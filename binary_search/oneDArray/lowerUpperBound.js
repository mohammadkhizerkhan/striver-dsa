const lowerBound = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = right + 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, mid, right);
    if (arr[mid] >= k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

const upperBound = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = right + 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, mid, right);
    if (arr[mid] > k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

const floor = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, mid, right);
    if (arr[mid] <= k) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return arr[ans];
};

const ceil = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = right + 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, mid, right);
    if (arr[mid] >= k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return arr[ans];
};

const arr = [3, 4, 4, 7, 8, 10];
console.log(floor(arr, 5), ceil(arr, 5));

/**
 * Problem Statement:
 *
 * In many algorithmic problems and real-world applications, we often need to perform
 * various types of searches on sorted arrays. These searches include finding the lower
 * and upper bounds of a value, as well as floor and ceiling values. While a linear search
 * can solve these problems, it's not efficient for large datasets. Binary search
 * variants can solve these problems more efficiently, with a time complexity of O(log n).
 *
 * The following four functions implement these binary search variants:
 * 1. Lower Bound: Find the first element greater than or equal to a target value.
 * 2. Upper Bound: Find the first element strictly greater than a target value.
 * 3. Floor: Find the largest element less than or equal to a target value.
 * 4. Ceiling: Find the smallest element greater than or equal to a target value.
 *
 * These operations are crucial in various scenarios such as:
 * - Database queries where we need to find ranges of values
 * - Implementing binary search trees and other data structures
 * - Solving algorithmic problems involving sorted data
 * - Approximating values in numerical computations
 */

/**
 * Finds the lower bound of a target value in a sorted array.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} k - The target value to find the lower bound for.
 * @returns {number} The index of the first element greater than or equal to k,
 *                   or arr.length if no such element exists.
 *
 * Time Complexity: O(log n), where n is the length of the array.
 * Space Complexity: O(1), as it uses only a constant amount of extra space.
 *
 * Example:
 * For arr = [1, 3, 3, 5, 8, 8, 10] and k = 3,
 * lowerBound(arr, k) returns 1 (index of the first 3).
 */
const lowerBound = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = right + 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

/**
 * Finds the upper bound of a target value in a sorted array.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} k - The target value to find the upper bound for.
 * @returns {number} The index of the first element strictly greater than k,
 *                   or arr.length if no such element exists.
 *
 * Time Complexity: O(log n), where n is the length of the array.
 * Space Complexity: O(1), as it uses only a constant amount of extra space.
 *
 * Example:
 * For arr = [1, 3, 3, 5, 8, 8, 10] and k = 3,
 * upperBound(arr, k) returns 3 (index of 5).
 */
const upperBound = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = right + 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

/**
 * Finds the floor value of a target in a sorted array.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} k - The target value to find the floor for.
 * @returns {number|undefined} The largest element in the array that is less than or equal to k.
 *                             If no such element exists, it returns undefined.
 *
 * Time Complexity: O(log n), where n is the length of the array.
 * Space Complexity: O(1), as it uses only a constant amount of extra space.
 *
 * Example:
 * For arr = [1, 3, 3, 5, 8, 8, 10] and k = 4,
 * floor(arr, k) returns 3.
 */
const floor = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= k) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans !== -1 ? arr[ans] : undefined;
};

/**
 * Finds the ceiling value of a target in a sorted array.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} k - The target value to find the ceiling for.
 * @returns {number|undefined} The smallest element in the array that is greater than or equal to k.
 *                             If no such element exists, it returns undefined.
 *
 * Time Complexity: O(log n), where n is the length of the array.
 * Space Complexity: O(1), as it uses only a constant amount of extra space.
 *
 * Example:
 * For arr = [1, 3, 3, 5, 8, 8, 10] and k = 4,
 * ceil(arr, k) returns 5.
 */
const ceil = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = right + 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= k) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans <= right ? arr[ans] : undefined;
};

// Example usage
const arr = [3, 4, 4, 7, 8, 10];
console.log(floor(arr, 5), ceil(arr, 5)); // Output: 4 7
