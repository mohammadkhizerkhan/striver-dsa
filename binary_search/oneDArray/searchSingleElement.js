// brute force
const searchSingleElement = (arr) => {
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  if (arr[arr.length - 1] !== arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }
  for (let i = 1; i < arr.length - 2; i++) {
    if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
      return arr[i];
    }
  }
};

const binarySearch = (arr) => {
  // first we'll check for first and last element
  if (arr[0] !== arr[1]) {
    return arr[0];
  }
  if (arr[arr.length - 1] !== arr[arr.length - 2]) {
    return arr[arr.length - 1];
  }
  // initialize left and right variable
  let left = 1;
  let right = arr.length - 2;

  // add base condition
  while (left <= right) {
    // take the mid
    const mid = Math.floor((left + right) / 2);
    // if mid previous and next element is not same as mid then this is the single item
    if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) {
      return arr[mid];
    }
    // observe repeated items even and odd position
    // [1,1,2,2,3,4,4,5,5];
    // (1,1) (even and odd)
    //  if mid is odd then same element will be present in it's(left) even position for ex: for index = 3 , 2nd is the repeated elemet
    // if mid is even then same element will be present in it's(right) odd position for ex: for index = 2 , 3rd is the repeated elemet
    // then we'll know our element will be present in right side
    else if (
      (mid % 2 != 0 && arr[mid] == arr[mid - 1]) ||
      (mid % 2 == 0 && arr[mid] == arr[mid + 1])
    ) {
      left = mid + 1;
    } else {
      // if the above condition fail the we know element present left side
      right = mid - 1;
    }
  }
};

console.log(searchSingleElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));
