
function fetchData() {
  // Write your code here
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data retrieved")
  }, 1000);
})
}


function processData(data) {
  // Write your code here
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      const processedData = data + " and processed"
      resolve(processedData)
    }, 2000)
  })
}
  


function displayData(data) {
  // Write your code here
  console.log((data))
}

// Chaining the functions
fetchData()
  .then((data) => processData(data))
  .then((processedData) => displayData(processedData));