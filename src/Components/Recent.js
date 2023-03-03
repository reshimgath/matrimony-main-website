import React, { useEffect, useState } from 'react'
import '../Components/Recent.css';
import defaultImg from "../images/dummy_profile_image.jpg";
import viewMoreIcon from "../images/vm_btn.png"
import axios from 'axios'
const Recent = () => {

    const [profile, setProfile] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3031/auth/getrecentprofiles")
            .then((res) => {
                // console.log(res.data)
                setProfile(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="recent_title">Recently Created Profiles</h1>
                </div>

                <div className="row mt-4">

                    {/* <div className="col-lg-4 col-sm-6 col-xs-6 mt-3">
                        <div className="recent_inside_div">
                            <img src={cardLadyImg} alt="image" className="img-fluid" />
                            <h4 className="recent_profile_name">Sample Name</h4>
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
                            <img src={cardLadyImg} alt="image" className="img-fluid" />
                            <h4 className="recent_profile_name">Sample Name</h4>
                            <br />
                            <p>Age : 34</p>
                            <p>Education : BE CSE</p>
                            <br />
                        </div>

                        <div className="click_btn_div">
                            <img src={viewMoreIcon} alt="img" />
                        </div>

                    </div> */}

                    {
                        profile?.map((val, id) => {
                            return (
                                <div className="col-lg-4 col-sm-6 col-xs-6 mt-3 recent_main_div">
                                    <div className="recent_inside_div">
                                        <img src={val.image1 === "" ? (defaultImg) : (val.image1)} alt="image" className="img-fluid" />
                                        <h4 className="recent_profile_name text-capitalize">{val.firstname}</h4>
                                        <br />
                                        <p>Education : {val.education}</p>
                                        <br />
                                    </div>

                                    <div className="click_btn_div">
                                        <img src={viewMoreIcon} alt="img" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Recent