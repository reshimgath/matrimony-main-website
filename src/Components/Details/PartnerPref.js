import React from 'react'
import '../Details/PartnerPref.css'
import RedNav from '../../RedNav'

const PartnerPref = () => {
    return (
        <>
            <RedNav />
            <div className="container">
                <div className="row">
                    <h1 className="partner_title">Partner Preference</h1>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <form>
                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Education --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Occupation --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Salary / Annual Package --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Complexion --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Height --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Religion --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Caste --</option>

                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- State --</option>
                                    </select>
                                </div>

                                <div className="col-lg-4 mb-4">
                                    <select class="form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>-- Location --</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <input type="button" value="Save Details" id="partner_pref_btn" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerPref