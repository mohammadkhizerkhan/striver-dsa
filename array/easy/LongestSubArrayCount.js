const longestSubArrayCount = (arr) => {
  const n = arr.length; // Length of the input array
  const hash = new Map(); // Map to store the cumulative sum and its count
  let sum = 0; // Current cumulative sum
  const k = 10; // Target sum to find in the subarrays
  let count = 0; // Number of subarrays with sum equal to k

  // Initialize the hash map with the base case
  hash.set(0, 1);

  for (let i = 0; i < n; i++) {
    sum = sum + arr[i]; // Update the cumulative sum with the current element

    // Check if (sum - k) exists in the hash map
    // If it does, it means there is a subarray ending at the current index with sum equal to k
    if (hash.has(sum - k)) {
      count = count + hash.get(sum - k);
    }

    // Update the hash map with the current cumulative sum
    // If the sum already exists in the map, increment its count
    // Otherwise, initialize it with 1
    if (hash.has(sum)) {
      hash.set(sum, hash.get(sum) + 1);
    } else {
      hash.set(sum, 1);
    }
  }

  return count; // Return the number of subarrays with sum equal to k
};

console.log(longestSubArrayCount([2, 3, 5, 5, 1, 9])); // Output: Number of subarrays with sum equal to 10
