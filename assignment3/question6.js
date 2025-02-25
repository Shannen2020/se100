const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

Object.keys(disneyData).forEach(key => {
	disneyData[key] = parseFloat(disneyData[key]);
});

const close = disneyData.close
const open = disneyData.open
const volume = disneyData.volume

if (close > open && volume >100000){
    console.log("Strong Bullish")
}
else if (close > open && volume <=100000) {
    console.log("Bullish")
} 
else if (close < open && volume >10000) {
    console.log("Strong Bullish")
} 
else if (close < open && volume <=10000){
    console.log("Bullish")
}
else {
    console.log("Neutral")
}
