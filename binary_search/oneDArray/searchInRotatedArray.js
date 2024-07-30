/**
 * Searches for a target value in a rotated sorted array.
 *
 * @param {number[]} arr - The rotated sorted array to search in.
 * @param {number} k - The target value to search for.
 * @returns {number|undefined} The index of the target value if found, undefined otherwise.
 *
 * Time Complexity: O(log n), where n is the length of the array.
 * Space Complexity: O(1), as it uses only a constant amount of extra space.
 */
const searchInRotatedArray = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // If the middle element is the target, return its index
    if (arr[mid] == k) {
      return mid;
    }
    // If the left half is sorted
    else if (arr[left] <= arr[mid]) {
      // If the target is in the left half
      if (arr[left] <= k && k <= arr[mid]) {
        // Adjust the right pointer to search the left half
        right = mid - 1;
      } else {
        // Target is in the right half, adjust the left pointer
        left = mid + 1;
      }
    }
    // If the right half is sorted
    else {
      // If the target is in the right half
      if (arr[mid] <= k && k <= arr[right]) {
        // Adjust the left pointer to search the right half
        left = mid + 1;
      } else {
        // Target is in the left half, adjust the right pointer
        right = mid - 1;
      }
    }
  }

  // If the loop completes without finding the target, return undefined
  return undefined;
};

// Example usage
const arr = [4, 5, 6, 7, 0, 1, 2, 3];
console.log(searchInRotatedArray(arr, 2)); // Output: 6
