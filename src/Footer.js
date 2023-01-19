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
                    <h2 className="footer_title"><Link to='/'>Reshimgath</Link></h2>
                </div>

                <div className="row footer_links_row mt-3">
                    <div className="container w-50">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> <Link to="/">Home</Link> </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> About </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> Profiles </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> Plans </h5> </div>
                            <div className="col-lg-2 mt-3 mb-4"> <h5 className="text-center"> Contact </h5> </div>
                        </div>
                    </div>
                </div>

                <div className="row social_media_row pb-4">
                    <h4 className='text-center text-white mb-2'>Follow Us At</h4>

                    <div className="container" style={{ width: "11%" }}>
                        <div className="row">
                            <div className="col-lg-4 text-center socia_link mt-3">
                                <a href="#">
                                    <img src={facebookIcon} alt="con" />
                                </a>
                            </div>

                            <div className="col-lg-4 text-center socia_link mt-3">
                                <a href="#">
                                    <img src={instaIcon} alt="con" />
                                </a>
                            </div>

                            <div className="col-lg-4 text-center socia_link mt-3">
                                <a href="#">
                                    <img src={twitterIcon} alt="con" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer