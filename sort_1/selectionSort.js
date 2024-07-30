const selectionSort = (arr) => {
  const n = arr.length;
  // Loop through the entire array except the last element
  for (let i = 0; i < n - 2; i++) {
    let minIndex = i; // Assume the minimum is the first element
    // Loop through the remaining elements to find the smallest
    for (let j = i + 1; j < n; j++) {
      // If the current element is smaller than the current minimum, update minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // if [12,10,10,9] swaping 10,10 doen't make sense that's why we are use this condition
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

console.log('------------->', selectionSort([13, 55, 66, 33, 10, 9]));
