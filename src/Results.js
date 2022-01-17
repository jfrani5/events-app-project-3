import axios from 'axios';

import { useState, useEffect } from 'react';


const Results = (results) => {

   const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

   const [events, setEvents] = useState([]);
   const [userInput, setUserInput] = useState("");
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
      axios({
         url: 'https://app.ticketmaster.com/discovery/v2/events',
         method: 'GET',
         dataResponse: '.json',
         params: {
            apikey: apiKey,
            countryCode: 'CA',
            keyword: searchTerm
         }
      }).then((response) => {
         console.log(response.data._embedded.events);
         setEvents(response.data._embedded.events);
      })
   }, []);

   // if(events) {
   //    return (
   //       <div>
   //          <h3>{events[0].name}</h3>
   //       </div>
   //    )
   // }

   return (
      <main>
         <div>
            <img src="" alt="" />
         </div>

         <div>
            <h3>{events[0].name}</h3>
            <p>{events[0].pleaseNote}</p>
         </div>
      </main>
   )
}

export default Results;