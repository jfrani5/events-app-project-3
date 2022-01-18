// import Header from "./Header.js";
// import Results from "./Results.js";
import {useState, useEffect} from 'react';

import axios from 'axios';

import './App.css';

function App() {

 
  const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

  const [info, setInfo] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchItem, setSearchItem] = useState("");


  useEffect(() => {
    axios({
      url: 'https://app.ticketmaster.com/discovery/v2/events',
      method: 'GET',
      dataResponse: '.json',
      params: {
        apikey: apiKey,
        countryCode: 'CA',
        keyword: searchItem
      }
    }).then((response) => {
      console.log(response.data._embedded.events);
      setInfo(response.data._embedded.events);
    })
  }, [searchItem]);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchItem(userInput);
  }

  return (
    <div>
      <header>
        <nav>
          <p className="wrapper">React-ive Events</p>
        </nav>

        <div className="welcomeContainer wrapper">
          <div>
            <h1>Welcome to React-ive Events! </h1>
            <p>Checkout upcoming events in your city.</p>
          </div>

          <div>
            <h2>Search for a city here</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="searchHere"></label>
              <input type="text" id="searchHere" onChange={handleInput} value={userInput} />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </header>

      {info.map((information) => {
        return (
          <main className="wrapper" key={information.id}>

            <h3>{information.name}</h3>
            
            <div className="fullInfo">

              {/* <img src={[0].images[0].url} alt="" /> */}

              <div className="paraInfo">
                <p>{information.pleaseNote}</p>
              </div>

            </div>
          
          </main>
        )
      })}


    </div>
  )
};

export default App;



      // <main className="wrapper">
      //   <h3>{events[0].name}</h3>
      //   <div className="fullInfo">
      //     <img src={events[0].images[0].url} alt="" />
      //     <div className="paraInfo">
      //       <p>{events[0].pleaseNote}</p>
      //     </div>
      //   </div>
      // </main>
