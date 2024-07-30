const leftRotate = (arr) => {
  const firstItem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstItem;
  return arr;
};

console.log(leftRotate([1, 2, 3, 4, 5]));
