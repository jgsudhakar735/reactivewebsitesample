import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'
import './LandingPage.css'
import Login from './Login/Login'
import NavBar from './NavBar/NavBar'
import MAIN_CONTENT from './Routes/RoutePreLogin'
function LandingPage() {
    return (
        <>
            <div className="container">
                <header className="header">
                    {/* <img src="D:/Sudhakar/study/react/mywebsite/src/images/logo.png" className = "Logo" alt="logo"/> */}
                    <nav id="nav" className="Nav flexbox"><NavBar></NavBar></nav>
                </header>
                <main id="main" className="content"> {MAIN_CONTENT}</main>
                {/* <main id="main" className="content"> <Outlet /></main> */}
                {/* <div id="lgcontainer"></div> */}
                <div id="logincard"> <Login></Login></div>
                <footer id="footer"><Footer></Footer> </footer>
            </div>
        </>
    )
}

export default LandingPage
