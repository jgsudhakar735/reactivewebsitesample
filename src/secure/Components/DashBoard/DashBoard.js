import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../../common/Components/Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './DashBoard.css'
function DashBoard() {
    return (
        <>
            <div className="container1">
                <nav id="nav1"><Header /></nav>
                <main id="main1"><Outlet /></main>
                <div id="sidebar1"> <Sidebar></Sidebar></div>
                <div id="container11"> Post Container 1</div>
                <div id="container21"> Post  Container 2</div>
                <div id="container31"> Post Container 3</div>
                <footer id="footer1"> <Footer></Footer> </footer>
            </div>
        </>
    )
}

export default DashBoard
