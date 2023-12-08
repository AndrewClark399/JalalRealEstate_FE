import axios from "axios";
import { useState } from "react";


function CreateBuyers() {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    

    return (<form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:5000/buyers", { title, firstName, surname, tel, email, address })
            .then(response => {
                console.log(response);
                setTitle("");
                setFirstName("");
                setSurname("");
                setTel("");
                setEmail("");
                setAddress("");
            })
            .catch(err => console.error(err))
    }}>
        <label htmlFor="buyerTitle" className="form-label">Title</label>
        <input
            id="buyerTitle"
            name="title"
            className="form-control"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
        />
        <label htmlFor="buyerFirstName" className="form-label">First Name</label>
        <input
            id="buyerFirstName"
            name="firstName"
            className="form-control"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
        />
        <label htmlFor="buyerSurname" className="form-label">Surname</label>
        <input
            id="buyerSurname"
            name="Surname"
            className="form-control"
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
        />
        <label htmlFor="buyerTel" className="form-label">Tel</label>
        <input
            id="buyerTel"
            name="tel"
            className="form-control"
            type="number"
            value={tel}
            onChange={e => setTel(e.target.value)}
            required
        />
        <label htmlFor="buyerEmail" className="form-label">E-mail</label>
        <input
            id="buyerEmail"
            name="email"
            className="form-control"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
        />
        <label htmlFor="buyerAddress" className="form-label">Address</label>
        <input
            id="buyerAddress"
            name="address"
            className="form-control"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
        />
        
        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form>);
}

export default CreateBuyers;