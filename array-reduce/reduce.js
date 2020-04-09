const numbers = [ 12, 93, 120, 88, 24, 8, 36, 33, 34, 12, 6, 5, 9, 50, 45 ];

const addUpNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(addUpNumbers);
