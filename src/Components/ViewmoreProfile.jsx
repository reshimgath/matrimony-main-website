import React, { useEffect, useState } from 'react'
import '../Components/ViewmoreProfile.css'
import RedNav from '../RedNav'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../ContextCreation/AuthContext/AuthContext'
import { useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ViewmoreProfile = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const authContext = useContext(AuthContext)
    const [profileData, setProfileData] = useState({})
    const [contactData, setContactData] = useState([])
    const [showContact, setShowContact] = useState(false)
    const location = useLocation()

    useEffect(() => {
        axios.post('https://reshimgathadminpanel.netlify.app/auth/getalluserdetails', { id: location.state.id }, {

        }).then((res) => {
            setProfileData(res.data)

        }).catch((err) => {
            notify(0, "Something went wrong..!")
        })
    }, [])

    const handleContact = () => {
        axios.post('https://reshimgathadminpanel.netlify.app/auth/getusercontactdetails', { profileid: location.state.id }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            localStorage.setItem('datatoken', res.data.datatoken)
            authContext.dataDispatch({ type: 'changeState' })
            setContactData(res.data.profiledata)
            setShowContact(true)
        }).catch((err) => {
            notify(0, "Plan Expired or You don't have enough coins...!")
        })
    }

    return (
        <>
            <RedNav />
            <div className="container-fluid">
                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                <div className="row mt-3 main_profile_row">
                    <div className="col-lg-6 user_details_section">
                        <img src={profileData.image1} className='img-fluid' />
                        <h4 className='text-capitalize'>{profileData.firstname} </h4>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={profileData.image1} alt="image" className='img-fluid' />
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={profileData.image2} alt="image" className='img-fluid' />
                    </div>

                    <div className="col-lg-4 col-sm-6 d-flex justify-content-center profileImg_div">
                        <img src={profileData.image3} alt="image" className='img-fluid' />
                    </div>
                </div>

                <div className="row justify-content-center mb-4 property_div">

                    <h2 className="personal_details_div_title">Personal Details</h2>

                    <div className="col-lg-5 ">
                        <p className=" mt-2 details_p"><b>Gender :</b> {profileData.gender}</p>
                        <p className=" mt-2"><b>Date Of Birth :</b> {profileData.dob}</p>
                        <p className=" mt-2"><b>Religion :</b> {profileData.caste}</p>
                        <p className=" mt-2"><b>Marital Status :</b> {profileData.maritalStatus}</p>
                        <p className=" mt-2"><b>Mother Tongue :</b> {profileData.mother_tongue}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Height :</b> {profileData.height}</p>
                        <p className=" mt-2"><b>Weight :</b> {profileData.weight}</p>
                        <p className=" mt-2"><b>Blood Group :</b> {profileData.bloodGroup}</p>
                        <p className=" mt-2"><b>Complexion :</b> {profileData.complexion}</p>
                        <p className=" mt-2"><b>Disabilities :</b> {profileData.disablity}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4 property_div">

                    <h2 className="personal_details_div_title">Educational / Professional Details</h2>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Education :</b> {profileData.education}</p>
                        <p className=" mt-2"><b>Income Per Annum :</b> {profileData.salaryPA}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Occupation :</b> {profileData.occupation}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4 property_div">

                    <h2 className="personal_details_div_title">Horoscope Details</h2>

                    <div className="col-lg-5">
                        <p className=" mt-2 text-capitalize"><b>Rashi :</b> {profileData.rashi}</p>
                        <p className=" mt-2 text-capitalize"><b>Nakshtra :</b> {profileData.nakshatra}  </p>
                        <p className=" mt-2 text-capitalize"><b>Charan :</b> {profileData.charan}</p>
                        <p className=" mt-2 text-capitalize"><b>Nadi :</b> {profileData.nadi}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2 text-capitalize"><b>Gan :</b>{profileData.gan}</p>
                        <p className=" mt-2 text-capitalize"><b>Mangal :</b> {profileData.mangal ? ('Yes') : ('No')}</p>
                        <p className=" mt-2 text-capitalize"><b>Birth Time :</b> {profileData.birth_time}</p>
                        <p className=" mt-2 text-capitalize"><b>Birth Place :</b> {profileData.birth_place}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4 property_div">

                    <h2 className="personal_details_div_title">Family Details</h2>

                    <div className="col-lg-5">
                        {/* <p className=" mt-2 text-capitalize"><b>Father's Name :</b> {profileData.fathers_name}</p>
                        <p className=" mt-2 text-capitalize"><b>Mother's Name :</b> {profileData.mothers_name}</p> */}
                        <p className=" mt-2 text-capitalize"><b>Father's Occupation :</b> {profileData.fathers_occupation}</p>
                        <p className=" mt-2 text-capitalize"><b>Brother(s) :</b> {profileData.bother_select}</p>
                        <p className=" mt-2 text-capitalize"><b>Sister(s) :</b> {profileData.sister_select}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2 text-capitalize"><b>Mother's Occupation :</b> {profileData.mothers_occupation}</p>
                        <p className=" mt-2 text-capitalize"><b>Brother(s) Married? :</b> {profileData.bother_status}</p>
                        <p className=" mt-2 text-capitalize"><b>Sister(s) Married? :</b> {profileData.sister_status}</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4 property_div">

                    <h2 className="personal_details_div_title">Expectations</h2>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Education  :</b> {profileData.education_pref}</p>
                        <p className=" mt-2"><b>Occupation :</b>  {profileData.occupation_pref}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Caste  :</b> {profileData.caste_pref}</p>
                        <p className=" mt-2"><b>Complexion  :</b> {profileData.complexion_pref}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Location  :</b> {profileData.location_pref}</p>
                        <p className=" mt-2"><b>Height  :</b> {profileData.height_pref}</p>
                    </div>

                    <div className="col-lg-5">
                        <p className=" mt-2"><b>Location  :</b> {profileData.location_pref}</p>
                        <p className=" mt-2"><b>State  :</b> {profileData.state_pref}</p>
                    </div>
                </div>

                {
                    showContact ? (
                        <div className="row justify-content-center mb-4">

                            <h2 className="personal_details_div_title">Contact Details</h2>

                            <div className="col-lg-5">
                                <p className=" mt-2 text-capitalize"><b>Name :</b> {profileData.firstname} {contactData.lastname}</p>
                                <p className=" mt-2 text-capitalize"><b>Father's Name :</b> {profileData.fathers_name}  {contactData.lastname}</p>
                                <p className=" mt-2 text-capitalize"><b>Mothers's Name :</b> {profileData.mothers_name} {contactData.lastname}</p>
                            </div>

                            <div className="col-lg-5">
                                <p className=" mt-2"><b>Conact No. :</b> {contactData.mobile}</p>
                                <p className=" mt-2"><b>Email ID :</b> {contactData.email}</p>
                                <p className=" mt-2 text-capitalize"><b>Address :</b> {contactData.addressLine2}</p>
                            </div>
                        </div>
                    )
                        :
                        (<div className="row justify-content-center">
                            <div className="col-lg-6">
                                <button className='btn contactBtn' onClick={handleContact}><h2>Get Contact Details</h2></button>
                            </div>
                        </div>)
                }
            </div>
        </>
    )
}

export default ViewmoreProfile