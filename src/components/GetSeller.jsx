
import axios from "axios";
import { useState } from "react";

function GetSeller() {


    const [sellers, setSellers] = useState("");



    function handleClick() {


        axios.get("http://localhost:5000/sellers")
            .then(response => {
                setSellers(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displaySellers = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const seller of sellers) {

        //use a table or cards to include all of the data or else get rid of the button 

        displaySellers.push(

            
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-body'>

                            <div className='card-text'>

                                <p className='card-title '> {seller.title}</p>
                                <p> {seller.firstName}</p>
                                <p> {seller.surname}</p>
                                <p> {seller.tel}</p>
                                <p> {seller.email}</p>
                                <p> {seller.address}</p>

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

                <button onClick={handleClick}>Display all Sellers</button>
                    {displaySellers}
                </div>
            </div>
        </>
    );
}

export default GetSeller;