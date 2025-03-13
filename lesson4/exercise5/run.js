function getBetween() {
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	counter=0
	for (let value of MSFTStockClosingPrices) {
        // console.log(value)
        if (value>254 && value<257) {
            counter+=1;
        }
    }
    console.log(counter)
}
getBetween()
