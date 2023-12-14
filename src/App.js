import logo from "./components/image-20231114-143925-5507bda3.jpeg";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Buyers from './components/Buyers';
import Sellers from './components/Sellers';
import Listings from './components/Listings';
import Bookings from './components/Bookings/Bookings';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBookings from './components/Bookings/CreateBookings';


function App() {
  return (
<div>
    <div className="App">
    
      <BrowserRouter>
      
        
      <header className="App-header">
        <nav>
          <div>
          
          

          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className= "App-nav" ><Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to='/'> HOME </Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to='/buyers'> BUYERS </Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to='/sellers'> SELLERS </Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"to='/properties'> PROPERTIES </Link>
          <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"to='/bookings'> BOOKINGS </Link>
          </div>

        </nav> 

        </header>
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/properties' element={<Listings />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/properties/bookings/:id' element={<CreateBookings />} />




        </Routes>





      </BrowserRouter>
      
    </div>
    </div>
  );
}

export default App;
