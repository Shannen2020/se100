// REACT components are essentially
// a function that returns an element
// REACT components must be capitalized

function WelcomeHeader() {
  return (<h1>Welcome Messages</h1>)
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(
  // react method: component JSX syntax
  <WelcomeHeader />

  // function call method
  WelcomeHeader()

  // traditional html method
    <div>
      <h1>Welcome Messages</h1>
      <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
    </ul>
    </div>
  );