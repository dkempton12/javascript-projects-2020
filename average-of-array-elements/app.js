const numbers = [ 12, 24, 7, 8, 33, 88, 4, 34, 11, 6 ];

const sum = numbers.reduce((a, b) => a + b, 0);
const arrayLength = numbers.length;

const average = sum / arrayLength;
console.log(average);
