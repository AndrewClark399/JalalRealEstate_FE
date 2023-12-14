import CreateBookings from "./CreateBookings";
import GetBookings from "./GetBookings";

function Bookings () {
    return ( 
    <div className = "MainPages">
    <h1>Jalal is the place to make bookings to see all the best properties!</h1> 
    
    <br />
    <h3><u>Current Bookings:</u></h3>
    <GetBookings/>
    </div>
    );

}

export default Bookings ;