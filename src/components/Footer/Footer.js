import './Footer.css'
import React from "react"
import { images } from '../../constants'
import { Link } from 'react-router-dom'

// update : "About Little Lemon" Link to HashLink

const Footer = () => {
    return (
        <div className='footerNav'>

            <div>
                <img src={images.footerLogo} alt='logo' id='footerLogo'/>
            </div>

            <nav>
                <ul>
                    <h3>Doormat Navigation</h3>
                    <Link to={'/LittleLemon'} >Home</Link>
                    <Link to={'/'} >About Little Lemon</Link>
                    <Link to={'/Menu'} >Menu</Link>
                    <Link to={'/Reservations'} >Reservations</Link>
                    <Link to={'/OrderOnline'} >Order Online</Link>
                    <Link to={'/Login'} >Login</Link>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <Link to={'/'} >Address</Link>
                    <Link to={'/'} >Phone Number</Link>
                    <Link to={'/'} >Email</Link>
                </ul>
                <ul>
                    <h3>Social Media Links</h3>
                    <Link to={'/'} >Address</Link>
                    <Link to={'/'} >Phone Number</Link>
                    <Link to={'/'} >Email</Link>
                </ul>
            </nav>

        </div>
    );
}

export default Footer