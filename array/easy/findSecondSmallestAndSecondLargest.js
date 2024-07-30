const findSecondSmallestAndSecondLargest = (arr) => {
  let firstLargest;
  let firstSmallest;
  let secondLargest;
  let secondSmallest;
  if (arr[0] > arr[1]) {
    firstLargest = arr[0];
    secondLargest = arr[1];
  } else {
    firstLargest = arr[1];
    secondLargest = arr[0];
  }
  if (arr[0] < arr[1]) {
    firstSmallest = arr[0];
    secondSmallest = arr[1];
  } else {
    firstSmallest = arr[1];
    secondSmallest = arr[0];
  }

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    }
  }
  return { secondLargest, secondSmallest };
};

console.log(findSecondSmallestAndSecondLargest([1, 1, 2, 3, 4, 5, 6, 6]));
