const brute = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  for (let i = 0; i < res.length; i++) {
    if (i < arr1.length) {
      arr1[i] = res[i];
      arr2[i] = res[arr1.length + i];
    }
  }
  return [arr1, arr2];
};

const optimal1 = (arr1, arr2) => {
  let i = arr1.length - 1;
  let j = 0;
  while (i >= 0 && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
      i--;
      j++;
    } else {
      break;
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return [arr1, arr2];
};

const swap = (arr1, arr2, i, j) => {
  if (arr1[i] > arr2[j]) {
    [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
  }
};

const optimal2 = (arr1, arr2) => {
  const x = arr1.length;
  const y = arr2.length;
  const total = x + y;
  let gap = Math.ceil(total / 2);

  while (gap > 0) {
    let i = 0;
    let j = i + gap;
    while (j < total) {
      if (i < x && j >= x) {
        swap(arr1, arr2, i, j - x);
      } else if (i >= x) {
        swap(arr2, arr2, i - x, j - x);
      } else {
        swap(arr1, arr1, i, j);
      }
      i++;
      j++;
    }
    if (gap == 1) break;
    gap = Math.ceil(gap / 2);
  }
  return [arr1, arr2];
};
const arr1 = [1, 3, 5, 7];
const arr2 = [0, 2, 6, 8, 9];

console.log(optimal2(arr1, arr2));
