import React from 'react'
import './Footer.scss'
import logo from '../images/logo.svg'
import {BsTwitter,BsPinterest,BsFacebook,BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__logo'><img src={logo} alt="logo" /></div>
        <ul className='footer__links'>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        <div className="footer__icons">
            <BsFacebook className='footer__icon'/>
            <BsInstagram className='footer__icon'/>
            <BsTwitter className='footer__icon'/>
            <BsPinterest className='footer__icon'/>
        </div>
    </footer>
  )
}

export default Footer