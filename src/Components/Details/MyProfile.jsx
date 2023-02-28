import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext'
import RedNav from '../../RedNav'
import './MyProfile.css'
import Singlepageprofile from './Singlepageprofile'

const MyProfile = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const [sendOtp, setSendOtp] = useState(false)
    const [showError, setShowError] = useState(false)
    // console.log(authContext)
    const handleOTP = (e) => {
        setSendOtp(true)
        fetch('http://localhost:3031/auth/resendotp', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": localStorage.getItem('accesstoken')
            },

        })
            .then(response => response.text())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const handleOTPSubmit = (event) => {
        event.preventDefault()
        const formdata = new FormData(event.target);
        const data = Object.fromEntries(formdata.entries());

        // fetch('http://localhost:3031/auth/verifyotp', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": localStorage.getItem('accesstoken')
        //     },
        //     body: JSON.stringify({
        //         otp: data.allOTP
        //     })
        // }).then(response => response.json())
        //     .then((response) => { localStorage.setItem('datatoken', response.datatoken); authContext.dataDispatch({ type: 'changeState' }); navigate('/') })
        //     .catch((err) => { setShowError(true); console.log(err) });

        axios.post('http://localhost:3031/auth/verifyotp', data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            localStorage.setItem('datatoken', res.data.datatoken);
            authContext.dataDispatch({ type: 'changeState' });
            navigate('/')
        }).catch((err) => {
            setShowError(true);
            console.log(err)
        })
    }
    return (
        <>
            <RedNav />
            <div className="container-fluid">
                <div>
                    {
                        // authContext.dataState.verified
                        authContext.dataState.verified ? (<div> <Singlepageprofile /> </div>) :
                            (
                                <div>
                                    <h2 className='verify_title'>Verify Your Email</h2>
                                    <h4 className='verify_subTitle'>Click Below To Get OTP On Your Registered Email</h4>
                                    {
                                        sendOtp ? (<button disabled className='getOTPBtn'>OTP Sent!</button>) : (<button className='getOTPBtn' onClick={handleOTP}>Get OTP</button>)
                                    }
                                </div>)
                    }

                    {
                        sendOtp ? (
                            <>
                                <div className="mt-4 mb-3" style={{ color: 'red', textAlign: 'center' }}>OTP Will Expire in 3 Minutes!</div>
                                <form onSubmit={handleOTPSubmit}>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6">
                                            <input type="number" name="otp" className='form-control' />
                                            <input type="submit" value="Submit Now" className='getOTPBtn' />
                                        </div>
                                    </div>
                                </form>

                            </>
                        ) : ('')
                    }
                    {
                        showError ? (
                            <p className="mt-3" style={{ color: 'red', textAlign: 'center' }}>Invalid OTP...!</p>
                        ) : ('')
                    }
                </div>

            </div>
        </>
    )
}

export default MyProfile