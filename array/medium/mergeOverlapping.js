// Define a function named bruteForce that takes an array of intervals as input
const bruteForce = (arr) => {
  // Initialize an empty array to store the merged intervals
  const res = [];

  // Sort the input array based on the start time of each interval
  arr.sort((a, b) => a[0] - b[0]);

  // Iterate through each interval in the sorted array
  for (let i = 0; i < arr.length; i++) {
    // Extract the start and end times of the current interval
    let start = arr[i][0];
    let end = arr[i][1];

    // If the current interval overlaps with the last merged interval, skip it
    if (res.length !== 0 && arr[i][0] < res[res.length - 1][1]) {
      continue;
    }

    // Check for overlapping intervals and merge them
    for (let j = i + 1; j < arr.length; j++) {
      // If the next interval starts before or at the current end time, update the end time
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        // If no overlap is found, break the inner loop
        break;
      }
    }

    // Add the merged interval to the result array
    res.push([start, end]);
  }

  // Return the array of merged intervals
  return res;
};

const optimal = (arr) => {
  const n = arr.length;
  arr.sort((a, b) => a[0] - b[0]);
  const res = [arr[0]];
  for (let i = 1; i < n; i++) {
    if (arr[i][0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], arr[i][1]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

// Define a sample array of intervals
const arr = [
  [2, 3],
  [1, 2],
  [2, 6],
  [8, 10],
  [15, 18],
];

// Call the bruteForce function with the sample array and log the result
console.log(optimal(arr));
