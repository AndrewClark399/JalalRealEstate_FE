import CreateProperties from "./Createproperties";
import GetProperties from "./DisplayProperties";
import TestIfStatements from "./TestIfStatements";
import StatusFilter from "./StatusFilter";


function Listings() {
    return ( 
<> 
<h1>A listing is a property (no smirking)!</h1>
<CreateProperties/>
<br />
<GetProperties/>
<br />
 {/* <StatusFilter/> */}
<br/>

</>
     );
}

export default Listings;