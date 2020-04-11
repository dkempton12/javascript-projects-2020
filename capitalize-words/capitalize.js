const sentence = `this is a sentence`;

const capitalizedWords = sentence.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizedWords);
