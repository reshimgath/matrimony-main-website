// @ts-nocheck 
import React from 'react'
import './About.css'
import RedNav from './RedNav'
import aboutImg from './images/about.avif'

const About = () => {
    return (
        <>
            <RedNav />

            <div className="container-fluid about_main_div">
                <div className='side_border_title_div'>
                    <h2 className='side_border_title text-center'>Who We Are..?</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className='about_img_div'>
                            <img className="about_img mx-auto d-block" src={aboutImg} />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className='about_description container mb-5'>
                            <p style={{ textAlign: 'center' }}>
Abouts us goes here....
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
