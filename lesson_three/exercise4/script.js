// Exercise 4
const companyName = "Amazon"
const companyRating = 5

// using in text
console.log(`${companyName} has a customer satisfaction rating of ${companyRating}`)
// alternate way 1: Using concatenation
console.log(companyName + 'has a customer satisfaction rating of' + companyRating)
// alternate way 2: Using placeholder
console.log("%s has a ... rating of %i", companyName, companyRating)

// Other notes
// array is an ordered list
let fruitCatalog = ['apple','banana','strawberry']

// objects: use to store key value pair
const student = {
    "name": "shannen",
    'id': 5677,
    'courses': ['math','science','english']
}

let applePrice = 3
let bananaPrice = 1.23

// MATH library is inbuilt to JS
// documentation google MDN Web Docs
console.log(applePrice+ Math.round(bananaPrice))

// how to use display apostrophe in string, use backslash or single vs double quotations
let companyNamew = 'Amazon\'s stock price is ...'
// let companyNamew = "Amazon's stock price is ..."
console.log(companyNamew)