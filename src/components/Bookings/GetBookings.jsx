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
            <td><button type="button" onClick={() => {
                        axios.delete("http://localhost:5000/bookings/" + booking.id)
                            .then(res => {


                                axios.get("http://localhost:5000/bookings")
                                    .then(response => {
                                        setBookings(response.data)
                                        console.log(response);
                                    })
                                    .catch(err => console.error(err))
                        
                            })
                            .catch(err => console.error(err));
                    }}>Cancel</button></td>
        </tr>)
    }

    return (
        <div>

            <table className ="table table-striped">
            <thead><tr >
            <td><b>Booking Date:</b></td>
            <td><b>Time: </b></td>
            <td><b>Property id:</b></td>
            <td><b>Cancel Booking</b></td>
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