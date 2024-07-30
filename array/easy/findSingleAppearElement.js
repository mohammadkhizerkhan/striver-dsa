const findSingleAppearElement = (arr) => {
  const hash = {};
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = 1;
    else hash[arr[i]]++;
  }
  console.log(hash);
  for (const key in hash) {
    if (hash[key] == 1) {
      return key;
    }
  }
};

console.log(findSingleAppearElement([4, 1, 2, 1, 2]));

const optimal = (arr) => {
  let xor;
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(xor, '---', arr[i]);
    xor = xor ^ arr[i];
    console.log(xor);
  }
  return xor;
};

console.log(optimal([4, 1, 2, 1, 2]));