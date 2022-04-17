import React from 'react'
import './Navbar.scss'
import logo from '../images/logo-navbar.svg'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'><img src={logo} alt="logo" /></div>
        <ul className='navbar__links'>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <div><button className='navbar__contact-btn'>CONTACT</button></div>
        </ul>
      </nav>
  )
}

export default Navbar