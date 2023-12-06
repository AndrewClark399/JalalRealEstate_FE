import axios from "axios";
import { useState } from "react";


function CreateProperties() {
    const [address, setAddress] = useState("");
    const [offersinregionof, setOffersInRegionOf] = useState("");
    const [typeofproperty, setTypeOfProperty] = useState("");
    const [squarefootage, setSquareFootage] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [garden, setGarden] = useState("");
    const [outbuildings, setOutbuildings] = useState("");
    const [freehold, setFreehold] = useState("");
    const [sellerid, setSellerId] = useState("");
    const [uploadimages, setUploadImages] = useState("");
    const [propertystatus, setPropertyStatus] = useState("")


    return (<form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:5000/properties", { address, offersinregionof, typeofproperty, squarefootage, bedrooms, bathrooms, garden, outbuildings, freehold, sellerid, uploadimages, propertystatus })
            .then(response => {
                console.log(response);
                setAddress("");
                setOffersInRegionOf("");
                setTypeOfProperty("");
                setSquareFootage("");
                setBedrooms("");
                setBathrooms("");
                setGarden("");
                setOutbuildings("");
                setFreehold("");
                setSellerId("");
                setUploadImages("");
                setPropertyStatus("")
            })
            .catch(err => console.error(err))
    }}>
        <label htmlFor="propertyAddress" className="form-label">Address</label>
        <input
            id="propertyAddress"
            name="Address"
            className="form-control"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
        />
        <label htmlFor="PropertyOffersInRegionOf" className="form-label">Offers in region of £</label>
        <input
            id="PropertiesOffersInRegionOf"
            name="OffersInRegionOf"
            className="form-control"
            type="number"
            value={offersinregionof}
            onChange={e => setOffersInRegionOf(e.target.value)}
            required
        />
        <label htmlFor="PropertyTypeOfProperty" className="form-label">Type of property</label>
        <input
            id="propertyTypeOfProperty"
            name="TypeOfProperty"
            className="form-control"
            type="text"
            value={typeofproperty}
            onChange={e => setTypeOfProperty(e.target.value)}
            required
        />
        <label htmlFor="PropertiesSquareFootage" className="form-label">Square Footage</label>
        <input
            id="propertySquareFootage"
            name="SquareFootage"
            className="form-control"
            type="number"
            value={squarefootage}
            onChange={e => setSquareFootage(e.target.value)}
            required
        />
        <label htmlFor="PropertyBedrooms" className="form-label">Number of bedrooms</label>
        <input
            id="propertyBedrooms"
            name="Bedrooms"
            className="form-control"
            type="number"
            value={bedrooms}
            onChange={e => setBedrooms(e.target.value)}
            required
        />
        <label htmlFor="PropertyBathrooms" className="form-label">Number of Bathroom</label>
        <input
            id="propertyBathrooms"
            name="Bathrooms"
            className="form-control"
            type="number"
            value={bathrooms}
            onChange={e => setBathrooms(e.target.value)}
            required
        />
        <label htmlFor="PropertyGarden" className="form-label">Garden Description</label>
        <input
            id="propertyGarden"
            name="Garden"
            className="form-control"
            type="text"
            value={garden}
            onChange={e => setGarden(e.target.value)}
            required
        />
        <label htmlFor="PropertyOutbuildings" className="form-label">Outbuilding Description</label>
        <input
            id="propertyOutbuildings"
            name="outbuildings"
            className="form-control"
            type="text"
            value={outbuildings}
            onChange={e => setOutbuildings(e.target.value)}
            required
        />
        <label htmlFor="PropertyFreehold" className="form-label">Freehold or Leasehold ?</label>
        <input
            id="propertyFreehold"
            name="freehold"
            className="form-control"
            type="text"
            value={freehold}
            onChange={e => setFreehold(e.target.value)}
            required
        />
        <label htmlFor="PropertySellerId" className="form-label">Seller ID</label>
        <input
            id="propertySellerId"
            name="sellerid"
            className="form-control"
            type="number"
            value={sellerid}
            onChange={e => setSellerId(e.target.value)}
            required
        />
        <label htmlFor="PropertyUploadImages" className="form-label">Upload images</label>
        <input
            id="propertyUploadImages"
            name="uploadimages"
            className="form-control"
            type="text"
            value={uploadimages}
            onChange={e => setUploadImages(e.target.value)}

        />

        <label htmlFor="propertystatus" className="form-label">Property Status</label>
        <select>
            <option value="">For Sale</option>
            <option value="">Withdrawn</option>
            <option value="">Sold</option>

        </select>

        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form>);
}

export default CreateProperties; 