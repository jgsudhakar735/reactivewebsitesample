import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import companyLogo from '../../../images/favicon.ico';
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [button, setButton] = useState(true)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)

    return (
        <>
            <div className="navbar">
                <div className="Logo">
                    <img src={companyLogo} alt="JgSudhakar" />
                </div>
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link> </li>
                        <li className='nav-item'><Link to="/services" className='nav-links' onClick={closeMobileMenu}>Services</Link></li>
                        <li className='nav-item'><Link to="/aboutus" className='nav-links' onClick={closeMobileMenu}>About Us</Link></li>
                        <li className='nav-item'><Link to="/contactus" className='nav-links' onClick={closeMobileMenu}>Contact Us</Link></li>
                        <li className='nav-item'><Link to="/dashboard" className='nav-links' onClick={closeMobileMenu}>Layout</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
