import React from 'react'
import {Link} from "react-router-dom"
import '../main.css'


import logo from '../images/logo.svg'
import ham from '../images/ham.svg'
import exit from '../images/exit.svg'


const handleOpenMenu = () => {
  let nav = document.getElementById('nav');  
  nav.classList.toggle('hide-mobile');
}

const handleCloseMenu = () => {
  let nav = document.getElementById('nav');  
  nav.classList.add('hide-mobile');
}


const Header = () => {
    return (
      <div className="container">
      <div className="header">
      <Link to={`/`}><img src={logo} alt="logo" /></Link>
          <nav>
              <div className="hide-desktop">
                  <img src={ham} alt="toggle menu" className="menu" id="menu" onClick={handleOpenMenu}/>
              </div>
  
              <ul className="show-desktop hide-mobile" id="nav">
                  <li id="exit" className="exit-btn hide-desktop"><img src={exit} alt="exit menu" onClick={handleCloseMenu} /></li>
                  <li><Link to={`/`}>HOME</Link></li>
                  <li><Link to={`/contact`}>CONTACT</Link></li>
                  <li><Link to={`/about`}>ABOUT</Link></li>
                  <li><Link to={`/demo`}>DEMO</Link></li>
              </ul>
          </nav>
      </div>
      </div> 
    );
  };
  
  export default Header;