const nCr = (row, ele) => {
  const n = row;
  const r = ele;
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
};

// const pascalFindElement = (row, ele) => nCr(row - 1, ele - 1);

// console.log(pascalFindElement(5, 3));

const printNthRow = (row) => {
  const n = row;
  for (let i = 0; i < row; i++) {
    console.log(nCr(n - 1, i));
  }
};

const optimalPrintNthRow = (row) => {
  const n = row;
  let res = 1;
  console.log(1);
  for (let i = 1; i < row; i++) {
    res = res * (n - i);
    res = res / i;
    console.log(res);
  }
};

console.log(optimalPrintNthRow(6));
