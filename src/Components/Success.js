import React from 'react';
import "../Components/Success.css"
import successStoryImge from "../images/success_story_img1.jpg"
const Success = () => {
    return (
        <div className='mainContainer'>
            <div className="container-fluid successs_main_container">
                <div className="row">
                    <h1 className="success_title">Some Of Our Success Stories</h1>
                </div>

                <div className="container success_cards_container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="success_card_div">
                                <img src={successStoryImge} alt="image" />

                                <p>Name & Name <br /> 04-01-2023</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="success_card_div">
                                <img src={successStoryImge} alt="image" />

                                <p>Name & Name <br /> 04-01-2023</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="success_card_div">
                                <img src={successStoryImge} alt="image" />

                                <p>Name & Name <br /> 04-01-2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-5">
                    <h3 className='getStartedText'>Your story is waiting to happen !</h3>
                    <center>
                        <a href="#" className='getstartedBtn'>Get Started</a>
                    </center>
                </div>
            </div>

        </div>
    )
}

export default Success