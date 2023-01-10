import React from 'react'
import RedNav from '../../RedNav'
import "../Details/HoroscopInfo.css"

const HoroscopInfo = () => {
    return (
        <>
            <RedNav />
            <div className="container Basic_info_container">
                <div className="row">
                    <h1 className="horoscope_info_title">Horoscope Information</h1>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <form>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Rashi --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Nakshatra --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Mangal --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Charan --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <input type="datetime-local" name="" id="" className='form-control' />
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <input type="text" name="" id="" className='form-control' placeholder='Birth Place' />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Nadi --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Devak --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Gan --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <input type="button" value="Save Details" id="horoscop_info_btn" />
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