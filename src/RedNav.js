import React, { useState } from 'react'
import "./RedNav.css";
import loginIcon from './images/login_black.png';
import logoutIcon from './images/logout_black.png';
import registerIcon from './images/register_black.png'

const RedNav = () => {
    const [loggedIn, setLoggeIn] = useState(false)

    return (
        <>
            <nav className="navbar redNav navbar-light bg-transperent p-4">
                <div className="container-fluid">
                    <h1 className="main_nav_title">Reshimgath</h1>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-transperent p-4 links_div">
                    {
                        loggedIn ?
                            (
                                <ul className="nav_menus" >
                                    <li>LogOut <img src={logoutIcon} alt="Image" /> </li>
                                    <li>Edit Profile</li>
                                    <li>Buy / Update Plan</li>
                                </ul>)
                            :
                            (
                                <ul className="nav_menus" >
                                    <li><img src={loginIcon} alt="Image" />&nbsp;<span>LogIn</span></li>
                                    <li><img src={registerIcon} alt="Image" />&nbsp;<span>Register</span></li>
                                </ul>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default RedNav