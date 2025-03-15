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

function App() {
  return <div>
    <Header />
    <Paragraph />
  </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);


root
.render(<App />)

// This works too
// root.render(<Header />)
// root.render(<Paragraph />)

