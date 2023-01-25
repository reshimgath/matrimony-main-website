import React from 'react';
import "./Footer.css";
import facebookIcon from "./images/facebook.png";
import instaIcon from "./images/instagram.png";
import twitterIcon from "./images/twitter.png";
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="container-fluid footer_main_container">
                <div className="row">
                    <h2 className="footer_title text-center mt-2"><Link to='/'>Reshimgath</Link></h2>
                </div>

                <div className="row footer_links_row mt-3">
                    <div className="container w-50">
                        <div className="row d-flex justify-content-center footer_links_div">
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> <Link to="/">Home</Link> </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> <Link to="#">About</Link> </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> <Link to="#">Profiles</Link> </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> <Link to="#">Plans</Link> </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> <Link to="#">Contact</Link> </h5> </div>
                        </div>
                    </div>
                </div>

                <div className="row social_media_row pb-4">
                    <h4 className='text-center text-white mb-2'>Follow Us At</h4>

                    <div className="container" style={{ width: "11%" }}>
                        <div className="row">
                            <div className="col-lg-4 text-center socia_link mt-3">
                                <Link to="#">
                                    <img src={facebookIcon} alt="con" />
                                </Link>
                            </div>

                            <div className="col-lg-4 text-center socia_link mt-3">
                                <Link to="#">
                                    <img src={instaIcon} alt="con" />
                                </Link>
                            </div>

                            <div className="col-lg-4 text-center socia_link mt-3">
                                <Link to="#">
                                    <img src={twitterIcon} alt="con" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer