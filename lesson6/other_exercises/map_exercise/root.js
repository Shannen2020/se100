//props is an object
let numbers = [1,2,3]
let doubled = []

for (i=0; i<numbers.length; i++) {
  doubled.push(numbers [i]*2);
}

console.log(doubled)

// map() accepts a function and this function takes in one param
// and it returns one value
const newArray = numbers.map((somevalue) => {
  return somevalue *2
}) 

console.log('newArray: ', newArray)