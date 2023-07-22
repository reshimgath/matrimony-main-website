import React from 'react'
import "./NewProfile.css"
import img1 from "../../images/Profile Images/1.jpg"
import img2 from "../../images/Profile Images/2.jpg"
import img3 from "../../images/Profile Images/3.jpg"
import img4 from "../../images/Profile Images/4.jpg"
const NewProfile = () => {
    return (
        <>

            {/* <!-- Profile Picture Section--> */}
            <div class="container-fluid">
                <div class="picture_box animate__animated animate__fadeInLeft">
                    <h3 class="name">Padmaja</h3>
                    <img class="profile_img" src={img1} alt="Profile Picture" />
                </div>
            </div>

            {/* <!-- Personal Details Section--> */}
            <div class="container-fluid">
                <div class="personal_details_box animate__animated animate__fadeInRight">
                    <h3>Personal Details</h3>
                    <hr />
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <p><b>Gender:</b> Female</p>
                            <p><b>Date Of Birth:</b> 1990-09-28</p>
                            <p><b>Religion:</b> Hindu</p>
                            <p><b>Marital Status:</b> Single</p>
                            <p><b>Mother Tongue:</b> Marathi</p>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <p><b>Height:</b> 5.4</p>
                            <p><b>Weight:</b> -- Weight --</p>
                            <p><b>Blood Group:</b> A+</p>
                            <p><b>Complexion:</b> Medium Skin Tone</p>
                            <p><b>Disabilities:</b> None</p>
                        </div>
                    </div>
                    <h3>Educational / Professional Details</h3>
                    <hr />
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <p><b>Education:</b> BCA</p>
                            <p><b>Income Per Annum:</b> 1 to 3 Lakhs</p>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <p><b>Occupation:</b> Other</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Other Details Section --> */}
            <div class="container-fluid">
                <div class="row other_details">
                    <div class="col-lg-4 other_details_box animate__animated animate__slideInLeft">
                        <h3>Horoscope Details</h3>
                        <hr />
                        <div class="col-lg-12">
                            <p><b>Rashi:</b> -- Rashi --</p>
                            <p><b>Nakshtra:</b> -- Nakshtra --</p>
                            <p><b>Charan:</b> -- Charan --</p>
                            <p><b>Nadi:</b> -- Nadi --</p>
                            <p><b>Gan:</b> -- Gan --</p>
                            <p><b>Mangal:</b> No</p>
                            <p><b>Birth Time:</b> 09:10</p>
                            <p><b>Birth Place:</b> Marathi</p>
                        </div>
                    </div>
                    <div class="col-lg-4 other_details_box animate__animated animate__zoomIn">
                        <h3>Family Details</h3>
                        <hr />
                        <div class="col-lg-12">
                            <p><b>Father's Occupation:</b> Retired</p>
                            <p><b>Mother's Occupation:</b> Retired</p>
                            <p><b>Brother(s):</b> 1</p>
                            <p><b>Brother(s) Married?:</b> No</p>
                            <p><b>Sister(s):</b> No</p>
                            <p><b>Sister(s) Married?:</b> Null</p>
                        </div>
                    </div>
                    <div class="col-lg-4 other_details_box animate__animated animate__slideInRight">
                        <h3>Expectations</h3>
                        <hr />
                        <div class="col-lg-12">
                            <p><b>Education:</b> MCA</p>
                            <p><b>Caste:</b> Hindu</p>
                            <p><b>Occupation:</b> Business</p>
                            <p><b>Complexion:</b> Fair</p>
                            <p><b>Height:</b> </p>
                            <p><b>Location:</b> Pune</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Image Gallery Desktop / Tab View--> */}
            <div class="container mt-5 desktop_gallery">
                <div class="row text-center text-lg-start">
                    <div class="col-lg-4 col-md-4 col-6">
                        <a href={img1} target="_blank" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail gallery" src={img1} alt="" />
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-6">
                        <a href={img2} target="_blank" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail gallery" src={img2} alt="" />
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-4 col-6">
                        <a href={img3} target="_blank" class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail gallery" src={img3} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="container mobile_gallery">
                <h2 class="gallery-font">Gallery</h2>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner carousel-box">
                        <div class="carousel-item active">
                            <img class="d-block w-100 carousel_img" src={img2} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel_img" src={img3} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 carousel_img" src={img4} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                </div>
            </div>


            <div class="button animate__animated animate__bounceIn"><a>Get Contact Details</a> </div>
        </>
    )
}

export default NewProfile