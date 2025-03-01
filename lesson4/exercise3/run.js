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
let total=0

    for (let key in MSFTStockClosingPrices) {
        let subkeys = Object.keys(MSFTStockClosingPrices[key])
        console.log(subkeys)
        for (let subkey of subkeys) {
            console.log(MSFTStockClosingPrices[key][subkey])
            total+=MSFTStockClosingPrices[key][subkey]
        }
    }
    
console.log(`The total sum of closing prices of MSFT is ${total.toFixed(2)}`)
    
    // The total sum of closing prices of MSFT is 2744.47