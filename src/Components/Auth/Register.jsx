import React from 'react';
import '../Auth/Register.css'
import RedNav from '../../RedNav'
import eyeIcon from '../../images/eye.png'
import HiddenEyeIcon from '../../images/hidden_eye.png'
import { useState } from 'react';

const Register = () => {
    const [pass, setPass] = useState(false)

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
                        <form autoComplete='off'>
                            <div className="row">
                                <div className="col-lg-6  mb-3">
                                    <input type="text" className="form-control" name='first_name' id='first_name' placeholder='First Name' />
                                </div>
                                <div className="col-lg-6  mb-3">
                                    <input type="text" className="form-control" name='last_name' id='last_name' placeholder='Last Name' />
                                </div>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <input type="text" className="form-control" id="" name="" placeholder='Email Id' />
                            </div>

                            <div class="col-lg-12 input-group mb-3">
                                <input type={pass ? "text" : "password"} className="form-control" id="create_password" name="create_password" placeholder='Create New Password' />
                                <span class="input-group-text" id="create_password" onClick={() => { setPass(!pass) }}> {pass ? <img src={HiddenEyeIcon} alt="Image" /> : <img src={eyeIcon} alt="Image" />}</span>
                            </div>

                            <div className="col-lg-12 mb-3">
                                <input type="password" className="form-control" id="" name="" placeholder='Confirm Password' />
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <input type="number" className="form-control" name='contact_no' id='contact_no' placeholder='Mobile Number' />
                                </div>

                                <div className="col-lg-6 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="tc_check" required />
                                <label class="form-check-label" for="tc_check" style={{ color: 'black' }}>I have read and agree to the <a href="#" style={{ color: '#E12E56', textDecoration: 'none' }}>terms & conditions</a> and privacy policy.</label>
                            </div>

                            <div className="col-lg-12">
                                <input type="button" value="Submit" className='registerBtn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register