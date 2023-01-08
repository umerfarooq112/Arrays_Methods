const arr = [3, 1, 2, 8, 9, 10];

//   doing it with slice method
const newArr = [];
const getHalfofArr = Math.ceil(arr.length / 2);
const getFirstHalf = arr.slice(0, getHalfofArr);
const getSecondHalf = arr.slice(getHalfofArr);
newArr.push(...getFirstHalf);

const starttoEndNo = [];
for (let i = 3; i < 8; i++) {
  starttoEndNo.push(i);
}

newArr.push(...starttoEndNo);
newArr.push(...getSecondHalf);

console.log(newArr);
// newArr.push(getFirstHalf);
// console.log(getFirstHalf);
