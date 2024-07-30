const mergeLogic = (arr, left, mid, right) => {
  // Create a temporary array to store the merged result
  const temp = [];

  // Pointers for left and right subarrays
  let leftPointer = left;
  let rightPointer = mid + 1;

  // Merge the two subarrays into temp
  while (leftPointer <= mid && rightPointer <= right) {
    if (arr[leftPointer] <= arr[rightPointer]) {
      // If the current element in the left subarray is smaller or equal, add it to temp
      temp.push(arr[leftPointer]);
      leftPointer++;
    } else {
      // If the current element in the right subarray is smaller, add it to temp
      temp.push(arr[rightPointer]);
      rightPointer++;
    }
  }

  // Copy any remaining elements from the left subarray to temp, that means right side elements are over
  while (leftPointer <= mid) {
    temp.push(arr[leftPointer]);
    leftPointer++;
  }

  // Copy any remaining elements from the right subarray to temp, that means left side elements are over
  while (rightPointer <= right) {
    temp.push(arr[rightPointer]);
    rightPointer++;
  }

  // Copy the merged elements back to the original array
  for (let i = left, k = 0; i <= right; i++, k++) {
    arr[i] = temp[k];
  }
};

const mergeSort = (arr, left, right) => {
  // Base case: if the array has one or no elements, it's already sorted
  if (left >= right) return;

  // Find the midpoint of the array
  const mid = Math.floor((left + right) / 2);

  // Recursively sort the left half
  mergeSort(arr, left, mid);

  // Recursively sort the right half
  mergeSort(arr, mid + 1, right);

  // Merge the two halves
  mergeLogic(arr, left, mid, right);
};

const array = [10, 13, 33, 55, 66, 9];
mergeSort(array, 0, array.length - 1);
console.log(array); // Outputs [9, 10, 13, 33, 55, 66]
