import React, { useState } from 'react'; // Import React and useState
import './NavBar.css';
import logo from '../../ASSETS/logo.png';
import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = () => {
  const [cartquantity, setcartquantity] = useState(0); // Use destructuring assignment

  return (
    <nav>
      <div className="sec1">
        <img src={logo} alt="logo" className='logo' />
        <div className="searchBar">
          <input type="text" placeholder="search for products" className="search" />
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clip-rule="evenodd" />
</svg>

          </button>
        </div>
        <div className="right">
          <div className="cart">
            <span className="qty">{cartquantity}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

          </div>
          <div className="user"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</div>
        </div>
      </div>
      <div className="sec2">
      <Dropdown className='drop'>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    <a>About us</a>
    <a>Contact us</a>
      </div>
    </nav>
  );
};

export default Navbar;
