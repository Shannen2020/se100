const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below
    // Write JavaScript code to help your user find the total sum of 
    // the all the closing prices of MSFT over two weeks.

let total = 0;
let i=0;
while (i<MSFTStockClosingPrices.length) {
    total+=MSFTStockClosingPrices[i]["Monday"];
    total+=MSFTStockClosingPrices[i]["Tuesday"];
    total+=MSFTStockClosingPrices[i]["Wednesday"];
    total+=MSFTStockClosingPrices[i]["Thursday"];
    total+=MSFTStockClosingPrices[i]["Friday"];
    i++;
}
console.log(total.toFixed(2))



