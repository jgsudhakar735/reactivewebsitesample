import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../common/Components/Footer/Footer'
import './LandingPage.css'
import NavBar from './NavBar/NavBar'
function LandingPage() {
    return (
        <>
            <div className="container">
                <nav id="nav"><NavBar></NavBar></nav>
                <main id="main" className="mainContent">
                    <Outlet></Outlet>
                </main>
                <footer id="footer"><Footer></Footer> </footer>
            </div>
        </>
    )
}

export default LandingPage
