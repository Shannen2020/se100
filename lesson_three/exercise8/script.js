// Exercise 8

const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below
const closeBar = (AAPLCurrentBar.open + AAPLCurrentBar.close + AAPLCurrentBar.high +AAPLCurrentBar.low)/4
const openBar = (AAPLPrevBar.open + AAPLPrevBar.close)/2
const high = Math.max(AAPLCurrentBar.open, AAPLCurrentBar.close,AAPLCurrentBar.high, AAPLCurrentBar.low)
const low = Math.min(AAPLCurrentBar.open, AAPLCurrentBar.close, AAPLCurrentBar.high, AAPLCurrentBar.low)

console.log(openBar)
console.log(closeBar)
console.log(high)
console.log(low)


// OTHER NOTES ON OBJECT
const student = {
    "name": "shannen",
    'id': 5677,
    'courses': ['math','science','english']
}

// console.log(student.name)