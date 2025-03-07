const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let total=0

    for (let key in disneyData) {
        let subkeys = Object.keys(disneyData[key])
		total+=parseFloat(disneyData[key][subkeys[3]])
    }
    
const average = total/2

console.log(`Average closing price of Disney is ${average.toFixed(2)}`)