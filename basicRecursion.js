const printName = (name, iteration) => {
  if (iteration === 0) return;
  console.log('------->name = ' + name + ' ,iterations = ' + iteration);
  printName(name, iteration - 1);
};

console.log(printName('khan', 5));

const factorial = (n) => {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

console.log('----------->factorial of ' + 5 + ' is ' + factorial(5));

// brute force reverse array
const reverseArray = (arr) => {
  const result = [];
  for (let i = 1; i < arr.length + 1; i++) {
    result.push(arr[arr.length - i]);
  }
  return result;
};

console.log(
  '------------->brutefore reverse array',
  reverseArray([1, 2, 3, 4, 5])
);

// two pointer reverse
const twoPointerReverse = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};
console.log(
  '----------------> two Pointer reverse',
  twoPointerReverse([1, 2, 3, 4, 5])
);

// recursive reverse
const recursiveReverse = (arr, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    return recursiveReverse(arr, startIndex + 1, endIndex - 1);
  }
  return arr;
};

console.log(
  '---------->recursive reverse',
  recursiveReverse([1, 2, 3, 4, 5], 0, 4)
);

// two pointer anagram
const twoPointerAnagram = (str) => {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (!/[a-zA-Z0-9]/.test(str[i])) {
      i++;
    } else if (!/[a-zA-Z0-9]/.test(str[j])) {
      j--;
    } else if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log('-------------> two pointer anagram', twoPointerAnagram('abc ba'));

// anagramReverse using recursion
const anagramReverseRecursion = (str, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    if (str[startIndex] === str[endIndex]) {
      anagramReverseRecursion(str, startIndex + 1, endIndex - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  '--------------> anagramReverseRecursion ',
  anagramReverseRecursion('abcdba', 0, 4)
);

// fibanocci
const fibanocci = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  return fibanocci(n - 1) + fibanocci(n - 2);
};

console.log('-------------> fibanocci', fibanocci(6));
