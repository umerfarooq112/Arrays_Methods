const arr = [1, 2, 3, 8, 9, 10];
// arr.splice(3, 0, ...[4, 5, 6, 7]);

const getFirstHalf = arr.slice(0, arr.length / 2);
const getSeondHalf = arr.slice(arr.length / 2);

const filterarr = [];
for (let i = getFirstHalf[2] + 1; i < getSeondHalf[0]; i++) {
  filterarr.push(i);
}

arr.splice(3, 0, ...filterarr);
console.log(arr);

// arr.map((el, i) => el);
