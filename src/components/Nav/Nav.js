import './Nav.css'
import React, { useState } from "react"
import { images } from '../../constants'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// update "About" NavLink to HashLink

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className='navBar'>
            <div className='navLogo' >
                <Link to={'/LittleLemon'} ><img src={images.logo} alt='logo' id='navLogo' /></Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? 'open' : ''}>
                <li>
                    <NavLink to={'/'} >Home</NavLink>
                </li>
                <li>
                    <HashLink
                        to = {'/#aboutSection'}
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                    >
                        About
                    </HashLink>
                </li>
                <li>
                    <NavLink to={'/menu'} >Menu</NavLink>
                </li>
                <li>
                    <NavLink to={'/Reservations'} >Reservations</NavLink>
                </li>
                <li>
                    <NavLink to={'/OrderOnline'} id='navOrder' >Order Online</NavLink>
                </li>
                <li>
                    <NavLink to={'/Login'} >Login</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Nav