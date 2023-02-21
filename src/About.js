import React from 'react'
import './About.css'
import RedNav from './RedNav'
import aboutImg from './images/about.avif'

const About = () => {
    return (
        <>
            <RedNav />

            <div className="container-fluid about_main_div mt-5 mb-5">

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
                            <p>
                                <em> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsum excepturi aliquid. Voluptatem facere reprehenderit provident esse ratione reiciendis numquam repellat ea aliquam culpa magni consequuntur nobis excepturi porro officia ipsum cupiditate ad error ut, magnam minus, eaque ipsa! Soluta enim molestiae expedita accusamus eligendi deleniti aliquid officiis tempora aut.</em>
                                <em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dolorum natus facilis harum, vero nobis delectus a soluta, aperiam et maxime error consequuntur, cumque ullam fugiat eius non inventore modi dolores? Dolore consequuntur labore eaque, eveniet totam unde officiis sunt reiciendis quibusdam error voluptatem cumque minus porro! Porro, soluta odit!</em>
                            </p>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default About