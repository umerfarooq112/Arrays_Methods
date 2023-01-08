var array1 = [
  [5, 10],
  [6, 10],
  [7, 10],
  [8, 10],
  [9, 10]
];

const sum = array1.reduce((acc, i) => {
  // console.log(acc, "is the index");
  return acc + i[0] + i[1];
}, 0);

// console.log(sum, "i");
