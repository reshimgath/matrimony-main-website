// @ts-nocheck 
import React from 'react'
import "../Components/MatchHome.css"
import signinIcon from '../images/signin.png';
import searchIcon from "../images/search.png";
import selectIcon from "../images/select.png";
import chooseIcon from "../images/choose.png"
const MatchHome = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-4">
                    <h1 className="match_home_title">Find Your Perfetch Match</h1>
                    <h4 className='match_home_subtitle'>in simple and very easy steps</h4>
                </div>

                <div className="row steps_main_div">

                    <div className="col-lg-3 col-sm-6 col-xs-6 steps_sub_div mt-4">
                        <img src={signinIcon} alt="Image" />
                        <h4 className='mt-3'>Sign Up</h4>
                        <h5>Create your profile <br /> by registering with <br /> all your details</h5>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 steps_sub_div mt-4">
                        <img src={searchIcon} alt="Image" />
                        <h4 className='mt-3'>Search</h4>
                        <h5>Search profiles as <br /> per your choice / <br /> requirement</h5>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 steps_sub_div mt-4">
                        <img src={selectIcon} alt="image" />
                        <h4 className='mt-3'>Select</h4>
                        <h5>Select the perfect <br /> matches of your <br /> expectations </h5>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-6 steps_sub_div mt-4">
                        <img src={chooseIcon} alt="Image" />
                        <h4 className='mt-3'>Contact</h4>
                        <h5>Buy membership plans, <br /> get contact details & <br /> start a conversation</h5>
                    </div>
                </div>


            </div>
        </>
    )
}

export default MatchHome