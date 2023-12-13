
import axios from "axios";
import { useState } from "react";

function GetBuyer() {


    const [buyers, setBuyers] = useState("");



    function handleClick() {


        axios.get("http://localhost:5000/buyers")
            .then(response => {
                setBuyers(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displayBuyers = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const buyer of buyers) {

        //use a table or cards to include all of the data or else get rid of the button 

        displayBuyers.push(
            <div className='col-4'  key = {buyer.id} >
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> <b>Title:</b> {buyer.title}</p>
                            <p><b>First Name:</b> {buyer.firstName}</p>
                            <p><b>Surname:</b> {buyer.surname}</p>
                            <p><b>Tel:</b> {buyer.tel}</p>
                            <p><b>Email:</b> {buyer.email}</p>
                            <p><b>Address:</b> {buyer.address}</p>

                        </div>
                    </div>
                </div>

            </div>

        )

    }


    return (
        <>
        <br />
            <button onClick={handleClick}>Display all Buyers</button>
            <div  className='container'>
                <div className='row'>
                
                    {displayBuyers}
                </div>
            </div>
        </>
    );
}

export default GetBuyer;