// forEach method
const mealOrders = [100, 110, 98, 120, 60];
const mealTaxMA = 0.0625;

const mealsWithTax = mealOrders.forEach(
  mealOrder => mealOrder * mealTaxMA
  );

// Map method
const countries = ['United States', 'Canada', 'Mexico', 'England', 'Jamaica'];

const countriesLowerCase = countries.map(country => country.toLowerCase());

console.log(countriesLowerCase);