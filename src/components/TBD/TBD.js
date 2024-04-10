import React from 'react'
import './TBD.css'
import { images } from '../../constants'

function TBD() {
  return (
    <div className='container' >
        <img id='bgImage' src={images.progress} alt='progress' />
        <div className='message' >Under Construction</div>
    </div>
  )
}

export default TBD