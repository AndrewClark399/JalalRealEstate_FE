import CreateProperties from "./Createproperties";
import GetProperties from "./DisplayProperties";
import TestIfStatements from "./TestIfStatements";



function Listings() {
    return ( 
<div className = "MainPages"> 
<h1><b>Our Properties are our Passion!</b></h1>

<h1><b></b></h1>
<br />
<h3><u>Create New Property:</u></h3>
<CreateProperties/>
<br />
<GetProperties/>
<br />

<br/>

</div>
     );
}

export default Listings;