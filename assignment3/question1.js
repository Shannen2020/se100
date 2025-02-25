const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
let total=0
for (let i=0; i<msftData.length; i+=1){
    total+=msftData[i]
}
console.log(total/msftData.length)