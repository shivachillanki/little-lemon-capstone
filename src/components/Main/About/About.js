import React from 'react'
import './About.css'
import { images } from '../../../constants'

function About() {
  return (
    <div>
        <div className='aboutSection-container' id='aboutSection' >
            <div className='aboutSection-info' >
                <div className='aboutSection-title' >
                    <h1>Little Lemon</h1>
                </div>
                <div className='aboutSection-subTitle' >
                    <h2>Chicago</h2>
                </div>
                <div className='aboutSection-about' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse animi! Ab autem ipsa unde cum nam perferendis iure assumenda blanditiis eligendi. Libero, magnam quaerat perspiciatis nulla optio qui nobis aut voluptates quasi repellendus nostrum facere delectus error itaque, consequatur voluptate culpa eveniet quisquam labore. Harum incidunt est qui dignissimos?</p>
                </div>
            </div>
            <div className='aboutSection-images' >
                <img src={images.chicago} alt="Owners" className='aboutSection-image1' />
                <img src={images.ownersB} alt="Owners" className='aboutSection-image2' />
            </div>
        </div>
        <div>
            <hr className='aboutSection-divider' />
        </div>
    </div>
  )
}

export default About