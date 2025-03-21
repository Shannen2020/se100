//props is an object
let props = 
{
  "name": "shannen",
  "email": "shannenabc@hotmail.com"
}

function RandomComponment(props) {
  console.log(props.anyRandomField)
  return (<div className='user-info'>
    <h2>{props.name}</h2>
    <p>Email: {props.email}</p>
  </div>)
}

// React components must be capitalized

function Header() {
  return (<h1>Welcome Messages</h1>)
}

function Paragraph() {
  return (<ul>
      <li>Welcome Tom from Singapore</li>
      <li>Welcome Jerry from Malaysia</li>
      <li>Welcome Sarah from Indonesia</li>
    </ul>)
}

// function App() {
//   return <div>
//     <Header />
//     <Paragraph />
//   </div>
// }

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);


// root
// .render(<App />)

// This works too
// root.render(<Header />)
// root.render(<Paragraph />)

function App() {
  return (
    <div className="App">
      <UserInfo 
        name="John Doe" 
        email="john@example.com" 
        anyRandomField='somevalue'
      />
      <UserInfo 
        name="Jane Smith" 
        email="jane@example.com" 
      />
    </div>
  );
}