
import axios from "axios";
import { useState } from "react";

function GetProperties() {


    const [properties, setProperties] = useState("");



    function handleClick() {


        axios.get("http://localhost:5000/properties")
            .then(response => {
                setProperties(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displayProperties = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const property of properties) {

        //use a table or cards to include all of the data or else get rid of the button 

        displayProperties.push(
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> {property.address}</p>
                            <p> {property.offersintheregionof}</p>
                            <p> {property.typeofproperty}</p>
                            <p> {property.squarefootage}</p>
                            <p> {property.bedrooms}</p>
                            <p> {property.bathrooms}</p>
                            <p> {property.gardens}</p>
                            <p> {property.outbuildings}</p>
                            <p> {property.freehold}</p>
                            <p> {property.sellerid}</p>
                            <p> {property.uploadimages}</p>
                            <p> {property.propertystatus}</p>
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
                <button onClick={handleClick}>Display all Properties</button>
                    <p>{displayProperties}</p>
                </div>
            </div>
        </>
    );
}

export default GetProperties;