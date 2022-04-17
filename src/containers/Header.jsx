import React from 'react'
import './Header.scss'
//import header from '../images/desktop/image-header.jpg'
import arrow from '../images/icon-arrow-down.svg'

function Header() {
  return (
    <header className='header'>
        <div className='header__text'>WE ARE CREATIVES</div>
        <img className='header_arrow' src={arrow} alt="arrow" style={{width: 25, height: 70}} />
    </header>
  )
}

export default Header