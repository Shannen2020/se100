const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function sma(x) {
    let sum=0
    for (i=0; i<x.length; i+=1) {
        sum+=x[i]
    }
    return sum/x.length
}

function count_above_average(x) {
    let count = 0
    let avg = sma(x)
    for (let i=0; i<x.length; i+=1) {
        if (x[i]>avg) { 
            count +=1
            
        }
    }
    return count
}

console.log(`Number of days AMD was above the 7-day SMA is ${count_above_average(amdPrices)}`)