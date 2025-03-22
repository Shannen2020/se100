// exercise 4

// import './App.css'

// function App() {
//   const handleOnChange =() =>{
//     alert("New option is selected!")
//   }
//   const handleOnMouseEnter = ()=> {
//     alert("Just click!")
//   }
//   return (
//     <>
//       <h1>Currency Converter</h1>
//       <button onMouseEnter={handleOnMouseEnter}>
//         Click me
//       </button>

//       <select name="currency" id="currencySelect" onChange={handleOnChange}>
//         <option value="usd">USD</option>
//         <option value="jpy">JPY</option>
//         <option value="sgd">SGD</option>
//         <option value="myr">MYR</option>
//     </select>
//     </>
//   )
// }

// export default App;


// exercise 6

// import './App.css'

// function App() {
//   const handleOnChange =(event) =>{
//     alert(`Currency selected is ${event.target.value}`)
//   }
//   const handleOnMouseEnter = ()=> {
//     alert("Just click!")
//   }
//   return (
//     <>
//       <h1>Currency Converter</h1>
//       <button onMouseEnter={handleOnMouseEnter}>
//         Click me
//       </button>

//       <select name="currency" id="currencySelect" onChange={handleOnChange}>
//         <option value="usd">USD</option>
//         <option value="jpy">JPY</option>
//         <option value="sgd">SGD</option>
//         <option value="myr">MYR</option>
//     </select>
//     </>
//   )
// }

// export default App;


// Exercise 7
import './App.css'
import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => console.log(data));
//   }, []); // Empty dependency array means this effect runs only once after the initial render

//   return <div>Check the console for data!</div>;
// }

function App(props) {
  useEffect(() => {
    console.log("Making an API request..")
  }, []);
}

export default App;