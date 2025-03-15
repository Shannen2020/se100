
const people = [
{
  name:"Tom", country: "Singapore",
  name: "Jerry", country: "Malaysia",
  name:"Sarah", country: "Indonesia"
}]

function WelcomeMessagesTitle() {
  return (<h1>Welcome Messages</h1>)
}

function WelcomeMessages(props) {
  return (
    <li>Welcome {names} from {country}</li>
  )
}

function WelcomeMessagesList(people) {
  return (
    <WelcomeMessages
      name={people.name}
      country={people.country}
      />
    )
}

function WelcomeMessagesSection() {
  return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
  </div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<WelcomeMessagesSection />)
