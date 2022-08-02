import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
    <>
            <p><Link to="/">Home</Link></p>
            <p><Link to="over">Over</Link></p>
            <p><Link to="prijzen">Prijzen</Link></p>
            <p><Link to="bestellen">Bestellen</Link></p>
            <p><Link to="contact">Contact</Link></p>
    </>
  )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="palila__navbar navbar-light navbar-expand-lg fixed-top">
        <div className="palila__navbar-links">
            <div className="palila__navbar-links_logo">
                <h1>Logo</h1>
            </div>
            <div className="palila__navbar-links_container">
                <Menu/>
            </div>
        </div>
        <div className="palila__navbar-signIn">
            <p>Log in</p>
            <button type="button">Registeren</button>
        </div>
        <div className="palila__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="palila__navbar-menu_container scale-up-center">
          <div className="palila__navbar-menu_container-links">
          <Menu />
          <div className="palila__navbar-menu_container-links-signIn">
        <p>Log in</p>
        <button type="button">Registreren</button>
      </div>
      </div>
      </div>
   
  )}
  </div>
  </div>

  )
}

export default Navbar