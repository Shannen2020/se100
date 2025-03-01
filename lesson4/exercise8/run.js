const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

//You have been tasked to create a function called sortPerformanceInAscOrder() 
// that will return a list of daily performance sorted in ascending order.

const sortPerformanceInAscOrder = (stockarray) => stockarray.sort()

// Do not modify this code:
// sortPerformanceInAscOrder(StockDailyPerformance);
console.log(`Sorted daily performance using arrow function: ${sortPerformanceInAscOrder(StockDailyPerformance)}`)