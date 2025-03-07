const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function sma(x) {
    sum=0
    for (i=0; i<x.length; i+=1) {
        sum+=x[i]
    }
    return sum/x.length

}
console.log(`The 7-day SMA of AMD is ${sma(amdPrices)}`)