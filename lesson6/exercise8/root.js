// Exercise 8
const users = [
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
    <li>Welcome {props.names} from {props.country}</li>
  )
}

function WelcomeMessagesList() {
  return 
      users.map(user=> {
        if (user.country==='Singapore') {
          return <li>Malujah Singapura</li>
        }
        return <WelcomeMessage name={user.name} country={user.country}>

        </WelcomeMessage>
      }

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
