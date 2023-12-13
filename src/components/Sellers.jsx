import CreateSellers from './CreateSellers';
import GetSeller from './GetSeller';

function Sellers() {
    return ( 
<div className = "MainPages">
<h1>Jalal is the place to sell!</h1>

<CreateSellers/>
<GetSeller/>
</div>
     );
}

export default Sellers;