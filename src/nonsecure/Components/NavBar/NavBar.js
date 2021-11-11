import React from 'react'
import { Link } from 'react-router-dom'
import { MdSupervisedUserCircle } from 'react-icons/md'
import '../LandingPage.css'
import './NavBar.css'

function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <ul className="nav-menu">
                        <li className='nav-item'><Link to="/" className='nav-links'>Home</Link> </li>
                        <li className='nav-item'><Link to="/services" className='nav-links'>Services</Link></li>
                        <li className='nav-item'><Link to="/aboutus" className='nav-links'>About Us</Link></li>
                        <li className='nav-item'><Link to="/contactus" className='nav-links'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
