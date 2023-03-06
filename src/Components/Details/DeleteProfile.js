import React, { useContext, useState } from 'react'
import '.././Details/DeleteProfile.css'
import RedNav from '../../RedNav'
import axios from 'axios'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';

const DeleteProfile = () => {
    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [delOtp, setDelOtp] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleDelProfile = () => {
        setLoading(true)
        axios.post('http://localhost:3031/auth/senddeletepreviewemale', { firstname: context.dataState.firstname }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            setDelOtp(true)
            setLoading(false)
        }).catch((err) => {
            notify(0, "Something went wrong...!")
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post('http://localhost:3031/auth/deleteprofile', data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            notify(1, "Profile Deleted Successfully..!")
            setTimeout(() => {
                navigate('/logout')
            }, 2000)
        }).catch((e) => {
            notify(0, "Something went wrong..!")
        })
    }
    return (
        <>
            <RedNav />
            <div className="container">
                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                {
                    !delOtp ?
                        (
                            <div className="row justify-content-center">
                                <h3 className="confirm_title">Do You Really Want to Delete Your Profile?</h3>
                                <button className='delBtn' onClick={handleDelProfile}>Sure, Delete My Profile</button>
                            </div>
                        )
                        :
                        (
                            <div className="sendMsg_div w-75 m-auto mt-5 mb-5">
                                <p className='sentNote'>OTP Sent To Your Registered Email ID</p>
                                <form onSubmit={handleDelete}>
                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-8">
                                            <input type="email" name='email' value={context.dataState.email} className='form-control text-center' />
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-8">
                                            <input type="text" name='gender' value={context.dataState.gender} className='form-control text-center' />
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-8">
                                            <input type="number" name='mobile' value={context.dataState.mobile} className='form-control text-center' />
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-8">
                                            <textarea name="reason" cols="51" rows="3" required placeholder='Why you are leaving us?' className='form-control'></textarea>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-8">
                                            <input type="number" name='otp' placeholder='Enter OTP' className='form-control text-center' />
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-3">
                                        <div className="col-lg-8">
                                            <input type="submit" value="Confirm & Delete" className='confirmBtn' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                }

                {
                    loading ?
                        (
                            <div className='mt-10'>
                                <center>
                                    <ReactLoading type={'spinningBubbles'} color={'#12e56'} height={'40px'} width={'40px'} />
                                </center>
                            </div>
                        )
                        :
                        ('')
                }
            </div>
        </>
    )
}

export default DeleteProfile