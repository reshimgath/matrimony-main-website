import React from 'react';
import '../Auth/Register.css'
import RedNav from '../../RedNav'
import eyeIcon from '../../images/eye.png'
import HiddenEyeIcon from '../../images/hidden_eye.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
    const [pass, setPass] = useState(false);

    const [flag, setFlag] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        setButtonDisable(true);
        setTmeData(10);
        setAddOtp(true);

        const formdata = new FormData(event.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post('').then((res) => { }).catch((err) => { })
    }

    // States for Sending OTP 
    const [timeData, setTmeData] = useState(0);
    const [buttonDisable, setButtonDisable] = useState(false);
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
                                    <input type="text" className="form-control" name='first_name' id='first_name' placeholder='First Name' required />
                                </div>
                                <div className="col-lg-6  mb-3">
                                    <input type="text" className="form-control" name='last_name' id='last_name' placeholder='Last Name' required />
                                </div>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <input type="email" className="form-control" id="email_id" name="email_id" placeholder='Email Id' required />
                            </div>

                            <div class="col-lg-12 input-group mb-3">
                                <input type={pass ? "text" : "password"} className="form-control" id="create_password" name="create_password" placeholder='Create New Password' required />
                                <span class="input-group-text" id="create_password" onClick={() => { setPass(!pass) }}> {pass ? <img src={HiddenEyeIcon} alt="Image" /> : <img src={eyeIcon} alt="Image" />}</span>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <input type="password" className="form-control" id="confirm_passwd" name="confirm_passwd" placeholder='Confirm Password' required />
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <input type="number" className="form-control" name='contact_no' id='contact_no' placeholder='Mobile Number' required />
                                </div>

                                <div className="col-lg-6 mb-4">
                                    <select name="user_gender" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" name="tc_check" id="tc_check" required />
                                <label class="form-check-label" for="tc_check" style={{ color: 'black' }}>I have read and agree to the <a href="#" style={{ color: '#E12E56', textDecoration: 'none' }}>terms & conditions</a> and privacy policy.</label>
                            </div>

                            <div className="col-lg-12">
                                {buttonDisable ? (
                                    <button disabled className='otpBtnDisabled'>OTP Sent!</button>
                                ) : (
                                    <input type="submit" value="Get OTP" className='otpBtn' />
                                )}
                            </div>
                        </form>

                        <form action="">
                            {addOtp ? (<>
                                <div className="row mt-5">
                                    <span className='text-center fs-5'> <b>Time Left</b> : {timeData} Seconds </span>
                                </div>

                                <div className="row">
                                    <p className='text-center mt-4 fs-5'>Enter OTP</p>
                                    <input type="password" name="" className='opt_field' id="digit1" />
                                    <input type="password" name="" className='opt_field' id="digit2" />
                                    <input type="password" name="" className='opt_field' id="digit3" />
                                    <input type="password" name="" className='opt_field' id="digit4" />
                                    <input type="password" name="" className='opt_field' id="digit5" />
                                    <input type="password" name="" className='opt_field' id="digit6" />
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