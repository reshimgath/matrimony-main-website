import React, { useEffect, useState } from 'react'
import './Singlepageprofile.css'
import axios from 'axios'
import ladyImg from '../../images/dummy_profile_image.jpg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Singlepageprofile = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const [profileData, setProfileData] = useState({})
    const [resetPass, setResetPass] = useState(false)
    const [resetMsg, setResetMsg] = useState(false)
    const [newPass, setNewPass] = useState('')

    const handleReset = () => {
        if (newPass !== "") {
            axios.post('https://reshimgathadminpanel.netlify.app/auth/resetpassword', { password: newPass }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('accesstoken')
                }
            }).then((res) => {
                setResetMsg(true)
                setTimeout(() => {
                    setResetMsg(false)
                    setResetPass(false)
                }, 2000)
            }).catch((err) => {
                notify(0, "Something went wrong..!")
            })
        }
    }

    // ************** Getting Profile Data *************
    useEffect(() => {
        axios.get('https://reshimgathadminpanel.netlify.app/auth/getsingleprofileofuser', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            setProfileData(res.data)
        }).catch((err) => {
            notify(0, "Something went wrong..!")
        })
    }, [])

    return (
        <>
            <div className="container-fluid">
                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                <div className="row mt-3 main_profile_row">
                    <div className="col-lg-6 user_details_section">
                        <img src={profileData.image1 ? (profileData.image1) : (ladyImg)} className='img-fluid' />
                        <h4 className='text-capitalize'>{profileData.firstname} {profileData.lastname}<br /> {profileData.city_name} {profileData.state_name}</h4>
                    </div>

                    <div className="col-lg-12 action_section">
                        <button className='deleteProfileBtn'> <Link to='/deleteprofile'>Delete</Link></button>
                        <button className='deleteProfileBtn'><Link to='/updateuser'>Update</Link></button>
                        <button onClick={() => { setResetPass(true) }}>Reset Password</button>
                    </div>
                </div>

                {/* ********** Reset Passowrd Patch start *************** */}
                {
                    resetPass ? (
                        <div className="row mt-4 mb-4 justify-content-center">
                            <div className="col-lg-9">
                                <p><b>Reset Your Password Now:</b></p>
                                <input type="text" className='form-control' placeholder='Password' onChange={(e) => { setNewPass(e.target.value) }} />
                                <button id="mypassResetBtn" onClick={handleReset}>Reset Now</button>
                            </div>
                        </div>
                    ) : ('')
                }

                {
                    resetMsg ? (
                        <p style={{ textAlign: 'center', color: 'greeen' }} className="mt-3 mb-4"> <b>New Password Added..!</b></p>
                    ) : ('')
                }

                {/* ****************** Reset Passowrd Patch Ends ****************** */}

                <div className="row">
                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={profileData.image1 ? (profileData.image1) : (ladyImg)} alt="image" className='img-fluid' />
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={profileData.image2 ? (profileData.image2) : (ladyImg)} alt="image" className='img-fluid' />
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={profileData.image3 ? (profileData.image3) : (ladyImg)} alt="image" className='img-fluid' />
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Personal Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Gender :</b> {profileData.gender}</p>
                        <p className="fs-5 mt-2"><b>Date Of Birth :</b> {profileData.dob}</p>
                        <p className="fs-5 mt-2"><b>Religion :</b> {profileData.caste}</p>
                        <p className="fs-5 mt-2"><b>Marital Status :</b> {profileData.maritalStatus}</p>
                        <p className="fs-5 mt-2"><b>Mother Tongue :</b> {profileData.mother_tongue}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Height :</b> {profileData.height}</p>
                        <p className="fs-5 mt-2"><b>Weight :</b> {profileData.weight}</p>
                        <p className="fs-5 mt-2"><b>Blood Group :</b> {profileData.bloodGroup}</p>
                        <p className="fs-5 mt-2"><b>Complexion :</b> {profileData.complexion}</p>
                        <p className="fs-5 mt-2"><b>Disabilities :</b> {profileData.disablity}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Educational / Professional Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Education :</b> {profileData.education}</p>
                        <p className="fs-5 mt-2"><b>Income Per Annum :</b> {profileData.salaryPA}</p>
                        {/* <p className="fs-5 mt-2"><b>Occupation :</b> Engineer</p>
                        <p className="fs-5 mt-2"><b>School Name :</b>  ABC High School</p>
                        <p className="fs-5 mt-2"><b>College Name:</b> ABC College</p> */}
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Occupation :</b> {profileData.occupation}</p>
                        {/* <p className="fs-5 mt-2"><b>Company Name :</b> Muchmakr</p>
                        <p className="fs-5 mt-2"><b>Work Location :</b> Location</p> */}

                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Horoscope Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2 text-capitalize"><b>Rashi :</b> {profileData.rashi}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Nakshtra :</b> {profileData.nakshatra}  </p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Charan :</b> {profileData.charan}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Nadi :</b> {profileData.nadi}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2 text-capitalize"><b>Gan :</b>{profileData.gan}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Mangal :</b> {profileData.mangal ? ('Yes') : ('No')}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Birth Time :</b> {profileData.birth_time}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Birth Place :</b> {profileData.birth_place}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Family Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2 text-capitalize"><b>Father's Name :</b> {profileData.fathers_name}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Mother's Name :</b> {profileData.mothers_name}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Brother(s) :</b> {profileData.bother_select}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Sister(s) :</b> {profileData.sister_select}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2 text-capitalize"><b>Father's Occupation :</b> {profileData.fathers_occupation}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Mother's Occupation :</b> {profileData.mothers_occupation}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Brother(s) Married? :</b> {profileData.bother_status}</p>

                        <p className="fs-5 mt-2 text-capitalize"><b>Sister(s) Married? :</b> {profileData.sister_status}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Expectations</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Education  :</b> {profileData.education_pref}</p>
                        <p className="fs-5 mt-2"><b>Occupation :</b>  {profileData.occupation_pref}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Caste  :</b> {profileData.caste_pref}</p>
                        <p className="fs-5 mt-2"><b>Complexion  :</b> {profileData.complexion_pref}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Location  :</b> {profileData.location_pref}</p>
                        <p className="fs-5 mt-2"><b>Height  :</b> {profileData.height_pref}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Location  :</b> {profileData.location_pref}</p>
                        <p className="fs-5 mt-2"><b>State  :</b> {profileData.state_pref}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">

                    <h2 className="personal_details_div_title">Contact Details</h2>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2 text-capitalize"><b>Name :</b> {profileData.firstname} {profileData.lastname}</p>
                        <p className="fs-5 mt-2"><b>Conact No. :</b> {profileData.mobile}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className="fs-5 mt-2"><b>Email ID :</b> {profileData.email}</p>
                        <p className="fs-5 mt-2 text-capitalize"><b>Address :</b> {profileData.addressLine1}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlepageprofile