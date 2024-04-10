import './Specials.css'
import React from 'react'
import { images } from '../../../constants'
import { MdOutlineDeliveryDining } from "react-icons/md"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

/* Cards for desktop */

const dishes = [
    {
        name: "Greek Salad",
        price: 12.99,
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: images.dish1,
        key: "dish_1"
    },
    {
        name: "Bruschetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: images.dish2,
        key: "dish_2"
    },
    {
        name: "Lemon Dessert",
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: images.dish3,
        key: "dish_3"
    }
]

const card = dishes.map((dish) => {
    return (
            <div className='cardContainer' key={dish.key} >
                <img src={dish.image} alt={dish.name} />

                <div className='cardTitle' >
                    <h3>{dish.name}</h3>
                    <div className='cardPrice'>
                        <h6>{`$${dish.price}`}</h6>
                    </div>
                </div>

                <div className='card-content'>
                    <p>{dish.description}</p>
                </div>
                    <div className='footer-content' >
                        <div className='cardFooter' >
                            <p>Order a delivery</p>
                        </div>

                        <div className='footer-icon' >
                            <Link to={'/OrderOnline'} ><MdOutlineDeliveryDining id='cardFooterIcon' /></Link>
                        </div>
                    </div>
            </div>
    )
})

/* mini menu for tablet and mobile */

const miniMenuSections = [
    {
        name: "Lunch",
        path: '/#miniLunch-items',
        key: 'mini_1'
    },
    {
        name: "Mains",
        path: '/#miniMains-items',
        key: 'mini_2'
    },
    {
        name: "Desserts",
        path: '/#miniDesserts-items',
        key: 'mini_3'
    },
    {
        name: "Individual",
        path: '/#miniCarte-items',
        key: 'mini_4'
    },
    {
        name: "Specials",
        path: '/#miniSpecials-items',
        key: 'mini_5'
    }
]

const miniMenuLunch = [
    {
        name: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        price: 12.99,
        key: 'lunch_1'
    },
    {
        name: 'Brushetta',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
        price: 7.99,
        key: 'lunch_2'
    },
    {
        name: 'Scallian Cannoli',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
        price: 14.99,
        key: 'lunch_3'
    },
    {
        name: 'Wood Fire Pizza',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis recusandae vitae placeat fugit odio sit blanditiis adipisci velit ab.',
        price: 11.99,
        key: 'lunch_4'
    },
    {
        name: 'Dorada With Lemon',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque vitae dolorem perferendis ea debitis eius quia, dolor molestiae cupiditate deserunt?',
        price: 17.99,
        key: 'lunch_5'
    }
]

const miniMenuMains = [
    {
        name: 'Main Item 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iusto.',
        price: 15.49,
        key: 'main_1'
    },
    {
        name: 'Main Item 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veniam consequuntur ab.',
        price: 12.99,
        key: 'main_2'
    },
    {
        name: 'Main Item 3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum exercitationem expedita molestiae assumenda consequatur.',
        price: 17.89,
        key: 'main_3'
    },
    {
        name: 'Main Item 4',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        price: 9.25,
        key: 'main_4'
    }
]

const miniMenuDesserts = [
    {
        name: 'Lemon Dessert',
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: '5.00',
        key: 'dessert_1'
    },
    {
        name: 'Dessert 2',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem minima cum illum.',
        price: 6.99,
        key: 'dessert_2'
    },
    {
        name: 'Dessert 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, qui.',
        price: '1.50/each'
    }
]

const miniMenuCarte = [
    {
        name: 'Carte Item 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quisquam excepturi.',
        price: 7.99,
        key: 'carte_1'
    },
    {
        name: 'Carte Item 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 4.99,
        key: 'carte_2'
    },
    {
        name: 'Carte Item 3',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit cupiditate enim odit.',
        price: 9.67,
        key: 'carte_3'
    },
    {
        name: 'Carte Item 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi nihil dolor qui distinctio quisquam!',
        price: 10.25,
        key: 'carte_4'
    }
]

const miniMenuSpecials = [
    {
        name: 'Special 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod aspernatur perspiciatis.',
        price: 8.05,
        key: 'special_1'
    },
    {
        name: 'Special 2',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quidem iste necessitatibus cumque excepturi.',
        price: 12.99,
        key: 'special_2'
    }
]

/* Mini menu nav sections */
const miniMenuNav = miniMenuSections.map((section) => {
    return (
        <div className='miniMenuNav-item' key={section.key} >
            <ul>
                <li>
                    <HashLink
                        to = {section.path}
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                    >
                        {section.name}
                    </HashLink>
                </li>
            </ul>
        </div>
    )
})

/* Mini Menu Items */ /* Can this process be automated with a template? */
const lunchMenu = miniMenuLunch.map((item) => {
    return (
        <div className='lunch-menu-section' key={item.key} >
            <h5>{item.name}</h5>
            <div>
                <p>{item.description}</p>
            </div>
            <h6>{item.price}</h6>
            <hr style={{margin: '1rem', color: '#EDEFEE'}} />
        </div>
    )
})
const mainsMenu = miniMenuMains.map((item) => {
    return (
        <div className='lunch-menu-section' key={item.key} >
            <h5>{item.name}</h5>
            <div>
                <p>{item.description}</p>
            </div>
            <h6>{item.price}</h6>
            <hr style={{margin: '1rem', color: '#EDEFEE'}} />
        </div>
    )
})
const dessertsMenu = miniMenuDesserts.map((item) => {
    return (
        <div className='lunch-menu-section' key={item.key} >
            <h5>{item.name}</h5>
            <div>
                <p>{item.description}</p>
            </div>
            <h6>{item.price}</h6>
            <hr style={{margin: '1rem', color: '#EDEFEE'}} />
        </div>
    )
})
const carteMenu = miniMenuCarte.map((item) => {
    return (
        <div className='lunch-menu-section' key={item.key} >
            <h5>{item.name}</h5>
            <div>
                <p>{item.description}</p>
            </div>
            <h6>{item.price}</h6>
            <hr style={{margin: '1rem', color: '#EDEFEE'}} />
        </div>
    )
})
const specialsMenu = miniMenuSpecials.map((item) => {
    return (
        <div className='lunch-menu-section' key={item.key} >
            <h5>{item.name}</h5>
            <div>
                <p>{item.description}</p>
            </div>
            <h6>{item.price}</h6>
            <hr style={{margin: '1rem', color: '#EDEFEE'}} />
        </div>
    )
})


const Specials = () => {

    return (
        <div className='specialsSection'>
                <div className='specialsHeader'>
                    <div className='specialsTitle-container' >
                        <h1>This Week's Specials</h1>
                    </div>
                    <div className='specialsHeader-link' >
                        <Link to={'/Menu'} >Online Menu</Link>
                    </div>
                </div>

            <div className='cardSection' >
                {card}
            </div>

            {/* small / medium screen */}

            <div className='small-med-specialsSection' >
                <div className='sm-md-specialsHeader' >
                    <h3>ORDER FOR DELIVERY!</h3>
                </div>

                <div className='miniMenuNavbar' >
                    {miniMenuNav}
                </div>

                <hr style={{margin: '1rem', color: '#333333'}} />

                <div className='miniMenuSection' >
                    <div id='miniLunch-items' >
                        {lunchMenu}
                    </div>

                    <div id='miniMains-items' >
                        {mainsMenu}
                    </div>

                    <div id='miniDesserts-items' >
                        {dessertsMenu}
                    </div>

                    <div id='miniCarte-items' >
                        {carteMenu}
                    </div>

                    <div id='miniSpecials-items' >
                        {specialsMenu}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials