
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
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> {buyer.title}</p>
                            <p> {buyer.firstName}</p>
                            <p> {buyer.surname}</p>
                            <p> {buyer.tel}</p>
                            <p> {buyer.email}</p>
                            <p> {buyer.address}</p>

                        </div>
                    </div>
                </div>

            </div>

        )

    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                <button onClick={handleClick}>Display all Buyers</button>
                    <p>{displayBuyers}</p>
                </div>
            </div>
        </>
    );
}

export default GetBuyer;