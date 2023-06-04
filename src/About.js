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
                            <p style={{ textAlign: 'justify' }}>
                                <em>
                                    <b>Reshimgath Matrimony</b>, the leading matrimonial website that assists individuals in finding their right life partners, began its journey in <b>2018</b> by <b>Mr. Jishan Shaikh</b>, with the goal of creating a platform that provides a secure and trustworthy space for people to meet their soulmates.
                                </em>
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                <em>
                                    <b>Reshimgath Matrimony</b> provides a range of features that allow our users to filter and search for potential partners based on their preferences, such as age, religion, location, and more. We also offer personalized matchmaking services for those who require additional assistance in finding their perfect match.
                                </em>
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                <em>
                                    At <b>Reshimgath Matrimony</b>, we are committed to providing exceptional customer service to our users. Our dedicated team is available 24/7 to assist users with any queries or concerns they may have.
                                </em>
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                <em>
                                    We believe that finding a life partner is one of the most significant decisions a person can make, and we are honored to be a part of this journey. Join us today and find the love of your life on Reshimgath.
                                </em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About