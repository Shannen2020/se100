const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below
function getBetween(tickername) {
	counter=0
	for (let value of tickername) {
        if (value>254 && value<257) {
            counter+=1;
        }
    }
    // console.log(counter)
    return counter
}

// getBetween(MSFTStockClosingPrices)
// getBetween(AAPLStockClosingPrices)

console.log(`Closing price of MSFT between 254 to 257: ${getBetween(MSFTStockClosingPrices)} Days`)
console.log(`Closing price of AAPL between 254 to 257: ${getBetween(AAPLStockClosingPrices)} Days`)

