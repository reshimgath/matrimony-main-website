import React from 'react';
import '../Auth/Login.css'
import RedNav from '../../RedNav'
import eyeIcon from '../../images/eye.png'
import HiddenEyeIcon from '../../images/hidden_eye.png'
import { useState } from 'react';

const Login = () => {
    const [pass, setPass] = useState(false)
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
                        <form autoComplete='off'>
                            <div className="col-lg-12 mb-3">
                                <input type="text" className="form-control" id="" name="" placeholder='Email Id' />
                            </div>

                            <div class="col-lg-12 input-group mb-3">
                                <input type={pass ? "text" : "password"} className="form-control" id="create_password" name="create_password" placeholder='Enter Password' />
                                <span class="input-group-text" id="create_password" onClick={() => { setPass(!pass) }}> {pass ? <img src={HiddenEyeIcon} alt="Image" /> : <img src={eyeIcon} alt="Image" />}</span>
                            </div>
                            <span><a href="#" id="forgetBtn">Forgot Password?</a></span>
                            <div className="col-lg-12 mt-3">
                                <input type="button" value="Login" className='loginBtn' />
                            </div>
                            <span id="registerBtn">Not A Member?<a href="#"> Register Now</a></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login