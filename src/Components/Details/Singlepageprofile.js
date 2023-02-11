import React from 'react'
import './Singlepageprofile.css'
import ladyImg from '../../images/card_lady.png'

const Singlepageprofile = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row mt-3 main_profile_row">
                    <div className="col-lg-6 user_details_section">
                        <img src={ladyImg} className='img-fluid' />
                        <h4>Sample Name <br /> Kolhapur, Maharashtra</h4>
                    </div>

                    <div className="col-lg-12 action_section">
                        <button>Delete</button>
                        <button>Update</button>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={ladyImg} alt="image" className='img-fluid' />
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={ladyImg} alt="image" className='img-fluid' />
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={ladyImg} alt="image" className='img-fluid' />
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Personal Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Gender :</b> Male</p>
                        <p className="fs-5 mt-2"><b>Date Of Birth :</b> 4th June 1996  </p>
                        <p className="fs-5 mt-2"><b>Sub Caste :</b> Cast Name</p>
                        <p className="fs-5 mt-2"><b>Marital Status :</b> Single</p>
                        <p className="fs-5 mt-2"><b>Mother Tongue :</b> Marathi</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Height :</b> 5'9"</p>
                        <p className="fs-5 mt-2"><b>Weight :</b> 55Kg</p>
                        <p className="fs-5 mt-2"><b>Blood Group :</b> A+ Ve</p>
                        <p className="fs-5 mt-2"><b>Complexion :</b> Fair</p>
                        <p className="fs-5 mt-2"><b>Disabilities :</b> No</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Contact Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Name :</b> Sample Name</p>
                        <p className="fs-5 mt-2"><b>Conact No. :</b> +91 1234567890</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Email ID :</b> abc@gmail.com</p>
                        <p className="fs-5 mt-2"><b>Address :</b> Abc Road, PQR City. 416216</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Educational / Professional Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Education :</b> BE</p>
                        <p className="fs-5 mt-2"><b>Course Name :</b> Course</p>
                        <p className="fs-5 mt-2"><b>School Name :</b>  ABC High School</p>
                        <p className="fs-5 mt-2"><b>College Name:</b> ABC College</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Occupation :</b> Engineer</p>
                        <p className="fs-5 mt-2"><b>Company Name :</b> Muchmakr</p>
                        <p className="fs-5 mt-2"><b>Work Location :</b> Location</p>
                        <p className="fs-5 mt-2"><b>Income Per Annum :</b> 10 LPA</p>

                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Horoscope Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Rashi :</b> Male</p>
                        <p className="fs-5 mt-2"><b>Nakshtra :</b> 4th June 1996  </p>
                        <p className="fs-5 mt-2"><b>Charan :</b> Single</p>
                        <p className="fs-5 mt-2"><b>Nadi :</b> Marathi</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Gan :</b> 5'9"</p>
                        <p className="fs-5 mt-2"><b>Mangal :</b> 55Kg</p>
                        <p className="fs-5 mt-2"><b>Birth Time :</b> Fair</p>
                        <p className="fs-5 mt-2"><b>Birth Place :</b> No</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Family Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Father's Name :</b> Male</p>
                        <p className="fs-5 mt-2"><b>Mother's Name :</b> 4th June 1996  </p>
                        <p className="fs-5 mt-2"><b>Siblings :</b> Single</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Parent's Occupation :</b> 5'9"</p>
                        <p className="fs-5 mt-2"><b>Relatives Surname :</b> 55Kg</p>
                        <p className="fs-5 mt-2"><b>Mama's Name :</b> No</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Expectations</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Age Difference :</b> Male</p>
                        <p className="fs-5 mt-2"><b>Expected Height :</b> Single</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Education :</b> 55Kg</p>
                        <p className="fs-5 mt-2"><b>Income :</b> No</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlepageprofile