const names = [['John', 'Doe'], ['Jane', 'Doe'], ['Jeremy']];

// const fullNames = names.map((namesArray)=> {
//   if (namesArray.length !==2) {
//     return "invalid data point"
//   }
//   return namesArray[0]+ " " + namesArray[1] 
// })


const filteredNames = names.filter((namesArray)=>{
  return namesArray.length ==2
})
// console.log(filteredNames);

const fullNames = names.map((filteredNames)=> {
  return filteredNames[0]+ " " + filteredNames[1] 
})

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']