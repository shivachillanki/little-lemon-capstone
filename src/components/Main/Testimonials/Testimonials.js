import React from 'react'
import './Testimonials.css'
import { images } from '../../../constants'
import { IoMdStar } from "react-icons/io"

const testimonialsPatrons = [
    {
        name: 'John Doe',
        handle: 'johnny_24',
        comment: `“The food here always picks me up after a long day at work. I recommend the Lemon Dessert.”`,
        profilePic: images.PP1
    },
    {
        name: 'Jane Perez',
        handle: 'janet_edi5',
        comment: `“I have been eating at Little Lemon for the past three years now and their Bruschetta is the best in town!”`,
        profilePic: images.PP2
    },
    {
        name: 'Lisa Smith',
        handle: 'smith_I43',
        comment: `“This restaurant has opened my eyes to Mediterranean food. I constantly recommend it to friends and family.”`,
        profilePic: images.PP3
    },
    {
        name: 'Kevin Stone',
        handle: 'KevinStone_67',
        comment: `“The Little Lemon is a quaint little restaurant that has a charming menu and atmosphere.”`,
        profilePic: images.PP4
    }
]

let iconStyle = { color: '#FFD700' }

const testimonialCards = testimonialsPatrons.map((person) =>{
    return (
        <div className='testimonial-card' >
            <div className='tCard-stars' >
                <IoMdStar style={iconStyle} />
                <IoMdStar style={iconStyle} />
                <IoMdStar style={iconStyle} />
                <IoMdStar style={iconStyle} />
                <IoMdStar style={iconStyle} />
            </div>
            <div className='tProfilePic' >
                <img src={person.profilePic} alt={`${person.name}'s profile pic`} />
            </div>
            <div className='tPatron-name' >
                <h5>{person.name}</h5>
            </div>
            <div className='tPatron-handle' >
                <h6>{person.handle}</h6>
            </div>
            <div className='tPatron-comment' >
                <p>{person.comment}</p>
            </div>
        </div>
    )
})


const Testimonials = () => {
  return (
    <div className='testimonials-container' >
        <div className='testimonialsHeader' >
            <h4>What our customers say!</h4>
        </div>
        <div className='testimonials-cards' >
            {testimonialCards}
        </div>
    </div>
  )
}

export default Testimonials