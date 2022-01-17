


const Header = (props) => {

   // const apiKey = '97aqz9S8aFFx3efA5wKGbdqdEiEI4qtT'

   // const [events, setEvents] = useState([]);
   // const [userInput, setUserInput] = useState("");
   // const [searchTerm, setSearchTerm] = useState("");

   // useEffect(() => {
   //    axios({
   //       url: 'https://app.ticketmaster.com/discovery/v2/events',
   //       method: 'GET',
   //       dataResponse: '.json',
   //       params: {
   //          apikey: apiKey,
   //          keyword: searchTerm,
   //          countryCode: 'CA'
   //       }
   //    }).then((response) => {
   //       console.log(response.data);
   //       setEvents(response.data);
   //    })
   // }, []);





   return (
      <header className="wrapper">
         <nav>
            <p>Home or somethin about nav here</p>
         </nav>

         <div>
            <div>
               <h1>Welcome to React-ive Events! </h1>
               <p>Checkout upcoming events in your city.</p>
            </div>

            <div>
               <h2>Search for a city here</h2>
               <form>
                  <label htmlFor=""></label>
                  <input type="text" />
                  <button>Submit</button>
               </form>
            </div>
         </div>
      </header>
   )
}

export default Header;