import CreateSellers from './CreateSellers';
import GetSeller from './GetSeller';


function Sellers() {
    return ( 
<div className = "MainPages">
<h1><b>Jalal is the Place to Sell!</b></h1>
<br />
<h3><u>Create New Seller:</u></h3>
<CreateSellers/>

<GetSeller/>
</div>
     );
}

export default Sellers;