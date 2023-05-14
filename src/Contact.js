// @ts-nocheck 
import React from 'react'
import RedNav from './RedNav'
import './Contact.css'
import callIcon from './images/Contact Icons/phone.png';
import mailIcon from './images/Contact Icons/email.png';
import addressIcon from './images/Contact Icons/address.png'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
      const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post(`${process.env.REACT_APP_BASEURL}/admincrud/getqueries`, data).then((res) => {
//             console.log(res.data)
            notify(1,"Your Query Sent..! Our Team will get in touch with your shortly..!")
        }).catch((err) => {
//             console.log(err)
            notify(0,"Oops..Something went wronng..!");
        })
        
        e.target.name.value="";
        e.target.contact.value="";
        e.target.email.value="";
        e.target.message.value=""
    }

    return (
        <>
            <RedNav />
            <div className="container-fluid banner_container">
                <h2 className='banner_title'>Contact Us</h2>
            </div>
            <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <div className="container-fluid ">
                <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kolhapur%20Railway%20station%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>.</a>
            </div>

            <div className="container contact_form_container">
                <div className="row">
                    <h2 className='contact_form_title'>Contact Form</h2>
                    <p className='contact_form_tagline'>Looking forward to listening to you!</p>
                </div>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="row mt-3">
                        <div className="col-lg-6 mb-3">
                            <input type="text" name="name" placeholder='Your Name' className='form-control' required />
                        </div>

                        <div className="col-lg-6 mb-3">
                            <input type="email" name="email" placeholder='Your Email' className='form-control' required />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <input type="number" name="contact" placeholder='Your Contact Number' className='form-control' required />
                        </div>

                        <div className="col-lg-12 mb-3">
                            <textarea name="message" className='form-control' rows="5" placeholder='Your Query?'></textarea>
                        </div>

                        <div className="col-lg-12 mb-5">
                            <input type="submit" value="Send Message" id="submitMsgBtn" required />
                        </div>
                    </div>
                </form>
            </div>

            <div className="container contact_details_container mb-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt-2 d-flex justify-content-center">
                        <img src={mailIcon} alt="" className='img-fluid' />&emsp;mail@gmail.com
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt-2 d-flex justify-content-center">
                        <img src={callIcon} alt="" className='img-fluid' />&emsp;+91 1234567890
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mt-2 d-flex justify-content-center">
                        <img src={addressIcon} alt="" className='img-fluid' />&emsp;Station Road, Kolhapur. 416001
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
