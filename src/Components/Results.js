// Results based on user's input 
const Results = (props) => {

   return (
      <section className="wrapper" key={props.id}>
         <h3>{props.name}</h3>

         <div className="fullInfo">
            <img src={props.images} alt=" poster for the event" />

            <div className="paraInfo">
               <p><strong>Please note:</strong> {props.pleaseNote}</p>
               <p><strong>Date:</strong> {props.localDate}</p>
               <p><strong>Time:</strong> {props.localTime}</p>
            </div>
         </div>
      </section>
   )
}

export default Results;