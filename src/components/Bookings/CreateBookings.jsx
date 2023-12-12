import {useState}from "react"; 
import axios from "axios";
function CreateBookings() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [property, setProperty] = useState("");
 
  return (  
    <form onSubmit={e => {e.preventDefault();
    axios.post("https://localhost:5000/bookings",{date,time,property})
    .then(response => {setDate(""); setTime(""); setProperty("");})
    .catch(err => console.log (err))
  }}
 >
<label htmlFor="bookingDate"className="form-label">Date</label>
<input id="bookingDate"
name="date"
className="form-control"
type="date"
value={date}
onChange={e => setDate(e.target.value)}/>

<label htmlFor="bookingTime"className="form-label">Time</label>
<input id="bookingTime"
name="time"
className="form-control"
type="time"
value={time}
onChange={e => setTime(e.target.value)}/>

<label htmlFor="bookingProperty"className="form-label">Property</label>
<input id="bookingProperty"
name="property"
className="form-control"
type="text"
value={property}
onChange={e => setProperty(e.target.value)}/>
<>
 <button className="btn btn-danger" type="submit">Confirm Booking</button>
 </>
  </form>) 

}

export default CreateBookings;