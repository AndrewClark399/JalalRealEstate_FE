import axios from "axios";
import { useState } from "react";



function CreateSellers() {
    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


    return (<fieldset> <form className = "form" onSubmit={e => {
        e.preventDefault();

        axios.get("http://localhost:5000/sellers").then(response => {
            const existingSellers = response.data;
            const exists = existingSellers.some(seller => { return seller.firstName === firstName && seller.surname === surname; });
            if (!exists) {



                axios.post("http://localhost:5000/sellers", { title, firstName, surname, tel, email, address })
                    .then(response => {
                        console.log(response);
                        setTitle("");
                        setFirstName("");
                        setSurname("");
                        setTel("");
                        setEmail("");
                        setAddress("");
                    })
                    .catch(err => console.error(err));
            } else {
                console.log("Seller with the same name already exists");
                alert("Seller with the same name already exists")
            } 
        })     .catch(err => console.error(err));


        }}>
        <label htmlFor="sellersTitle" className="form-label">Title</label>
        <input
            id="sellersTitle"
            name="title"
            className="form-control"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
        />
        <label htmlFor="sellersFirstName" className="form-label">First Name</label>
        <input
            id="sellersFirstName"
            name="firstName"
            className="form-control"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
        />
        <label htmlFor="sellersSurname" className="form-label">Surname</label>
        <input
            id="sellersSurname"
            name="Surname"
            className="form-control"
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
        />
        <label htmlFor="sellersTel" className="form-label">Tel</label>
        <input
            id="sellersTel"
            name="tel"
            className="form-control"
            type="number"
            value={tel}
            onChange={e => setTel(e.target.value)}
            required
        />
        <label htmlFor="sellersEmail" className="form-label">E-mail</label>
        <input
            id="sellersEmail"
            name="email"
            className="form-control"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
        />
        <label htmlFor="sellersAddress" className="form-label">Address</label>
        <input
            id="sellersAddress"
            name="address"
            className="form-control"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
        />
        <br />
        

        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form> </fieldset>); 
}

        export default CreateSellers; 