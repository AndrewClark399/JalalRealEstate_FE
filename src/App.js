import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Buyers from './components/Buyers';
import Sellers from './components/Sellers';
import Listings from './components/Listings';
import Bookings from './components/Bookings';


function App() {
  return (
<BrowserRouter>

<nav>
<Link to = '/'> HOME </Link>
<Link to = '/buyers'> BUYERS </Link>
<Link to = '/sellers'> SELLERS </Link>
<Link to = '/listings'> LISTINGS </Link>
<Link to = '/bookings'> BOOKINGS </Link>


</nav>

<Routes>


<Route path= '/' element = {<Home/>}/>
<Route path= '/buyers' element = {<Buyers/>}/>
<Route path= '/sellers' element = {<Sellers/>}/>
<Route path= '/listings' element = {<Listings/>}/>
<Route path= '/bookings' element = {<Bookings/>}/>




</Routes>





</BrowserRouter>

  );
}

export default App;
