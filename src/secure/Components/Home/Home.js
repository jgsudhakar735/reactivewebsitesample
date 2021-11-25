import React from 'react'
import UserState from '../../../common/Components/Guard/UserState'

function Home() {
    return (
        <div>
            <i>{UserState.getUserName}</i>  Welcome to  Home Page
        </div>
    )
}

export default Home
