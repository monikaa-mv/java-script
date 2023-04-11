const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.push(11);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

arr.splice(2, 2, 20);
console.log(arr);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2);
console.log(a3);

const a4 = [...a1, ...a2];
console.log(a4);

const a5 = [a1,a2];
console.log(a5);

console.log(a5[0][1]);


