import axios from "axios";
import { useState, useEffect } from "react";

function GetBookings() {
    const [bookings, setBookings] = useState("");
    useEffect(() => {handleClick()
        
    }, []);
    function handleClick(){
        axios.get("http://localhost:5000/bookings")
            .then(response => { setBookings(response.data) }).catch(err => console.error(err))
    };

    const displayBookings = [];
    for (const booking of bookings) {
        displayBookings.push(<tr key={booking.id}>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>{booking.property}</td>
        </tr>)
    }

    return (
        <div>

            <table className ="table table-striped">
            <thead><tr >
            <td>Booking Date:</td>
            <td>Time: </td>
            <td>Property id:</td>
            </tr>
            </thead>
            <tbody>
                {displayBookings}
                </tbody>
            </table>
        </div>
    );
}

export default GetBookings;