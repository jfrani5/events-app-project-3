// import axios from 'axios';

// import { useState, useEffect } from 'react';


// const Results = (results) => {

//    const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

//    const [events, setEvents] = useState([]);
//    const [userInput, setUserInput] = useState("");
   

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

   

//    // return (
//    //    <main>
//    //       <h3>{events[0].name}</h3>
//    //       <div className="fullInfo">
//    //          <div>
//    //             <img src={events[0].images[0].url} alt="" />
//    //          </div>
//    //          <div>
//    //             <p>{events[0].pleaseNote}</p>
//    //          </div>
//    //       </div>
//    //    </main>
//    // )
// }

// export default Results;