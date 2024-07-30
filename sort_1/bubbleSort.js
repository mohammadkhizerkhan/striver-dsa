const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = n - 1; i > 0; i--) {
    let didSwap = false; // if the array is already sorted then we can reduce from O(n^2) to O(n)
    // Initialize a flag to track if any swaps were made

    // Inner loop to compare adjacent elements
    for (let j = 0; j < i; j++) {
      // Compare the current element with the next element
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = true;
      }
    }
    // If no swaps were made, the array is already sorted
    if (!didSwap) {
      break; // Exit the outer loop early
    }
  }
  return arr;
};

console.log('------------->', bubbleSort([10, 13, 33, 55, 66, 9]));
