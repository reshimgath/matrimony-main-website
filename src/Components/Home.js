import React from 'react';
import Nav from '../Nav';
import '../Components/Home.css';
import signupIcon from '../images/Hero Icons/exit.png'
import searchIcon from '../images/Hero Icons/search.png'
import selectIcon from '../images/Hero Icons/choice.png'
import contactIcon from '../images/Hero Icons/choose.png'

const Home = () => {
    return (

        <div className='homeDiv'>
            <Nav />

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
                <div className="row search_area_background">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                        <div className="dropdown">
                            <label htmlFor="lookingFor">Looking For</label>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="lookingFor" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                                -- Please Select --
                            </button>
                            <ul className="dropdown-menu  text-white" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                        <label htmlFor="fromAge">From Age</label>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="fromAge" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                                -- Please Select --
                            </button>
                            <ul className="dropdown-menu  text-white" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                        <div className="dropdown">
                            <label htmlFor="toAge">To Age</label>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="toAge" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                                -- Please Select --
                            </button>
                            <ul className="dropdown-menu  text-white" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                        <div className="dropdown">
                            <label htmlFor="maritalStatus">Marital Status</label>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="maritalStatus" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                                -- Please Select --
                            </button>
                            <ul className="dropdown-menu  text-white" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                        <div className="dropdown">
                            <label htmlFor="Religion">Religion</label>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="Religion" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                                -- Please Select --
                            </button>
                            <ul className="dropdown-menu  text-white" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                        <div className="search_btn_div mt-4 dropdown">
                            <button className='search_btn'><i class="fa-solid fa-magnifying-glass"></i> Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blank_div"></div>
        </div>
    )
}

export default Home