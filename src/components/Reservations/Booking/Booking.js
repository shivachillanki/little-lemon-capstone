import React, { useState } from 'react'
import './Booking.css'
import { IoIosArrowDown } from "react-icons/io"
import { FaPeopleGroup, FaCalendarDays, FaRegClock, FaWineGlass } from "react-icons/fa6"
import { CgPin } from "react-icons/cg"
import { TbArmchair } from "react-icons/tb"

// Finish styling Booking Form

function Booking() {

    const [partySize, setPartySize] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [seating, setSeating] = useState('')
    const [occasion, setOccasion] = useState('')
    const [comment, setComment] = useState('')

    const getIsFormValid = () => {
        return (
            partySize &&
            location &&
            date &&
            time &&
            seating
        )
    }

    const clearForm = () => {
        setPartySize('')
        setLocation('')
        setDate('')
        setTime('')
        setSeating('')
        setOccasion('')
        setComment('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            partySize,
            location,
            date,
            time,
            seating,
            occasion,
            comment
        })
        clearForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='rsvForm-header' >
                <h2>RESERVE YOUR TABLE</h2>
            </div>
            <div className='rsvForm-container' >
                <div className='rsvForm-row1' >
                    <div className='field' >
                        <label htmlFor='res-party' >Party Size</label>
                        <div className="select-container">
                            <div className="res-selectIcon-container">
                                <FaPeopleGroup className='res-selectIcon' />
                            </div>
                            <select
                                id='res-party'
                                value={partySize}
                                onChange={(e) => setPartySize(e.target.value)}
                            >
                                <option value="">Guests</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                            <div className="icon-container">
                                <IoIosArrowDown className='resIcon' />
                            </div>
                        </div>
                    </div>
                    <div className='field' >
                        <label htmlFor='res-location' >Location</label>
                        <div className="select-container">
                            <div className="res-selectIcon-container">
                                <CgPin className='res-selectIcon' />
                            </div>
                            <select
                                id='res-location'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option value="">Branch</option>
                                <option value="chicago">Illinois - Chicago</option>
                                <option value="new york">New York - New York</option>
                                <option value="toronto">Ontario - Toronto</option>
                            </select>
                            <div className="icon-container">
                                <IoIosArrowDown className='resIcon' />
                            </div>
                        </div>
                    </div>
                    <div className='field' >
                        <label htmlFor='res-date' >Date</label>
                        <div className="select-container">
                            <div className="res-selectIcon-container">
                                <FaCalendarDays className='res-selectIcon' />
                            </div>
                            <input
                                id='res-date'
                                type='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <div className="icon-container">
                                <IoIosArrowDown className='resIcon' />
                            </div>
                        </div>
                    </div>
                    <div className='field' >
                        <label htmlFor='res-time' >Time</label>
                        <div className="select-container">
                            <div className="res-selectIcon-container">
                                <FaRegClock className='res-selectIcon' />
                            </div>
                            <select
                                id='res-time'
                                value={time}
                                onChange={e => setTime(e.target.value)}
                            >
                                <option value="">Availabile times</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </select>
                            <div className="icon-container">
                                <IoIosArrowDown className='resIcon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rsvForm-row2' >
                    <div className='field' >
                        <label htmlFor='res-seating' >Seating</label>
                        <div className="select-container">
                            <div className="res-selectIcon-container">
                                <TbArmchair className='res-selectIcon' />
                            </div>
                            <select
                                id='res-seating'
                                value={seating}
                                onChange={(e) => setSeating(e.target.value)}
                            >
                                <option value="">Your preference</option>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="either">Either</option>
                            </select>
                            <div className="icon-container">
                                <IoIosArrowDown className='resIcon' />
                            </div>
                        </div>
                    </div>
                    <div className='field' >
                        <label htmlFor='res-occasion' >Occasion<span className='optionalInput' >(optional)</span></label>
                        <div className="select-container">
                            <div className="res-selectIcon-container">
                                <FaWineGlass className='res-selectIcon' />
                            </div>
                            <select
                                id='res-occasion'
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option value="">Choose an Occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>
                            </select>
                            <div className="icon-container">
                                <IoIosArrowDown className='resIcon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rsvForm-row3' >
                    <div className='commentField' >
                        <label htmlFor='res-comment' >Comments<span className='optionalInput' >(optional)</span></label>
                        <textarea
                            id='res-comment'
                            type='text'
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder='Add a comment'
                        />
                    </div>
                </div>
                <div className='rsvSubmit-bttn' >
                    <button type='submit' disabled={!getIsFormValid()} >
                        Check Availability
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Booking