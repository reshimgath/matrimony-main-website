import React from 'react'
import { useNavigate } from 'react-router-dom'
import RedNav from '../../RedNav'
import "../Details/HoroscopInfo.css"

const HoroscopInfo = () => {
    const navigate = useNavigate()

    const handleHororscope = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());

        axios.post('', data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        }).then((res) => {
            localStorage.setItem('datatoken', res.data.datatoken)
            navigate('/horoscopeinfo')
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
                                        <option selected>-- Rashi --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="nakshatra" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Nakshatra --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="mangal" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Mangal --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="charan" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Charan --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <input type="datetime-local" name="time_of_birth" id="time_of_birth" className='form-control' />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <input type="text" name="place_of_birth" id="place_of_birth" className='form-control' placeholder='Birth Place' />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select name="nadi" className="form-select form-select" aria-label="form-select-sm example">
                                        <option selected>-- Nadi --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="devak" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Devak --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select name="gan" className="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Gan --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <input type="submit" value="Save Details" id="horoscop_info_btn" />
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