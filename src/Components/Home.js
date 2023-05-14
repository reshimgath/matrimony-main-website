// @ts-nocheck 
import React, { useContext, useEffect, useState } from 'react';
import Nav from '../Nav';
import '../Components/Home.css';
import signupIcon from '../images/Hero Icons/exit.png'
import searchIcon from '../images/Hero Icons/search.png'
import selectIcon from '../images/Hero Icons/choice.png'
import contactIcon from '../images/Hero Icons/choose.png'
import Aim from './Aim';
import Count from './Count'
import MatchHome from './MatchHome'
import Recent from './Recent'
import Success from './Success'
import SearchResult from './SearchResult';
import axios from 'axios';
import religionData from '../Components/religion.json'
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

const Home = () => {

    //State for Not result found msg
    const [msg, setMsg] = useState(false)

    // For loop for getting numbers 18-70
    const ageArr = [];
    for (var i = 18; i <= 70; i++) {
        ageArr.push(i)
    }

    //Main Search Bar Form Submission
    const [filterData, setFilterData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        // console.log(data)

        axios.post(`${process.env.REACT_APP_BASEURL}/auth/normalsearch`, data).then((res) => {
            setFilterData(res.data)
            setMsg(true)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='homeDiv'>
                <Nav />

                {/* <button onClick={() => { authContext.dataDispatch({ type: 'changeState' }) }}>Change State Now</button> */}

                <h1 className='homeTitle'>Reshimgath</h1>

                <div className="search_icons">
                    <div className="search_Sub_icons">
                        <img src={signupIcon} alt="image" /><span>Signup</span>
                    </div>

                    <div className="search_Sub_icons">
                        <img src={searchIcon} alt="image" /><span>Search</span>
                    </div>

                    <div className="search_Sub_icons">
                        <img src={selectIcon} alt="image" /><span>Select</span>
                    </div>
                    <div className="search_Sub_icons">
                        <img src={contactIcon} alt="image" /><span>Contact</span>
                    </div>
                </div>

                <div className="container-fluid w-100">
                    <form onSubmit={handleSubmit}>
                        <div className="row search_area_background">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <div className="dropdown">
                                    <label htmlFor="lookingFor">Looking For</label>
                                    <select name="lookingFor" class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Please Select --</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <label htmlFor="fromAge">From Age</label>
                                <div className="dropdown">
                                    <select name="fromAge" class="form-select form-select" aria-label=".form-select-sm example">
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
                                    <select name="toAge" class="form-select form-select" aria-label=".form-select-sm example">
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
                                    <select name="maritalStatus" class="form-select form-select" aria-label=".form-select-sm example">
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
                                    <select name="Religion" class="form-select form-select" aria-label=".form-select-sm example">
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
                                <div className="search_btn_div mt-4 dropdown">
                                    <button className='search_btn'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="blank_div"></div>
            </div>

            {
                !msg ? (
                    ''
                ) : (<SearchResult arrProp={filterData} />)
            }

            <Aim />
            <MatchHome />
            <Recent />
            <Success />
            <Count />
        </>

    )
}

export default Home