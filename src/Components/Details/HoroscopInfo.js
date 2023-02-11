import axios from 'axios'
import React from 'react'
import RedNav from '../../RedNav'
import "../Details/HoroscopInfo.css"

const HoroscopInfo = () => {

    const handleHororscope = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        console.log(data)

        axios.post('http://localhost:3031/auth/gethoroscopedetails', data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            localStorage.setItem('datatoken', res.data.datatoken)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <RedNav />
            <div className="container Basic_info_container">
                <div className="row">
                    <h1 className="horoscope_info_title">Horoscope Information</h1>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <form onSubmit={handleHororscope}>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="rashi" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Rashi --</option>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="nakshatra" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Nakshatra --</option>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="mangal" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Mangal --</option>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="charan" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Charan --</option>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
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
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="devak" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option value="" selected>-- Devak --</option>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="gan" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option valule="" selected>-- Gan --</option>
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
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