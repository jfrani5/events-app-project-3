// Components


// Modules
import axios from 'axios';
import {useState} from 'react';

// Styling
import './App.css';


function App() {


  const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

  const [info, setInfo] = useState([]);
  const [userInput, setUserInput] = useState("");

  const effect = () => {
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

      console.log(response.data._embedded.events);
      setInfo(response.data._embedded.events);
    })
  };

  const handleInput = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    effect();
    setUserInput("");
  }


  return (
    <div>
      <header>
        <div className="welcomeContainer wrapper">

          <div className="firstContain">
            <h1>Welcome to React-ive Events! </h1>
            <p>Checkout upcoming events in your city.</p>
          </div>

          <div className="secondContain">
            <h2>Search here!</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="searchHere"></label>
              <input type="text" id="searchHere" placeholder="Name of city..." onChange={handleInput} value={userInput} />
              <button>Submit</button>
            </form>
          </div>

        </div>
      </header>

      <main>
        {
          info.map((information) => {
            return (
              <section className="wrapper" key={information.id}>
                <h3>{information.name}</h3>

                <div className="fullInfo">
                  <img src={information.images[0].url} alt=" poster for the event" />

                  <div className="paraInfo">
                    <p><strong>Please note:</strong> {information.pleaseNote}</p>
                    <p><strong>Date:</strong> {information.dates.start.localDate}</p>
                    <p><strong>Time:</strong> {information.dates.start.localTime}</p>
                  </div>
                </div>
              </section>
            )
          })
        }
      </main>

      <div className="spaceBetween"></div>

      <footer>
        <p>Created at Juno College</p>
      </footer>


    </div>
  )
};

export default App;