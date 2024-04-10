import './Main.css'
import React from "react"
import Header from './Header/Header'
import Specials from './Specials/Specials'
import Testimonials from './Testimonials/Testimonials'
import About from './About/About'

const Main = () => {
    return (
        <>
        <Header />
        <Specials />
        <Testimonials />
        <About />
        </>
    );
}

export default Main;