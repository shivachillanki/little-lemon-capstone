import './OrderOnline.css';
import React from "react";
import { images } from '../../constants'

const OrderOnline = () => {
    return (
        <div className='TBD'>
            <div className='container'>
                <img id='bgImage' src={images.progress} alt='progress'/>
                <div className='message'>Under Construction</div>
            </div>

            <h1>
                Order Online
            </h1>
        </div>
    );
}

export default OrderOnline;