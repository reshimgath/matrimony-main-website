import React, { useState, useContext } from 'react'
import "./Nav.css";
import loginIcon from './images/login.png';
import registerIcon from './images/register.png';
import { Link } from 'react-router-dom'
import AuthContext from './ContextCreation/AuthContext/AuthContext';
import coinIcon from './images/Hero Icons/star.png'
const Nav = () => {
    const authContext = useContext(AuthContext)
    // console.log(authContext.dataState)
    return (
        <>
            <nav className="navbar navbar-light bg-transperent p-4">
                <div className="container-fluid">
                    <h1 className="main_nav_title"><Link to="/">Reshimgath</Link></h1>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="d-flex align-items-center justify-content-center">
                            {
                                localStorage.getItem('datatoken') ? (
                                    <>
                                        <h4 className='text-white me-2 pt-1 text-capitalize'>Hi, {authContext.dataState.firstname}</h4>
                                    </>
                                ) : ('')
                            }
                            <span className="navbar-toggler-icon"></span>
                        </div>

                    </button>

                </div>

                {/* {
                    Object.keys(authContext.dataState).length !== 0 && authContext.dataState.verified ? ('') : (<div className="container-fluid">
                        <marquee behavior="scroll" direction="left" className='text-white fs-4'>Please Verify Your Email..!</marquee>
                    </div>)
                } */}

            </nav>

            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-transperent p-4 links_div">
                    {
                        localStorage.getItem('datatoken') ?
                            (
                                <ul className="nav_menus d-flex justify-content-center align-items-center flex-column" >
                                    <li className='text-white'><img src={coinIcon} alt="Img" /> <span className='fs-5'>{authContext.dataState.coins}</span></li>
                                    <li><Link to="/myprofile">My Profile ( Completed : {authContext.dataState.profile_completed}% )</Link></li>
                                    <li><Link to="#">Buy / Update Plan</Link></li>
                                    <li>
                                        <Link to="/logout">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>)
                            :
                            (
                                <ul className="nav_menus" >
                                    <li><Link to="/login"><img src={loginIcon} alt="Image" />&nbsp;<span style={{ color: "white" }}>Login</span></Link></li>
                                    <li><Link to="/register"><img src={registerIcon} alt="Image" />&nbsp;<span style={{ color: "white" }}>Register</span></Link></li>
                                </ul>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Nav