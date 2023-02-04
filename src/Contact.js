import React from 'react'
import RedNav from './RedNav'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <RedNav />
            <div className="container-fluid banner_container">
                <h2 className='banner_title'>Contact Us</h2>
            </div>

            <div className="container-fluid ">
                <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kolhapur%20Railway%20station%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>.</a>
            </div>

            <div className="container contact_form_container">
                <div className="row">
                    <h2 className='contact_form_title'>Contact Form</h2>
                    <p className='contact_form_tagline'>Looking forward to listening to you!</p>
                </div>
                <form>
                    <div className="row mt-3">
                        <div className="col-lg-6 mb-3">
                            <input type="text" name="" placeholder='Your Name' className='form-control' />
                        </div>

                        <div className="col-lg-6 mb-3">
                            <input type="email" name="" placeholder='Your Email' className='form-control' />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <input type="number" name="" placeholder='Your Contact Number' className='form-control' />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <textarea name="" className='form-control' rows="5" placeholder='Your Query?'></textarea>
                        </div>

                        <div className="col-lg-12 mb-5">
                            <input type="submit" value="Send Message" id="submitMsgBtn" />
                        </div>
                    </div>
                </form>
            </div>

            <div className="container contact_details_container">
                <div className="col-lg-4">1</div>
                <div className="col-lg-4">2</div>
                <div className="col-lg-4">3</div>
            </div>
        </>
    )
}

export default Contact;