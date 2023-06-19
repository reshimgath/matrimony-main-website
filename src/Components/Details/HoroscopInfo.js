// @ts-nocheck 
import axios from 'axios'
import React from 'react'
import RedNav from '../../RedNav'
import "../Details/HoroscopInfo.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HoroscopInfo = () => {

    const rashiArr = ['Kumbha', 'Meen', 'Mesh', 'Vrishabh', 'Mithun', 'Kark', 'Sinh', 'Kanya', 'Tula', 'Vrishchik'];
    const nakshtraArr = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara', 'Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishaka', 'Anurada', 'Jyeshta', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhishak', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati']
    const ganArr = ['manav gan', 'dev gan', 'rakshas gan'];
    const nadiArr = ['Aadi Nadi', 'Madhya Nadi', 'Antya Nadi']

    const notify = (p, msg) => p ? toast.success(msg) : toast.error(msg);
    const handleHororscope = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post(`${process.env.REACT_APP_BASEURL}/auth/gethoroscopedetails`, data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            localStorage.setItem('datatoken', res.data.datatoken)
        }).catch((err) => {
            notify(0, "Something went wrong..!")
        })
    }
    return (
        <>
            <RedNav />
            <div className="container Basic_info_container">
                <div className="row">
                    <h1 className="horoscope_info_title">Horoscope Information</h1>
                </div>
                <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <form onSubmit={handleHororscope}>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="rashi" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Rashi --</option>
                                        {
                                            rashiArr?.map((val, id) => {
                                                return (
                                                    <option value={val}>{val}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="nakshatra" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Nakshatra --</option>
                                        {
                                            nakshtraArr?.map((val, id) => {
                                                return (
                                                    <option value={val}>{val}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="mangal" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Mangal --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="N/A">N/A</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <input type="text" name="charan" className='form-control' placeholder='Charan' />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    {/* <input type="datetime-local" name="time_of_birth" id="time_of_birth" className='form-control' /> */}
                                    <input type="text" name="time_of_birth" className="form-control" onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")} placeholder={'Birth Time'} />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <input type="text" name="place_of_birth" id="place_of_birth" className='form-control' placeholder='Birth Place' />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="nadi" className="form-select form-select" aria-label="form-select-sm example">
                                        <option value="" selected>-- Nadi --</option>
                                        {
                                            nadiArr?.map((val, id) => {
                                                return (
                                                    <option value={val}>{val}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <input type="text" name="devak" className='form-control' placeholder='Devak' />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="gan" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option valule="" selected>-- Gan --</option>
                                        {
                                            ganArr?.map((val, id) => {
                                                return (
                                                    <option value={val}>{val}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <input type="submit" value="Submit Profile Details" id="horoscop_info_btn" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HoroscopInfo