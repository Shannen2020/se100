// Exercise 7

const TSLAClosingPrices = [230.12, 221.45, 225.61, 219.48, 227.52]

let total=0
for(let i=0; i<TSLAClosingPrices.length; i++) {
    total+=TSLAClosingPrices[i]
}
console.log(total/TSLAClosingPrices.length)

// Other notes on Array
const fruitCatalog = ['apple', 'banana', 'strawberry']
fruitCatalog.push("durian")
console.log(fruitCatalog)
fruitCatalog.pop() //to remove last element
console.log(fruitCatalog)

const priceCatalog = [23,44,1,3]
// be careful. Some functions mutates the original 
// good practice is to save the original as a copy
console.log(priceCatalog.sort()) // after calling sort, it saves the mutated array back!!
console.log(priceCatalog.reverse()) 
// console.log(priceCatalog.sort(function(a, b){return b-a}))