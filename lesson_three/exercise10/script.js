// Exercise 10

const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}

// Write your code below

let stockPrice=5
if(stockPrice.open>stockPrice.close){
	console.log("stock is bearish")
}
else {
	console.log("stock is bullish")
}

// OTHER NOTES ON OPERATIONS
// in JS, string 5 is number 5, it returns as TRUE.
// therefore to enforce same type comparison, use ===
// === is a strict comparison