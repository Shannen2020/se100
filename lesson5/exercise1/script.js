
function getNumberPromise() {
  // Write your code here
  const myPromise = new Promise((resolve,reject) => {
    setTimeout(()=> {
      resolve(10);
    },2000);
  })
  return myPromise
}

//   // Write your code here
//   return myPromise = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//       resolve(10);
//     },2000);
//   })
// }

// Test the function
getNumberPromise().then((value) => {
  console.log(value); // Should log 10 after 2 seconds
});