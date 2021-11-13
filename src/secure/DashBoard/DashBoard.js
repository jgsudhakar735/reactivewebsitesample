import React from 'react'
import Footer from '../../nonsecure/Components/Footer/Footer'
import Sidebar from '../Components/Sidebar/Sidebar'
import './DashBoard.css'
function DashBoard() {
    return (
        <>
            <div className="container1">
                <nav id="nav1">Post Navigation Bar</nav>
                <main id="main1">Post Main Content</main>
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
