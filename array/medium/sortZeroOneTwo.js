const sortZeroOneTwo = (arr) => {
  let i = 0;
  let j = 0;
  let k = 0;
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] === 0) {
      i++;
    } else if (arr[z] === 1) {
      j++;
    } else {
      k++;
    }
  }
  for (let z = 0; z < arr.length; z++) {
    if (z < i) {
      arr[z] = 0;
    } else if (z < j + i) {
      arr[z] = 1;
    } else {
      arr[z] = 2;
    }
  }
  return arr;
};

console.log(sortZeroOneTwo([2, 1, 0, 1, 1, 0]));

const dutchFlagApproach = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  while (mid < high) {
    if (arr[mid] == 0) {
      let temp = arr[low];
      arr[low] = arr[mid];
      arr[mid] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 2) {
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
    } else {
      mid++;
    }
  }
  return arr;
};
console.log(dutchFlagApproach([2, 0, 2, 1, 1, 0]));
