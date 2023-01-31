import React from 'react';
import '../Auth/Login.css'
import RedNav from '../../RedNav'
import eyeIcon from '../../images/eye.png'
import HiddenEyeIcon from '../../images/hidden_eye.png'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../ContextCreation/AuthContext/AuthContext';
import { useContext } from 'react';

const Login = () => {

    const navigate = useNavigate()
    const [pass, setPass] = useState(false);
    const [error, setError] = useState(false);

    const authContext = useContext(AuthContext)


    const handleSubmit = (e) => {

        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());


        axios.post('http://localhost:3031/auth/login', data).then((res) => {

            //setting tokens in localstorage
            localStorage.setItem('accesstoken', res.data.accesstoken)
            localStorage.setItem('datatoken', res.data.datatoken)
            authContext.dataDispatch({ type: 'changeState' })
            navigate('/')

        }).catch((err) => {
            setError(true)
        })
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
                                <input type="text" className="form-control" name="email" placeholder='Email Id' />
                            </div>

                            <div className="col-lg-12 input-group mb-3">
                                <input type={pass ? "text" : "password"} className="form-control" name="password" id="password" placeholder='Enter Password' autoComplete="off" />
                                <span className="input-group-text" onClick={() => { setPass(!pass) }}> {pass ? <img src={HiddenEyeIcon} alt="Image" /> : <img src={eyeIcon} alt="Image" />}</span>
                            </div>

                            {
                                error ? (
                                    <div className="col-lg-12">
                                        <p className="text-center mt-3" style={{ color: 'red' }}>Invalid Credentials..!</p>
                                    </div>) : ('')
                            }

                            <span>
                                <Link to="#" id="forgetBtn">Forgot Password?</Link>
                            </span>

                            <div className="col-lg-12 mt-3 mb-2">
                                <input type="submit" value="Login" className='loginBtn' />
                            </div>
                            <span id="registerBtn">Not A Member?&ensp;<Link to="/register">Register Now</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login