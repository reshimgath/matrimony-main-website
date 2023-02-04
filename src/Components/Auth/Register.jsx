import React from 'react';
import '../Auth/Register.css'
import RedNav from '../../RedNav'
import eyeIcon from '../../images/eye.png'
import HiddenEyeIcon from '../../images/hidden_eye.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../../ContextCreation/AuthContext/AuthContext';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();
    const authContext = useContext(AuthContext)
    const [pass, setPass] = useState(false);

    const [registered, setRegistered] = useState(false)
    const [error, setError] = useState(false)
    // State to check if OTP is expired
    const [checkotp, setCheckotp] = useState(false)

    // This function Takes forrm Values
    const handleSubmit = (event) => {
        setError(false)
        event.preventDefault();

        if (registered) {
            setButtonDisable(true);
            setTmeData(180);
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

        } else {
            setRegistered(true)
            setButtonDisable(true);
            setTmeData(180);
            setAddOtp(true);

            const formdata = new FormData(event.target);
            const data = Object.fromEntries(formdata.entries());

            axios.post('http://localhost:3031/auth/register', data).then((res) => {

                localStorage.setItem('accesstoken', res.data.accesstoken)
                localStorage.setItem('datatoken', res.data.datatoken)
                authContext.dataDispatch({ type: 'changeState' })

            }).catch((err) => {
                setError(true)
                setRegistered(false)
                setButtonDisable(false);
                setTmeData(0);
                setAddOtp(false);

            })
        }
    }

    // THis function takes entered OTP
    const handleOtpSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
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
            .then((response) => { localStorage.setItem('datatoken', response.datatoken); authContext.dataDispatch({ type: 'changeState' }); setTmeData(0); navigate('/') })
            .catch(err => setCheckotp(true));
    }

    // States for Sending OTP 

    // State to add time in OTP counter
    const [timeData, setTmeData] = useState(0);

    // State to enable and disable GET otp button
    const [buttonDisable, setButtonDisable] = useState(false);

    // State to enable Enter OTP Form
    const [addOtp, setAddOtp] = useState(false);

    // Starting OTP Counter
    useEffect(() => {
        const intervalId =
            timeData > 0
                ? setInterval(() => {
                    setTmeData(timeData - 1);
                }, 1000)
                : setButtonDisable(false);

        return () => {
            clearInterval(intervalId);
        };
    }, [timeData]);


    return (
        <>
            <RedNav />
            <div className="container register_container">
                <div className="row mb-3">
                    <h2 className='register_title'>Register</h2>
                    <p className='text-center'>Create profile and get one step closer of your match</p>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-9 outer_form_div">
                        <form onSubmit={handleSubmit} autoComplete='off'>
                            <div className="row">
                                <div className="col-lg-6  mb-3">
                                    <input type="text" className="form-control" name='firstname' id='firstname' placeholder='First Name' />
                                </div>
                                <div className="col-lg-6  mb-3">
                                    <input type="text" className="form-control" name='lastname' id='lastname' placeholder='Last Name' />
                                </div>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder='Email Id' />
                            </div>

                            <div className="col-lg-12 input-group mb-3">
                                <input type={pass ? "text" : "password"} className="form-control" id="password" name="password" placeholder='Create New Password' />
                                <span className="input-group-text" id="password" onClick={() => { setPass(!pass) }}> {pass ? <img src={HiddenEyeIcon} alt="Image" /> : <img src={eyeIcon} alt="Image" />}</span>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <input type="password" className="form-control" id="confirm_passwd" name="confirm_passwd" placeholder='Confirm Password' />
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <input type="number" className="form-control" name='mobile' id='mobile' placeholder='Mobile Number' />
                                </div>

                                <div className="col-lg-6 mb-4">
                                    <select name="gender" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" name="tc_check" id="tc_check" />
                                <label class="form-check-label" htmlFor="tc_check" style={{ color: 'black' }}>I have read and agree to the <a href="#" style={{ color: '#E12E56', textDecoration: 'none' }}>terms & conditions</a> and privacy policy.</label>
                            </div>
                            {
                                error ? (
                                    <div className="col-lg-12">
                                        <p className="text-center mt-3" style={{ color: 'red' }}>User Already Exist...!</p>
                                    </div>) : ('')
                            }
                            <div className="col-lg-12">
                                {buttonDisable ? (
                                    <button disabled className='otpBtnDisabled'>OTP Sent!</button>
                                ) : (
                                    <input type="submit" value="Get OTP" className='otpBtn' />
                                )}
                            </div>
                            <div className="mb-3 mt-2">
                                <span id="registerBtn">Already A Member?&ensp;<Link to="/login">Login Now</Link></span>
                            </div>
                        </form>

                        <form onSubmit={handleOtpSubmit}>
                            {addOtp ? (<>
                                <div className="row mt-5">
                                    <span className='text-center fs-5'> <b>Time Left</b> : {timeData} Seconds </span>
                                    {
                                        checkotp ? (<p style={{ color: 'red' }} className='mt-3 text-center'>Oops..OTP Expired or Invalid!</p>) : ('')
                                    }
                                </div>

                                <div className="row">
                                    <p className='text-center mt-4 fs-5'>Enter OTP</p>
                                    <input type="password" name="allOTP" className='opt_field' id="digit1" maxlength="6" required />
                                </div>

                                <div className="row">
                                    <div className="col-lg-12  mt-5">
                                        <p style={{ color: 'red' }}>*Note: If you didn't received OTP or time expires then click on Get OTP again!</p>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        <input type="submit" value="Free Register" className='registerBtn' />
                                    </div>
                                </div>
                            </>) : ('')}

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register