const quickSortAlgo = (arr, left, right) => {
  let pivot = arr[left];
  let i = left;
  let j = right;
  while (i < j) {
    while (arr[i] <= pivot && i < right) {
      i++;
    }
    while (arr[j] > pivot && j > left) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  arr[left] = arr[j];
  arr[j] = pivot;
  return j;
};
const quickSort = (arr, left, right) => {
  if (left < right) {
    const pivotIndex = quickSortAlgo(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const array = [10, 13, 33, 55, 66, 9];

console.log('=================>', quickSort(array, 0, array.length - 1));
