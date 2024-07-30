const secondSmallestSecondLargest = (arr) => {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }

    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }
  return { secondLargest, secondSmallest };
};

console.log(secondSmallestSecondLargest([1, 1, 2, 3, 4, 5, 5]));
