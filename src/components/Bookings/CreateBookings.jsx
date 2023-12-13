import {useState, useEffect}from "react"; 
import axios from "axios";
 import {useParams} from "react-router-dom";

function CreateBookings() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
   const params = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/properties/" +params.id) 
    .then(res => {
       
    }).catch(err => console.error(err));
}, []);
 
  return (  
    <form onSubmit={e => {e.preventDefault();
    axios.post("http://localhost:5000/bookings",{date,time,property:params.id})
    .then(res => {setDate(""); setTime("");})
    .catch(err => console.log (err))
  }}
 >
<label htmlFor="bookingDate"className="form-label">Date</label>
<input id="bookingsDate"
name="date"
className="form-control"
type="date"
value={date}
onChange={e => setDate(e.target.value)}/>

<label htmlFor="bookingTime"className="form-label">Time</label>
<input id="bookingsTime"
name="time"
className="form-control"
type="time"
value={time}
min = "09:00"
max = "16:00"
step = "3600"
onChange={e => setTime(e.target.value)}/>


<br />
<>
 <button className="btn btn-danger" type="submit">Confirm Booking</button>
 </>
  </form>) 

}

export default CreateBookings;