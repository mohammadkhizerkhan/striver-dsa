const nextPermutation = (arr) => {
  let index = -1;
  const n = arr.length;
  // 1st find a break point
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = arr[i];
      break;
    }
  }

  if (index === -1) {
    return arr.reverse();
  }

  // 2nd swap with least greatest item
  // let leastGreatest = index + 1;
  // for (let i = index; i < n - 1; i++) {
  //   if (arr[index] < arr[i + 1]) {
  //     leastGreatest = i + 1;
  //   }
  // }
  // let temp = arr[index];
  // arr[index] = arr[leastGreatest];
  // arr[leastGreatest] = temp;

  // 2nd swap with least greatest item
  for (let i = n - 2; i > index; i--) {
    if (arr[i] > arr[index]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      break;
    }
  }
  arr.splice(index + 1, n - 1 - index, ...arr.slice(index + 1).reverse());
  return arr;
};

console.log(nextPermutation([2, 1, 5, 4, 3, 0, 0]));
