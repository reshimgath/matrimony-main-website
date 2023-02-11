import React, { useContext } from 'react'
import '../Details/PartnerPref.css'
import RedNav from '../../RedNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../ContextCreation/AuthContext/AuthContext'

const PartnerPref = () => {
    const authContext = useContext(AuthContext)
    const navigate = useNavigate();
    const handlePartnerPref = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post('http://localhost:3031/auth/getpartnerprefrence', data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            if (res.status === 200) {
                localStorage.setItem('datatoken', res.data.datatoken)
                authContext.dataDispatch({ type: 'changeState' })
                navigate('/horoscopeinfo')
            }
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <RedNav />
            <div className="container">
                <div className="row">
                    <h1 className="partner_title">Partner Preference</h1>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <form onSubmit={handlePartnerPref}>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="education_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Education --</option>
                                        <option value="1">hh1</option>
                                        <option value="1">hh2</option>
                                        <option value="1">hh4</option>
                                        <option value="1">hh5</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="occupation_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Occupation --</option>
                                        <option value="1">hh1</option>
                                        <option value="1">h2</option>
                                        <option value="1">h4</option>
                                        <option value="1">h5</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="salary_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option valuee="" selected>-- Salary / Annual Package --</option>
                                        <option value="1">h1</option>
                                        <option value="1">h2</option>
                                        <option value="1">h4</option>
                                        <option value="1">h5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="complexion_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Complexion --</option>
                                        <option value="1">h1</option>
                                        <option value="1">h2</option>
                                        <option value="1">h4</option>
                                        <option value="1">h5</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="height_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Height --</option>
                                        <option value="1">h1</option>
                                        <option value="1">h2</option>
                                        <option value="1">h4</option>
                                        <option value="1">h5</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="religion_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Religion --</option>
                                        <option value="1">h1</option>
                                        <option value="1">h2</option>
                                        <option value="1">h4</option>
                                        <option value="1">h5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="caste_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Caste --</option>
                                        <option value="1">h1</option>
                                        <option value="1">j2</option>
                                        <option value="1">j4</option>
                                        <option value="1">j5</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="state_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- State --</option>
                                        <option value="1">j1</option>
                                        <option value="1">j2</option>
                                        <option value="1">j4</option>
                                        <option value="1">j5</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="location_pref" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Location --</option>
                                        <option value="1">j1</option>
                                        <option value="1">j2</option>
                                        <option value="1">j4</option>
                                        <option value="1">j5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <input type="submit" value="Save Details" id="partner_pref_btn" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerPref