const countDigits = (n) => {
  return Math.floor(Math.log10(n)) + 1;
};

// console.log(countDigits(0054444));

const reverseDigit = (n) => {
  let num = 0;
  while (n > 0) {
    const lastNum = n % 10;
    num = num * 10 + lastNum;
    n = Math.floor(n / 10);
  }
  return num;
};
// console.log(reverseDigit(10400));

const checkPalindrome = (n) => {
  const original = n;
  let reverse = 0;
  while (n > 0) {
    const lastNum = n % 10;
    reverse = reverse * 10 + lastNum;
    n = Math.floor(n / 10);
  }
  return reverse == original;
};
// console.log(checkPalindrome(121));

const checkAmstrong = (n) => {
  const original = n;
  const countDigit = Math.floor(Math.log10(n)) + 1;
  let sum = 0;
  while (n > 0) {
    const lastNum = n % 10;
    sum = sum + Math.pow(lastNum, countDigit);
    n = Math.floor(n / 10);
  }
  return original == sum;
};

// console.log(checkAmstrong(1531));

const printAllDivisors = (n) => {
  const divisors = [];
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      divisors.push(i);
      if (i != n / i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors;
};

// console.log(printAllDivisors(36));

const checkPrime = (n) => {
  let primeCount = 0;
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      primeCount++;
    }
  }
  return !primeCount > 2;
};

// console.log(checkPrime(23));

const printNTimes = (n) => {
  console.log('hi');
  if (n == 1) {
    return;
  }
  return printNTimes(n - 1);
};

// printNTimes(3);

const sumOfNumbers = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNumbers(n - 1);
  // return (n * (n + 1)) / 2;
};

// console.log(sumOfNumbers(3));

const reverseArray = (arr, left, right) => {
  if (left >= right) {
    return arr;
  }
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return reverseArray(arr, ++left, --right);
};

// console.log(reverseArray([1, 2, 3, 4], 0, 3));

const checkPalindromArray = (arr, left, right) => {
  if (left >= right) {
    return true;
  }
  if (arr[left] === arr[right]) {
    return checkPalindromArray(arr, ++left, --right);
  }
  return false;
};

// console.log(checkPalindromArray([1, 2, 3, 1], 0, 3));

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

// console.log(selectionSort([1, 2, 3, 1, 5]));

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    let swapped = false;
    // let maxIndex = i;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return arr;
};
// console.log(bubbleSort([1, 2, 3, 1, 5]));

const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let j = i + 1;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
};
// console.log(insertionSort([1, 2, 3, 1, 5]));

const merge = (arr, low, mid, high) => {
  const temp = [];
  let leftPointer = low;
  let rightPointer = mid + 1;
  while (leftPointer <= mid && rightPointer <= high) {
    if (arr[leftPointer] <= arr[rightPointer]) {
      temp.push(arr[leftPointer]);
      leftPointer++;
    } else {
      temp.push(arr[rightPointer]);
      rightPointer++;
    }
  }
  while (leftPointer <= mid) {
    temp.push(arr[leftPointer]);
    leftPointer++;
  }
  while (rightPointer <= high) {
    temp.push(arr[rightPointer]);
    rightPointer++;
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
};

const mergeSort = (arr, low, high) => {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 2, high);
  merge(arr, low, mid, high);
  return arr;
};

console.log(mergeSort([1, 2, 3, 1, 5], 0, 4));
