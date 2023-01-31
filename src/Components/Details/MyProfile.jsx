import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext'
import RedNav from '../../RedNav'
import './MyProfile.css'

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

        fetch('http://localhost:3031/auth/verifyotp', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            },
            body: JSON.stringify({
                otp: data.allOTP
            })
        }).then(response => response.json())
            .then((response) => { localStorage.setItem('datatoken', response.datatoken); authContext.dataDispatch({ type: 'changeState' }); navigate('/') })
            .catch(err => setShowError(true));
    }
    return (
        <>
            <RedNav />
            <div className="container-fluid">
                <h1 className="text-center mt-5 mb-5">My Profile</h1>
                {
                    authContext.dataState.verified ? ('') : (<div>
                        <h4>Click Below to get OTP on your registered email...</h4>
                        <button onClick={handleOTP}>Get OTP</button>
                    </div>)
                }

                {
                    sendOtp ? (
                        <>
                            <div className="mt-3" style={{ color: 'red' }}>OTP Will Expire in 3 Minutes!</div>
                            <form onSubmit={handleOTPSubmit}>
                                <input type="number" name="verifyOTP" />
                                <input type="submit" value="Submit Now" />
                            </form>

                        </>
                    ) : ('')
                }
                {
                    showError ? (
                        <p className="mt-3" style={{ color: 'red' }}>Invalid OTP...!</p>
                    ) : ('')
                }
            </div>
        </>
    )
}

export default MyProfile