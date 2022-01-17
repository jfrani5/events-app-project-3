

const Header = (props) => {

   return (
      <header>
         <nav>
            <p>React-ive Events</p>
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