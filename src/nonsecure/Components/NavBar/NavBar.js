import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import companyLogo from '../../../images/favicon.ico';
import { FaBars, FaTimes } from 'react-icons/fa'
import { PRE_LOGIN_MENU } from '../../../common/Components/Menu/PreLoginMenu';

function NavBar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

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
                        {
                            PRE_LOGIN_MENU.map(data => {
                               return  <li className='nav-item'><Link to={data.path} className='nav-links' onClick={closeMobileMenu} id= {data.menuId}>{data.menuName}</Link> </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
