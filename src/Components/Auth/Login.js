// @ts-nocheck 
import React from 'react';
import axios from 'axios';
import '../Auth/Login.css'
import RedNav from '../../RedNav'
import eyeIcon from '../../images/eye.png'
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HiddenEyeIcon from '../../images/hidden_eye.png'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext';
//require('dotenv').config();
console.log(process.env.REACT_APP_BASEURL)
const Login = () => {
    const authContext = useContext(AuthContext)

    const navigate = useNavigate()
    const [pass, setPass] = useState(false);
    const [error, setError] = useState(false);
    const [forgot, setForgot] = useState(false)
    const [forgottenMail, setForgottenMail] = useState('')
    const [sendMsg, setSendMsg] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post(`${process.env.REACT_APP_BASEURL}/auth/login`, data).then((res) => {

            //setting tokens in localstorage
            localStorage.setItem('accesstoken', res.data.accesstoken)
            localStorage.setItem('datatoken', res.data.datatoken)
            authContext.dataDispatch({ type: 'changeState' })
            navigate('/')

        }).catch((err) => {
            console.log(err)
            setError(true)
        })
    }

    const handleReset = () => {
        if (forgottenMail !== "") {
            axios.post(`${process.env.REACT_APP_BASEURL}/auth/forgotpassword`, { email: forgottenMail }).then((res) => {
                // console.log(res.data)
                setSendMsg(true)
                setTimeout(() => {
                    navigate(0)
                }, 2000)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <RedNav />
            <div className="container login_container">
                <div className="row mb-3">
                    <h2 className='login_title'>Login Here</h2>
                    <p className='text-center'>Login with your credentials</p>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 outer_form_div">
                        <form onSubmit={handleSubmit} autoComplete={'off'}>
                            <div className="col-lg-12 mb-3">
                                <input type="text" className="form-control" name="email" placeholder='Email Id' required />
                            </div>

                            <div className="col-lg-12 input-group mb-3">
                                <input type={pass ? "text" : "password"} className="form-control" name="password" id="password" placeholder='Enter Password' autoComplete="off" required />
                                <span className="input-group-text" onClick={() => { setPass(!pass) }}> {pass ? <img src={HiddenEyeIcon} alt="Image" /> : <img src={eyeIcon} alt="Image" />}</span>
                            </div>

                            {
                                error ? (
                                    <div className="col-lg-12">
                                        <p className="text-center mt-3" style={{ color: 'red' }}>Invalid Credentials..!</p>
                                    </div>) : ('')
                            }

                            <span>
                                <span id="forgetBtn" onClick={() => { setForgot(true) }}>Forgot Password?</span>
                            </span>

                            {
                                forgot ? (
                                    <div className="col-lg-12 mt-3 mb-3">
                                        <input type="email" name="forgot_email" onChange={(e) => { setForgottenMail(e.target.value) }} placeholder='Email Id' className="form-control" />
                                    </div>
                                ) : ('')
                            }

                            {
                                forgot ? (
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <span className='btn resetBtn' onClick={handleReset}>Reset Now</span>
                                    </div>
                                ) : (
                                    <div className="col-lg-12 mt-3 mb-2">
                                        <input type="submit" value="Login" className='loginBtn' />
                                    </div>
                                )
                            }

                            {
                                sendMsg ? (
                                    <p className='mt-3 mb-3' style={{ color: 'green', textAlign: 'center' }}>Password is sent to entered email address..!</p>
                                ) : ('')
                            }
                            <span id="registerBtn">Not A Member?&ensp;<Link to="/register">Register Now</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
