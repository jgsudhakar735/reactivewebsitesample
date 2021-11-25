import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import DashBoard from '../../../secure/Components/DashBoard/DashBoard';

const ProtectedRoute = () => {
    let isLoggedIn = localStorage.getItem("loginStatus")
    return isLoggedIn ? <DashBoard><Outlet /> </DashBoard>: <Navigate to="/" />;
}

export default ProtectedRoute
