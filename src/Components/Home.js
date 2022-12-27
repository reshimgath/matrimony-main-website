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

            <div className="search_area_background"></div>

            <div className="blank_div"></div>
        </div>
    )
}

export default Home