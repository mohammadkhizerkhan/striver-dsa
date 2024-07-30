// Count frequency of each element in the array and find min and max frequency element

const countFrequency = (arr) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!result[num]) {
      result[num] = 1;
    } else {
      result[num] = result[num] + 1;
    }
  }
  let min = arr.length;
  let max = 0;
  let minElement, maxElement;
  for (const [key, value] of Object.entries(result)) {
    if (value > max) {
      maxElement = key;
      max = value;
    }
    if (value < min) {
      minElement = key;
      min = value;
    }
  }
  return { min, max, minElement, maxElement };
};

console.log(
  '----------->count frequency',
  countFrequency([1, 1, 2, 2, 2, 3, 4])
);
