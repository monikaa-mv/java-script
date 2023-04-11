const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.forEach(n => {
    console.log(n);
});

nums.filter(n => n % 2 === 0).forEach(n => {
    console.log(n);
});

nums.map(n => n * 2).forEach(n => {
    console.log(n);
});

let neww = nums.reduce((total, n) => total + n);
console.log(neww);

