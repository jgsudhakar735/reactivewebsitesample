import React, { useState } from 'react'
import companyLogo from '../../../images/favicon.ico';
import './Header.css'
import UserLogo from '@material-ui/icons/AccountCircleOutlined'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
function Header() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    const [clickMenu, setMenuClick] = useState(false)
    const handleMenuClick = () => setMenuClick(!clickMenu)

    return (
        <>
            <div className="postloginheader">
                <div className="postheader">
                    <img src={companyLogo} alt="JgSudhakar" />
                </div>
                <div className="settings">
                    <div className="postmenu-icon" onClick={handleMenuClick}>
                        {clickMenu ? <FaTimes /> : <FaBars />}
                    </div>
                    <div><UserLogo fontSize="large" onClick={handleClick}></UserLogo></div>
                    {click ?
                        <ul className={click ? "headermenupo active" : "headermenupo"} onMouseLeave={handleClick}>
                            <li className='headernav-item'>
                                <Link to="/chgpwd" className='headernav-links'>Change Password</Link>
                            </li>
                            <li className='headernav-item'>
                                <Link to="/logout" className='headernav-links'>LogOut</Link>
                            </li>
                        </ul>
                        :
                        ''
                    }
                </div>
            </div>
        </>
    )
}

export default Header
