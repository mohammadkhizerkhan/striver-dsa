const linearSearch = (arr, k) => {
  let isPresent = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[k]) {
      isPresent = i;
    }
  }
  return isPresent;
};

console.log(linearSearch([1, 2, 3, 4, 5], 19));
