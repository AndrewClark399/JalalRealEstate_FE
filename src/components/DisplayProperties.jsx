
import axios from "axios";
import { useState, useEffect } from "react";


function GetProperties() {

    const [search, setSearch] = useState("");
    const [properties, setProperties] = useState("");
    const [searchBedrooms, setSearchBedrooms] = useState(0);
    const [searchOffersInRegionOf, setSearchOffersInRegionOf] = useState(0);
    const [searchBathrooms, setSearchBathrooms] = useState(0);
    const [searchGardens, setSearchGardens] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [propertystatus, setPropertyStatus] = useState("");





    useEffect(() => {
        fetchProperties()
    }, []);



    function fetchProperties() {


        axios.get("http://localhost:5000/properties")
            .then(response => {
                setProperties(response.data)
                console.log(response);
            })
            .catch(err => console.error(err))

    };

    



    function handleStatus(event, id) {
        

        axios.patch("http://localhost:5000/properties/" + id, { propertystatus:event.target.value })
            .then(response => {
                fetchProperties()
                console.log(response);
            })
            .catch(err => console.error(err))

    };


    const displayProperties = [];
    //the below is to convert the json data into html so that it can be rendered on the page

    for (const property of properties) {

        if (search && !property.address.includes(search)) continue;
        if (searchBedrooms && property.bedrooms < parseInt(searchBedrooms, 10)) continue;
        if (searchOffersInRegionOf && property.offersinregionof >= parseInt(searchOffersInRegionOf, 10)) continue;
        if (searchBathrooms && property.bathrooms < parseInt(searchBathrooms, 10)) continue;
        if (searchGardens && property.garden != searchGardens) continue;
        if (searchStatus && property.propertystatus != searchStatus) continue;


        //use a table or cards to include all of the data or else get rid of the button 

        displayProperties.push(
            <div className='col-4'>
                <div className='card'>
                    <div className='card-body'>

                        <div className='card-text'>

                            <p className='card-title '> <b>Address:</b> {property.address}</p>
                            <p> <b>Offers in the Region of: £</b> {property.offersinregionof}</p>
                            <p> <b>Type of Property:</b> {property.typeofproperty}</p>
                            <p> <b>Square Footage:</b> {property.squarefootage}</p>
                            <p> <b>No. of Bedrooms:</b> {property.bedrooms}</p>
                            <p> <b>No. of Bathrooms:</b>{property.bathrooms}</p>
                            <p> <b>Gardens?:</b> {property.gardens}</p>
                            <p> <b>Outbuildings?:</b> {property.outbuildings}</p>
                            <p> <b>Freehold or Leasehold:</b> {property.freehold}</p>
                            <p> <b>Seller ID:</b> {property.sellerid}</p>
                            <p> {property.uploadimages}</p>

                            <label >Property Status</label>
                            <select value={property.propertystatus} onChange={e => handleStatus(e, property.id)} name="propertystatus" >
                                <option value="" >Status</option>
                                <option value="For Sale">For Sale</option>
                                <option value="Sold">Sold</option>
                                <option value="Withdrawn">Withdrawn</option>

                            </select>



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

                    <h1>Search by property address</h1>
                    <input value={search} onChange={e => setSearch(e.target.value)} />
                    <h1>Search for minimum number of bedrooms required</h1>
                    {searchBedrooms} <input type="range" min="1" max="55" value={searchBedrooms} onChange={e => setSearchBedrooms(e.target.value)} />
                    <h1>Search for maximum price</h1>
                    {searchOffersInRegionOf} <input type="range" min="0" max="3000000" value={searchOffersInRegionOf} onChange={e => setSearchOffersInRegionOf(e.target.value)} />
                    <h2>Search for bathrooms if any</h2>
                    {searchBathrooms} <input type="range" min="1" max="47" value={searchBathrooms} onChange={e => setSearchBathrooms(e.target.value)} />
                    <h1>Garden?</h1>
                    <div>
                        Yes <input checked={searchGardens === "true"} type="radio" value={"true"} onChange={e => setSearchGardens("true")} />
                        No<input checked={searchGardens === "false"} type="radio" value={"false"} onChange={e => setSearchGardens("false")} />
                    </div>

                    <div>
                        For Sale <input checked={searchStatus === "For Sale"} type="radio" value={"For Sale"} onChange={e => setSearchStatus("For Sale")} />
                        Sold <input checked={searchStatus === "Sold"} type="radio" value={"Sold"} onChange={e => setSearchStatus("Sold")} />
                        Withdrawn <input checked={searchStatus === "Withdrawn"} type="radio" value={"Withdrawn"} onChange={e => setSearchStatus("Withdrawn")} />
                    </div>

                    <div>
                        {displayProperties}

                    </div>
                    <button onChange={e => setPropertyStatus(e.target.value)}>Refresh</button>
                </div>
            </div>
        </>
    );
}

export default GetProperties;

//if ((search==="" && searchBedrooms === 0) || (property.address.includes(search) && property.bedrooms >= searchBedrooms)) {
// <input value = {search} onChange = {e => setSearch(e.target.value)}/>
// <input type="range" min = "1" max = "10" value = {searchBedrooms} onChange = {e => setSearchBedrooms(e.target.value)}/>