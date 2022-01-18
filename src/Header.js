import axios from 'axios';

import { useState, useEffect } from 'react';

const Header = (props) => {


   const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

   const [events, setEvents] = useState([]);
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
         setEvents(response.data._embedded.events);
      })
   }, []);

   const handleInput = (event) => {
      setUserInput(event.target.value);
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
                  <form>
                     <label htmlFor=""></label>
                     <input type="text" onChange={handleInput} />
                     <button>Submit</button>
                  </form>
               </div>
            </div>
         </header>

         <main className="wrapper">
            <h3>{events[0].name}</h3>
            <div className="fullInfo">
               <img src={events[0].images[0].url} alt="" />
               <div className="paraInfo">
                  <p>{events[0].pleaseNote}</p>
               </div>
            </div>
         </main>
         
      </div>
   )
}




export default Header;


// const Header = (props) => {


//    const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

//    const [events, setEvents] = useState([]);
//    const [userInput, setUserInput] = useState("");
//    const [searchItem, setSearchItem] = useState("");


//    useEffect(() => {
//       axios({
//          url: 'https://app.ticketmaster.com/discovery/v2/events',
//          method: 'GET',
//          dataResponse: '.json',
//          params: {
//             apikey: apiKey,
//             countryCode: 'CA',
//             keyword: searchItem
//          }
//       }).then((response) => {
//          console.log(response.data._embedded.events);
//          setEvents(response.data._embedded.events);
//       })
//    }, []);

//    const handleInput = (event) => {
//       setUserInput(event.target.value);
//    }

//    return (
//       <div>
//          <header>
//             <nav>
//                <p className="wrapper">React-ive Events</p>
//             </nav>

//             <div className="welcomeContainer wrapper">
//                <div>
//                   <h1>Welcome to React-ive Events! </h1>
//                   <p>Checkout upcoming events in your city.</p>
//                </div>

//                <div>
//                   <h2>Search for a city here</h2>
//                   <form>
//                      <label htmlFor=""></label>
//                      <input type="text" onChange={handleInput} />
//                      <button>Submit</button>
//                   </form>
//                </div>
//             </div>
//          </header>

//          <main className="wrapper">
//             <h3>{events[0].name}</h3>
//             <div className="fullInfo">
//                <img src={events[0].images[0].url} alt="" />
//                <div className="paraInfo">
//                   <p>{events[0].pleaseNote}</p>
//                </div>
//             </div>
//          </main>

//       </div>
//    )
// }
