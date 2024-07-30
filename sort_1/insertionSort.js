const insertionSort = (arr) => {
  const n = arr.length; // Get the length of the array

  // Outer loop to iterate through each element of the array
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1; // Start with the element next to the current one in the outer loop

    // Inner loop to shift elements of the sorted segment to the right
    // until the correct position for arr[j] is found
    while (j > 0 && arr[j] < arr[j - 1]) {
      // Swap the elements if they are in the wrong order
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--; // Move the pointer one position to the left
    }
  }

  return arr; // Return the sorted array
};

// Example usage
console.log('-===============>', insertionSort([10, 13, 33, 55, 66, 9])); // Outputs [9, 10, 13, 33, 55, 66]
