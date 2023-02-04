import React, { useState, useContext } from 'react'
import "./RedNav.css";
import loginIcon from './images/login_black.png';
// import logoutIcon from './images/logout_black.png';
import registerIcon from './images/register_black.png'
import { Link } from 'react-router-dom'
import AuthContext from './ContextCreation/AuthContext/AuthContext';
import coinIcon from './images/Hero Icons/star.png'
const RedNav = () => {

    const authContext = useContext(AuthContext)

    return (
        <>
            <nav className="navbar redNav navbar-light bg-transperent p-4">
                <div className="container-fluid">
                    <h1 className="main_nav_title"><Link to="/">Reshimgath</Link></h1>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="d-flex align-items-center justify-content-center">
                            {
                                localStorage.getItem('datatoken') ? (<h4 className='text-white me-2 pt-1'>Hello, {authContext.dataState.firstname}</h4>) : ('')
                            }

                            <span className="navbar-toggler-icon"></span>
                        </div>

                    </button>
                </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-transperent p-4 links_div">
                    {
                        localStorage.getItem('datatoken') ?
                            (
                                <ul className="redNav_menus" >
                                    <li><img src={coinIcon} alt="Img" /> <span className='fs-5'>{authContext.dataState.coins}</span></li>
                                    <li><Link to="/myprofile">My Profile ( Completed : {authContext.dataState.profile_completed}% )</Link></li>
                                    <li>Buy / Update Plan</li>
                                    <li><Link to="/logout">Logout </Link> </li>
                                </ul>)
                            :
                            (
                                <ul className="redNav_menus" >
                                    <li><Link to="/login"><img src={loginIcon} alt="Image" />&nbsp;<span>Login</span></Link></li>
                                    <li><Link to="/register"><img src={registerIcon} alt="Image" />&nbsp;<span>Register</span></Link></li>
                                </ul>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default RedNav