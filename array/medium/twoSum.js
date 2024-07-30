const twoSum = (arr) => {
  const k = 14;
  const n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j <= n - 1; j++) {
      console.log([arr[i], arr[j]]);
      if (arr[i] + arr[j] === k) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [-1, -1];
};

// const arr = [2, 6, 5, 8, 11];
// console.log('--------------->', twoSum(arr));

// hash map approach
const twoSumWithHash = (arr) => {
  const k = 14; // The target sum we are looking for
  const n = arr.length; // Length of the input array
  const hash = new Map(); // Create a hash map to store array values and their indices

  for (let i = 0; i < n; i++) {
    // Iterate through each element in the array
    if (hash.has(k - arr[i])) {
      // Check if the complement (k - current element) exists in the hash map
      console.log('====>hash', hash); // Debugging statement to log the current state of the hash map
      return [arr[i], arr[hash.get(k - arr[i])]]; // If complement exists, return the pair of numbers that sum to k
    } else {
      hash.set(arr[i], i); // If complement does not exist, add the current element and its index to the hash map
    }
  }
};

// Example usage:
const arr = [2, 8, 5, 6, 11];
console.log(twoSumWithHash(arr)); // This should output the pair of numbers that sum up to 14

// const arr = [2, 8, 5, 6, 11];
// console.log('--------------->', twoSumWithHash(arr));

const twoSumTwoPointer = (arr) => {
  const n = arr.length;
  const k = 14;
  let i = 0;
  let j = n - 1;

  // Sort array and keep track of original indices
  const sortedArr = arr
    .map((val, index) => ({ val, index }))
    .sort((a, b) => a.val - b.val);

  while (i < j) {
    const sum = sortedArr[i].val + sortedArr[j].val;
    if (sum > k) {
      j--; // Move left pointer to the left
    } else if (sum < k) {
      i++; // Move right pointer to the right
    } else {
      return [sortedArr[i].index, sortedArr[j].index]; // Return original indices
    }
  }

  return [-1, -1]; // Return [-1, -1] if no such pair exists
};

const arr = [2, 8, 5, 6, 11];
console.log(twoSumTwoPointer(arr)); // This should output the indices of the elements that sum up to 14
