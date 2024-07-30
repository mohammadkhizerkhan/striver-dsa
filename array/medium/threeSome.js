const bruteFore = (arr) => {
  let res = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          res.push(temp);
        }
      }
    }
  }
  let set = new Set(res.map(JSON.stringify));
  res = Array.from(set).map(JSON.parse);
  return res;
};

const betterSolution = (arr) => {
  let res = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let hashSet = new Set();
    for (let j = i + 1; j < n; j++) {
      let k = -(arr[i] + arr[j]);
      if (hashSet.has(k)) {
        let temp = [arr[i], arr[j], k];
        temp.sort((a, b) => a - b);
        res.push(temp);
      } else {
        hashSet.add(arr[j]);
      }
    }
  }
  let set = new Set(res.map(JSON.stringify));
  res = Array.from(set).map(JSON.parse);
  return res;
};

const optimalSolution = (arr) => {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i !== 0 && arr[i] == arr[i - 1]) continue;
    let k = n - 1;
    let j = i + 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] == 0) {
        res.push([arr[i], arr[j], arr[k]]);
        k--;
        j++;
        while (j < k && arr[j] == arr[j + 1]) j++;
        while (j < k && arr[k] == arr[k - 1]) k--;
      } else if (arr[i] + arr[j] + arr[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return res;
};

const arr = [-4, -1, -1, 0, 1, 2];
console.log(optimalSolution(arr));
