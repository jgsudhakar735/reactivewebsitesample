import { useState } from 'react'

const UserState = {

    isAuth: false,
    loggedInUser: '',

    setLoginStatus(isLoggedIn) {
        console.log(isLoggedIn)
        UserState.isAuth = true
    },
    setLoginUser(loggedInUser) {
        console.log(loggedInUser)
        UserState.loggedInUser = loggedInUser;
    },
    getAuth() {
        return UserState.isAuth;
    },
    getUserName() {
        console.log(UserState.loggedInUser)
        return UserState.loggedInUser;
    }
};

export default UserState