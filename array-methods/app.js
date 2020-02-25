// forEach method
const numbers = [100, 200, 300, 400, 500, 600];
const numbersDoubled = numbers.forEach(number => number * 2);
console.log(numbersDoubled);

// Map method
const countries = ['United States', 'Canada', 'Mexico', 'England', 'Jamaica'];

const countriesLowerCase = countries.map(country => country.toLowerCase());

console.log(countriesLowerCase);

// Filter method
const words = ['the', 'and', 'from', 'javascript', 'programming'];
const longerThanThreeLetters = words.filter(word => word.length > 3);
console.log(longerThanThreeLetters);

// Find method - finding first number in the array greater than 25 
const randomNumbers = [6, 8, 12, 22, 26, 50, 88];
const greaterThan25 = randomNumbers.find(number => number > 25);
console.log(`First number greater than 25: ${greaterThan25}`);
