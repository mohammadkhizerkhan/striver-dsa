const isSorted = (arr) => {
  let isSorted = true;
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i - 1] > arr[i]) {
      isSorted = false;
    }
  }
  return isSorted;
};

console.log(isSorted([1, 2, 9, 4, 5]));
