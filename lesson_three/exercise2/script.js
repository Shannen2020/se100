// can be change
let stockPrice = 300

console.log(stockPrice)

// shorthand for stockPrice = stockPrice+500
stockPrice+=500

console.log("the updated stock price is: ", stockPrice)

// use variable inside message
// use backtick instead of open quotes
// good for having control on where to place your variable
console.log(`${stockPrice} is the updated stock price`)

let stockCount = 10
const totalValue = stockCount*stockPrice
console.log(stockCount*stockPrice)