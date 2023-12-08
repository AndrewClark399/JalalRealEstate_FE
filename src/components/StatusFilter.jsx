import axios from "axios";
import { useState, useEffect } from "react";


function StatusFilter() {

    const [properties, setProperties] = useState("");
    const [searchStatus, setSearchStatus] = useState("");




    useEffect(() => {
        handleClick()
    }, []);

    function handleClick() {


        axios.get("http://localhost:5000/properties")
            .then(response => {
                setProperties(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displayProperties2 = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const property of properties) {


        if (searchStatus !== "" && property.propertystatus != searchStatus) continue;


        //use a table or cards to include all of the data or else get rid of the button 

        displayProperties2.push(
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> {property.address}</p>
                            <p> {property.offersinregionof}</p>
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


                    <h1>Property status</h1>
                    <div>
                        For Sale <input checked={searchStatus === "For Sale"} type="radio" value={"For Sale"} onChange={e => setSearchStatus("For Sale")} />
                        Sold <input checked={searchStatus === "Sold"} type="radio" value={"Sold"} onChange={e => setSearchStatus("Sold")} />
                        Withdrawn <input checked={searchStatus === "Withdrawn"} type="radio" value={"Withdrawn"} onChange={e => setSearchStatus("Withdrawn")} />
                    </div>

                    <div>
                        {displayProperties2}
                    </div>
                </div>
            </div>
        </>
    );
}

export default StatusFilter;

//if ((search==="" && searchBedrooms === 0) || (property.address.includes(search) && property.bedrooms >= searchBedrooms)) {
// <input value = {search} onChange = {e => setSearch(e.target.value)}/>
// <input type="range" min = "1" max = "10" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>