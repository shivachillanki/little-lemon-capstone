import './Header.css'
import React from "react"
import { images } from '../../../constants'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='heroSection-bg' >
            <div className='heroSection' >
                <div className='heroDetails' >
                    <div className='heroTitle' >
                        <h1>Little Lemon</h1>
                    </div>
                    <div className='heroSubTitle' >
                        <h2>Chicago</h2>
                    </div>
                    <div className='heroDescription' >
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <div className='reserveBttn' >
                        <Link to={'/Reservations'}>Reserve a Table</Link>
                    </div>
                </div>
                <div className='hero-image' >
                    <img src={ images.heroImage } alt="Bruschetta" />
                </div>
            </div>
        </div>
    )
}

export default Header