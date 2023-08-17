import React from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import { NavLink } from 'react-router-dom'
import userIcon from '../../assets/images/user-icon.png'



const nav_Links = [

    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]

const Header = () => {
    return (
        <>
            <header className="header">
                <Container>
                    <Row>
                        <div className="nav_wrapper">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                                <div>
                                    <h1>Multimart</h1>
                                    {/* <p>Since 2023</p> */}
                                </div>
                            </div>
                            <div className="navigation">
                                <ul className="menu">
                                    {
                                        nav_Links.map((item, index)=>(
                                            <li className="nav_items" key={index}>
                                                <NavLink to={item.path} className={(navClass) => 
                                            navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                            <div className="nav_icons">

                                <span className="fav_icon">
                                    <i class="ri-heart-line">

                                    </i>
                                </span>
                                <span className="cart_icon">
                                    <i className="ri-shopping-bag-line"></i>

                                </span>
                                <span>
                                    <img src={userIcon} alt="userIcon" />
                                </span>
                            </div>
                            <div className="mobile_menu">
                                <span>
                                    <i className="ri-menu-line">

                                    </i>
                                </span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}

export default Header;