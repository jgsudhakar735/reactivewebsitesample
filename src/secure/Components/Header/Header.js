import React, { useState } from 'react'
import companyLogo from '../../../images/favicon.ico';
import './Header.css'
import UserLogo from '@material-ui/icons/AccountCircleOutlined'
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { POST_LOGIN_MENU } from '../Menu/PostLoginMenu';
import UserState from '../../../common/Components/Guard/UserState';
function Header() {

    const navigate = useNavigate();

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileHedMenu = () => setClick(false)
    const [clickMenu, setMenuClick] = useState(false)
    const handleMenuClick = () => {
        setMenuClick(!clickMenu)
        setClick(false)
    }

    const logout = () => {
        localStorage.removeItem("loginStatus")
        localStorage.removeItem("loginUName")
        navigate("/")
    }

    return (
        <>
            <div className="postloginheader">
                <div className="postheader">
                    <img src={companyLogo} alt="JgSudhakar" />
                </div>

                <div className="settings">
                    <div className="postmenu-icon" onClick={handleMenuClick}>
                        {clickMenu ? <FaTimes /> : <FaBars />}
                        <ul className={clickMenu ? 'plnav-menu active' : 'plnav-menu'}>
                            {
                                POST_LOGIN_MENU.map(data => {
                                    return <li className='plnav-item'>
                                        <Link to={data.path} className='plnav-links' onClick={closeMobileHedMenu} id={data.menuId} key={data.menuId}>{data.menuName}</Link>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div> <i> {localStorage.getItem("loginUName")} </i> </div>
                    <div><UserLogo fontSize="large" onClick={handleClick}></UserLogo></div>
                    {click ?
                        <ul className={click ? "headermenupo active" : "headermenupo"} onMouseLeave={handleClick}>
                            <li className='headernav-item'>
                                <Link to="/dashboard/chgpwd" className='headernav-links'>Change Password</Link>
                            </li>
                            <li className='headernav-item'>
                                <a href="#" className='headernav-links' onClick={logout}>LogOut</a>
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
