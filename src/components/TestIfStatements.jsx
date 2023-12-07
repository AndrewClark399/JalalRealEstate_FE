import axios from "axios";
import { useState, useEffect } from "react";


function GetProperties() {

    
    const [properties, setProperties] = useState("");
    const [search, setSearch] = useState("");
    const [searchBathrooms, setSearchBathrooms] = useState("0");
    const [searchBedrooms, setSearchBedrooms] = useState("0");

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


    const displayProperties = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const property of properties) {
        if (search && !property.address.includes(search)) continue;
        // use < to filter out a minimum value of the data, this will not render and skip across to the next input
        if (searchBathrooms && property.bathrooms < parseInt(searchBathrooms,10)) continue;
        if (searchBedrooms && property.bedrooms < parseInt(searchBedrooms,10)) continue;

        // if the search box is empty and the bedrooms slider is set at 0,  or  the entry in included in the address and the nuber of bedrooms is above the slider value.

        //if ((search==="" && searchBedrooms === 0) || (property.address.includes(search) && property.bedrooms >= searchBedrooms)) {
   // <input value = {search} onChange = {e => setSearch(e.target.value)}/>
   // <input type="range" min = "1" max = "10" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>   pasrInt converts the value to a number
            
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

//if ((search==="" && searchBedrooms === 0) || (property.address.includes(search) && property.bedrooms >= searchBedrooms)) {
   // <input value = {search} onChange = {e => setSearch(e.target.value)}/>
   // <input type="range" min = "1" max = "10" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>

    return (
        <>
            <div className='container'>
                <div className='row'>
                

                <input value = {search} onChange = {e => setSearch(e.target.value)}/>
               {searchBathrooms} <input type="range" min = "1" max = "47" value = {searchBathrooms} onChange = {e => setSearchBathrooms(e.target.value)}/>
               {searchBedrooms} <input type="range" min = "1" max = "55" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>
                    <div>{displayProperties}</div>
                
                </div>
            </div>
        </>
    );
}

export default GetProperties;