import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Aim.css";
import aimImage from '../images/reshimgath_about.jpg'

const Aim = () => {
    return (
        <>
            <div className="aim_div">
                <h1 className="aim_title">
                    Our Aim
                </h1>
            </div>

            <div className="aim_desc_div">
                <div className="aim_left_div">
                    <p style={{ textAlign: "justify" }}> <em> Our aim at <b>Reshimgath Vivah</b> is to assist individuals in finding their life partner by providing a flawless and personalized matchmaking experience. We seek to create a safe and trustworthy environment for our users to connect, communicate, and develop meaningful connections. Our ultimate objective is to guarantee that every member meets their right partner and has a happy married life.</em></p>
                    <button className='aimBtn'> <Link to="/about"> Read More</Link></button>

                    <div className="extra"></div>
                </div>

                <div className="aim_right_div">
                    <img src={aimImage} alt="" />
                </div>
            </div>

        </>
    )
}

export default Aim