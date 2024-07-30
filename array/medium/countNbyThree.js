const countNByTwo = (arr) => {
  const n = arr.length;
  let hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.get(arr[i])) {
      // console.log(arr[i], hash.get(arr[i]));
      const curr = hash.get(arr[i]) + 1;
      hash.set(arr[i], curr);
      if (hash.get(arr[i]) > Math.floor(n / 2)) {
        return arr[i];
      }
    } else {
      hash.set(arr[i], 1);
    }
  }
};

const countNByThree = (arr) => {
  const n = arr.length;
  let hash = new Map();
  const res = [];
  for (let i = 0; i < n; i++) {
    if (hash.get(arr[i])) {
      // console.log(arr[i], hash.get(arr[i]));
      const curr = hash.get(arr[i]) + 1;
      hash.set(arr[i], curr);
      if (hash.get(arr[i]) > Math.floor(n / 3)) {
        res.push(arr[i]);
      }
    } else {
      hash.set(arr[i], 1);
    }
  }
  return res;
};

const optimalCountNbyTwo = (arr) => {
  const n = arr.length;
  let candidate = arr[0];
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (candidate === arr[i]) {
      count++;
    } else {
      count--;
      if (count == 0) {
        candidate = arr[i];
      }
    }
  }
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == candidate) {
      count++;
      if (count > n / 2) {
        return candidate;
      }
    }
  }
  return -1;
};

const optimalCountNbyThree = (arr) => {
  const n = arr.length;
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;
  const res = [];
  for (let i = 0; i < n; i++) {
    if (count1 == 0 && arr[i] !== candidate2) {
      count1 = 1;
      candidate1 = arr[i];
    } else if (count2 == 0 && arr[i] !== candidate1) {
      count2 = 1;
      candidate2 = arr[i];
    } else if (candidate1 == arr[i]) {
      count1++;
    } else if (candidate2 == arr[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == candidate1) {
      count1++;
      if (count1 > Math.floor(n / 3)) {
        res.push(candidate1);
      }
    }
    if (arr[i] == candidate2) {
      count2++;
      if (count2 > Math.floor(n / 3)) {
        res.push(candidate2);
      }
    }
  }

  // return { count1, count2, candidate1, candidate2 };
};

const arr = [1, 1, 1, 1, 3, 3, 2, 2, 2];
console.log(optimalCountNbyThree(arr));

// Point:
// In the Boyer-Moore Majority Vote algorithm for finding elements that appear more than n/3 times, we take two candidates because, for an array of 99 elements, at most two candidates can appear more than 33 times each (since 99/3 = 33). If there were three candidates, each appearing more than 33 times, their total count would exceed 99, which is impossible.

// Example:

// Consider an array of 99 elements.

// To find elements that appear more than n/3 times, we need to check for elements appearing more than 33 times (99/3 ≈ 33).

// If there were three different elements, say A, B, and C, each appearing more than 33 times, the total count would be:

// A appears more than 33 times.
// B appears more than 33 times.
// C appears more than 33 times.
// This would mean that the sum of occurrences of A, B, and C is more than 99, which contradicts the fact that there are only 99 elements in the array.

// Therefore, in any array of 99 elements, at most two different elements can appear more than 33 times each.

// This logic justifies why we limit the algorithm to two candidates when looking for elements that appear more than n/3 times.
