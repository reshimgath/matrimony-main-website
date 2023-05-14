// @ts-nocheck 
import React, { useState } from 'react'
import RedNav from '../RedNav'
import '../Components/AdvanceSearch.css'
import religionData from '../Components/religion.json'
import heightData from '../Components/height.json'
import educationData from '../Components/education.json'
import SearchResult from './SearchResult'
const AdvanceSearch = () => {
    //State for Not result found msg
    const [msg, setMsg] = useState(false)

    //Main Search Bar Form Submission
    const [filterData, setFilterData] = useState([])

    // For loop for getting numbers 18-70
    const ageArr = [];
    for (var i = 18; i <= 70; i++) {
        ageArr.push(i)
    }

    const handleSubmit = () => { }
    return (
        <>
            <RedNav />
            <div className="container-fluid w-100">
                <form onSubmit={handleSubmit}>
                    <div className="row search_area_background">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="lookingFor">Looking For</label>
                                <select name="lookingFor" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <label htmlFor="fromAge">From Age</label>
                            <div className="dropdown">
                                <select name="fromAge" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    {
                                        ageArr?.map((val, id) => {
                                            return (
                                                <option>{val}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="toAge">To Age</label>
                                <select name="toAge" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    {
                                        ageArr?.map((val, id) => {
                                            return (
                                                <option>{val}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="maritalStatus">Marital Status</label>
                                <select name="maritalStatus" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    <option>Single</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                    <option>Separated</option>
                                    <option>Widower</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">Religion</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    {
                                        religionData?.map((val, id) => {
                                            return (
                                                <option value={val.religion}>{val.religion}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">Caste</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    {/* {
                                        religionData?.map((val, id) => {
                                            return (
                                                <option value={val.religion}>{val.religion}</option>
                                            )
                                        })
                                    } */}

                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">Height</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    {
                                        heightData?.map((val, index) => {
                                            return (
                                                <option value={val.height}>{val.height.split(".").map((value, indx) => {
                                                    return (
                                                        <h1>{value + `${indx === 0 ? "'" : '"'}`}</h1>
                                                    )
                                                })}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">Education</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>
                                    {
                                        educationData?.map((val, id) => {
                                            return (
                                                <option value={val.education}>{val.education}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">Salary Package</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>

                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">State</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>

                                </select>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="dropdown">
                                <label htmlFor="Religion">City</label>
                                <select name="Religion" className="form-select form-select" aria-label=".form-select-sm example">
                                    <option selected>-- Please Select --</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                            <div className="search_btn_div mt-4 dropdown">
                                <button className='search_btn'><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="blank_div"></div>

            {
                !msg ? (
                    ''
                ) : (<SearchResult arrProp={filterData} />)
            }
        </>
    )
}

export default AdvanceSearch