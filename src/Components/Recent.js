import React from 'react'
import '../Components/Recent.css';
import cardLadyImg from "../images/card_lady.png";
import viewMoreIcon from "../images/vm_btn.png"

const Recent = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 class="recent_title">Recently Created Profiles</h1>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-4 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src='https://res.cloudinary.com/dibwyka4z/image/upload/v1676694578/defaultuser_ewfkn7.jpg' alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" class="img-fluid" />
                            <h4 class="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Recent