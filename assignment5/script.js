const HelloWorldPromise = new Promise ((resolve,reject)=> {
  setTimeout(() => {
    resolve("World")
  }, 1000);
})

HelloWorldPromise
.then((message)=> {
  return message
})
.then((new_message => console.log("Hello " + new_message)))
