import React, { useState } from 'react'
import "./Nav.css";
import loginIcon from './images/login.png';
import logoutIcon from './images/logout.png';
import registerIcon from './images/register.png'

const Nav = () => {
    const [loggedIn, setLoggeIn] = useState(false)

    return (
        <>
            <nav className="navbar navbar-light bg-transperent p-4">
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
                                    <li><img src={loginIcon} alt="Image" />&nbsp;<span style={{ color: "white" }}>LogIn</span></li>
                                    <li><img src={registerIcon} alt="Image" />&nbsp;<span style={{ color: "white" }}>Register</span></li>
                                </ul>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Nav