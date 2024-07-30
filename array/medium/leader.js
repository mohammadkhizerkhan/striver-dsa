const leaders = (arr) => {
  const res = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let isLeader = true;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] <= arr[j]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      res.push(arr[i]);
    }
  }
  return res;
};

const optimalLeader = (arr) => {
  const n = arr.length;
  const res = [arr[n - 1]];
  for (let i = n - 2; i >= 0; i--) {
    const max = Math.max(res[res.length - 1], arr[i]);
    if (max != res[res.length - 1]) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(leaders([10, 22, 12, 3, 0, 6]));
console.log(optimalLeader([10, 2, 12, 3, 0, 6]));
