const moveZeros = (arr) => {
  let j = 0; // Pointer for the position of the next non-zero element

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap non-zero element with the element at position j
      j++; // Increment j to the next position
    }
  }

  return arr;
};
console.log(moveZeros([1, 0, 0, 3, 5, 0]));
