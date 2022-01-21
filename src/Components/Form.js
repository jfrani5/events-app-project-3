// Form variable
const Form = (props) => {
   
   return (
      <form onSubmit={props.handleSubmit}>
         <label htmlFor="searchHere"></label>
         <input type="text" id="searchHere" placeholder="Name of city..." onChange={props.handleInput} value={props.userInput} />
         <button>Submit</button>
      </form>
   )
}

export default Form;