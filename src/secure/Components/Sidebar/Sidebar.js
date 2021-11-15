import React from 'react'
import { Link } from 'react-router-dom'
import { POST_LOGIN_MENU } from '../Menu/PostLoginMenu'
import './Sidebar.css'

function Sidebar() {
    return (
        <div>
            <ul className="settingsMenu">
                {
                    POST_LOGIN_MENU.map(menuData => {
                        return <li className="set-nav-item">
                            <Link to={menuData.path} className="set-nav-link" id={menuData.menuId} key= {menuData.menuId}> {menuData.menuName} </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar
