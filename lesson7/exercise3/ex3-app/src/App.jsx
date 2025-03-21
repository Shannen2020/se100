import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const users = [
  { name: 'Tom', country: 'Singapore' },
  { name: 'Jerry', country: 'Malaysia' },
  { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessagesTitle() {
  return <p>Welcome Messages</p>
}

function WelcomeMessage(props) {
  return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
  return <ul>
      {
          users.map(user => (
              <WelcomeMessage key={user.name} name={user.name} country={user.country} />
          ))
      }
  </ul>
}

function WelcomeMessagesSection() {
  return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
  </div>
}

// function App() {
//   return <div>
//       <WelcomeMessagesSection />
//   </div>
// }

// const domContainer = document.getElementById('root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />)


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Introduction to React</h1>
      <p>This page demonstrates using React.</p>
      <WelcomeMessagesSection />
    </div>
  )
}

export default App
