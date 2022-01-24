// Components
import Form from './Components/Form.js';
import Results from './Components/Results.js';

// Modules
import axios from 'axios';
import {useState} from 'react';

// Styling
import './App.css';


function App() {
  // Api key
  const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

  // useState
  const [info, setInfo] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Getting information from the Api
  const callIt = () => {
    axios({
      url: 'https://app.ticketmaster.com/discovery/v2/events',
      method: 'GET',
      dataResponse: '.json',
      params: {
        apikey: apiKey,
        countryCode: 'CA',
        city: userInput
      }
    }).then((response) => {
      setInfo(response.data._embedded.events);
    }).catch((error) => {
      alert(`Something went wrong. Please try again in a bit!`)
    })
  };

  // Updates the state 
  const handleInput = (event) => {
    setUserInput(event.target.value);
  }

  // Creating a function that displays data on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    callIt();
    setUserInput("");
  }

  return (
    <div>
      <header>
        <div className="welcomeContainer wrapper">

          <div className="firstContain">
            <h1>Welcome to React-ive Events! </h1>
            <p>Checkout upcoming events in your city.</p>
          </div>  {/* End of div firstContain */}

          <div className="secondContain">
            <h2>Search here!</h2>
            <Form
              handleSubmit={handleSubmit}
              handleInput={handleInput}
              userInput={userInput}
            />
          </div>  {/* End of div secondContain */}

        </div>  {/* End of div welcomeContainer */}
      </header>

      <main>
        {/* Conditional rendering */}
        { 
          info.length === undefined
          ? <h3>No upcoming events in your area!</h3>
          : info.map((information) => {
            return (
              <Results
                name={information.name}
                id={information.id}
                images={information['images'][0]['url']}
                pleaseNote={information.pleaseNote}
                localDate={information.dates.start.localDate}
                localTime={information.dates.start.localTime}
              />
            )
          })
        }
      </main>

      <footer>
        <p>Created at Juno College</p>
      </footer>

    </div>
  )
};

export default App;
