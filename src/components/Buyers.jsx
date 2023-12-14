import CreateBuyers from "./CreateBuyers";
import GetBuyer from "./GetBuyer";

function Buyers() {
    return ( 
<div className = "MainPages">
<h1><b>Jalal is the Place to Buy!</b></h1>
<br />
<h3><u>Create New Buyer:</u></h3>
<CreateBuyers/>
<GetBuyer/>
</div>
     );
}

export default Buyers;