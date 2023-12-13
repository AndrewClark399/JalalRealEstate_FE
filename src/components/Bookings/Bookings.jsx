import CreateBookings from "./CreateBookings";
import GetBookings from "./GetBookings";

function Bookings () {
    return ( 
    <div className = "MainPages">
    <h1>Jalal is the place to make bookings to see all the best properties!</h1> 
    
    <br />
    <h5>Current Bookings:</h5>
    <GetBookings/>
    </div>
    );

}

export default Bookings ;