const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

function average_closing_price(x) {
	let total=0
	for (let i=0; i<x.length; i++) {
		total+=x[i][3]
		
	}
	return total/x.length
}

console.log(`Average closing price of MSFT is ${average_closing_price(msftData)}`)