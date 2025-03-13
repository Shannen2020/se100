// Exercise 5
const companyName = "Metaa"
const lastletterindex = companyName.length-1
// Write your code below
console.log(companyName.substring(0,lastletterindex).toUpperCase());


// JavaScript -1 indexing has no meaning.
const welcomeString = "welcome to the world of JS";
const character = welcomeString[3];
const partialString = welcomeString.substring(0, 7);
// console.log(partialString);

// JavaScript -1 indexing has no meaning.
// this the JS way.
const lastCharacter = welcomeString[welcomeString.length -1];
console.log(lastCharacter);