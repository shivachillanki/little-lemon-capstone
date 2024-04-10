import './Reservations.css'
import React from "react"
import BookingForm from './Booking/Booking'

// style select element in Booking Form

const Reservations = () => {

    return (
        <div>
            <div className='reservationsHeader' >
                <h1>Reservations</h1>
            </div>
            <BookingForm />
            <div className='rsvForm-disclaimer' >
                <p><sup>*</sup>For parties larger than 6, please contact us</p>
            </div>
            <div>
                <hr className='rsvFormSection-divider'/>
            </div>
        </div>
    );
}

export default Reservations;