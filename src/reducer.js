const arr = [1, 2, 3, 7, 8, 9, 10];
// const missingElements = arr.reduce((acc, curr, i) => {
//   // console.log(i, arr[i] , acc);
//   let newEl = [];
//   if (curr == 3) {
//     console.log(curr);
//     const getDiff = arr[i + 1] - arr[i];
//     newEl = Array.from({ length: getDiff }, (_, i) => i + getDiff);

//     // console.log(getDiff);
//   }
//   return newEl;
//   // return [];
// }, 0);

// console.log(missingElements);

// console.log(Array.from([4], (i) => i + 1));

const forea = arr.forEach((el, i) => {
  const getdiff = arr[i + 1] - arr[i];
  if (getdiff >= 2) {
    let Arr = Array.from({ length: getdiff }, (a = 0, x) => x + getdiff);
    console.log(getdiff, "is the diff  ");
    arr.splice(arr[i] + 1, 0, ...Arr);
  }
  return [];
  // console.log(el);
});

console.log(arr, forea, " ");

// const newarr = arr.map((el) => el);
// console.log(newarr);
