// const helloPromise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("hello World");
//     },1000)
// })

// helloPromise.then((message)=> console.log(message))

// const randomPromise = new Promise((resolve, reject)=> {
//     let randomNumber = Math.random();

//     setTimeout(() => {
//         if (randomNumber>0.5) {
//             resolve("success! random number: " + randomNumber);
//         }
//         else {
//             reject("failure! random number: "+ randomNumber)
//         }
//     }, 1500);
// })

// randomPromise
// .then((message) => console.log('Great', message))
// .catch((error) => console.log("Nope", error))


const numberPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10)
    }, 1000);
})

numberPromise
.then((num)=> {
    let multiply2 = num*2
    console.log("After multiply by 2 is: ", (multiply2))
    return multiply2
})

.then((num)=> {
    let addition = num +10
console.log("After adding 10 is: ", (addition))
    return addition
})
.then((num)=> console.log("Final result: ",  num));