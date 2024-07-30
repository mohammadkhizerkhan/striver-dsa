const reArrangeArray = (arr) => {
  const positive = [];
  const negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      positive.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    arr[2 * i] = positive[i];
    arr[2 * i + 1] = negative[i];
  }
  return arr;
  // let i = 0;
  // const res = [];
  // while (i < arr.length / 2) {
  //   res.push(positive[i]);
  //   res.push(negative[i]);
  //   i++;
  // }
  // return res;
};

const reArrangeArrayOptimized = (arr) => {
  let i = 0;
  let j = 1;
  const res = [];
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] < 0) {
      res[j] = arr[z];
      j = j + 2;
    } else {
      res[i] = arr[z];
      i = i + 2;
    }
  }
  return res;
};

// const arr = [-1, -2, 3, 1, -2, 3];

// console.log(reArrangeArray(arr));
// console.log(reArrangeArrayOptimized(arr));

// unequal number of +ve and -ve

const reArrangeArray3 = (arr) => {
  const positive = [];
  const negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      positive.push(arr[i]);
    }
  }

  if (positive.length < negative.length) {
    for (let i = 0; i < positive.length; i++) {
      arr[2 * i] = positive[i];
      arr[2 * i + 1] = negative[i];
    }
    let currentIndex = positive.length * 2; // till now we have added both positive and negative array element, so arr contains length of positive * 2
    for (let i = positive.length; i < negative.length; i++) {
      arr[currentIndex] = negative[i];
      currentIndex++;
    }
  } else if (negative.length < positive.length) {
    for (let i = 0; i < negative.length; i++) {
      arr[2 * i] = positive[i];
      arr[2 * i + 1] = negative[i];
    }
    let currentIndex = negative.length * 2; // till now we have added both positive and negative array element, so arr contains length of negative * 2
    for (let i = negative.length; i < positive.length; i++) {
      arr[currentIndex] = positive[i];
      currentIndex++;
    }
  } else {
    for (let i = 0; i < arr.length / 2; i++) {
      arr[2 * i] = positive[i];
      arr[2 * i + 1] = negative[i];
    }
  }

  // for (let i = 0; i < maxLength; i++) {
  //   arr[2 * i] = positive[i];
  //   arr[2 * i + 1] = negative[i];
  // }
  // if (positive.length < negative.length) {
  //   for (let i = positive.length; i <= negative.length; i++) {
  //     arr[i] = negative[i];
  //   }
  // } else {
  //   for (let i = negative.length; i <= positive.length; i++) {
  //     arr[i] = positive[i];
  //   }
  // }

  return arr;
};
const arr = [-1, -2, 3, 1, -2, 3, 4, 5, 6];

console.log(reArrangeArray3(arr));
