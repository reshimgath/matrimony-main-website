import React from 'react'
import '../Details/FamilyInfo.css'
import RedNav from '../../RedNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FamilyInfo = () => {

    const navigate = useNavigate();

    const handleFamilyInfo = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata.entries());
        // console.log(data)

        axios.post("http://localhost:3031/auth/getfamilydetails", data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('accesstoken')
            }
        })
            .then((res) => {
                localStorage.setItem('datatoken', res.data.datatoken)
                navigate('/partnerpref')
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <>
            <RedNav />
            <div className="container family_info_container">
                <div className="row">
                    <h1 className="family_info_title">Family Details</h1>
                </div>

                <div className="row d-flex justify-content-center family_details_row mb-5 pt-4 pb-4">
                    <div className="col-lg-10">
                        <form onSubmit={handleFamilyInfo}>
                            <div className="row">
                                <div className="col-lg-6 d-flex mb-3">
                                    <label htmlFor="fathers_name" style={{ color: "black", width: "40%", fontFamily: "familyFont" }}>Father's Name</label>
                                    <input type="text" className='form-control' id="fathers_name" name="fathers_name" />
                                </div>

                                <div className="col-lg-6 d-flex mb-3">
                                    <label htmlFor="fathers_occupation" style={{ color: "black", width: "30%", fontFamily: "familyFont", paddingTop: "1.7%" }}>Occupation</label>
                                    <div className="btn-group me-2 fathers_occupation_group" role="group" aria-label="Second group">
                                        &nbsp;<input type="radio" id="fathers_occupation" name="fathers_occupation" value="Job" />&nbsp;<span style={{ marginTop: '2%', marginLeft: "1%" }}>Job&emsp;</span>
                                        &nbsp;<input type="radio" id="fathers_occupation" name="fathers_occupation" value="Business" />&nbsp;<span style={{ marginTop: '2%', marginLeft: "1%" }}>Business&emsp;</span>
                                        &nbsp;<input type="radio" id="fathers_occupation" name="fathers_occupation" value="Retired" />&nbsp;<span style={{ marginTop: '2%', marginLeft: "1%" }}>Retired&emsp;</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 d-flex mb-3">
                                    <label htmlFor="mothers_name" style={{ color: "black", width: "40%", fontFamily: "familyFont" }}>Mother's Name</label>
                                    <input type="text" className='form-control' id="mothers_name" name="mothers_name" />
                                </div>
                                <div className="col-lg-6 col-sm-12 d-flex mb-3">
                                    <label htmlFor="mothers_occupation" style={{ color: "black", width: "30%", fontFamily: "familyFont", paddingTop: "1.7%" }}>Occupation</label>
                                    <div className="btn-group me-2 mothers_occupation_group" role="group" aria-label="Second group">
                                        &nbsp;<input type="radio" id="mothers_occupation" name="mothers_occupation" value="Job" />&nbsp;<span style={{ marginTop: '2%', marginLeft: "1%" }}>Job&emsp;</span>
                                        &nbsp;<input type="radio" id="mothers_occupation" name="mothers_occupation" value="Business" />&nbsp;<span style={{ marginTop: '2%', marginLeft: "1%" }}>Business&emsp;</span>
                                        &nbsp;<input type="radio" id="mothers_occupation" name="mothers_occupation" value="Retired" />&nbsp;<span style={{ marginTop: '2%', marginLeft: "1%" }}>Housewife&emsp;</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 d-flex mb-4">
                                    <label htmlFor="bother_select" style={{ color: "black" }}>Brothers&emsp;</label>
                                    <select className="form-select form-select" name="bother_select" id="bother_select" aria-label=".form-select-sm example">
                                        <option value="null"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="More than 2">More than 2</option>
                                    </select>
                                </div>

                                <div className="col-lg-3 d-flex mb-4">
                                    <label htmlFor="bother_status" style={{ color: "black" }}>Married&emsp;</label>
                                    <select className="form-select form-select" name="bother_status" id="bother_status" aria-label=".form-select-sm example">
                                        <option value="null"></option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <div className="col-lg-3 d-flex mb-4">
                                    <label htmlFor="sister_select" style={{ color: "black" }}>Sisters&emsp;</label>
                                    <select className="form-select form-select" name="sister_select" aria-label=".form-select-sm example">
                                        <option value="null"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="More than 2">More than 2</option>
                                    </select>
                                </div>

                                <div className="col-lg-3 d-flex mb-4">
                                    <label htmlFor="sister_status" style={{ color: "black" }}>Married&emsp;</label>
                                    <select className="form-select form-select" name="sister_status" aria-label=".form-select-sm example">
                                        <option value="null"></option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-10 col-sm-12 col-xs-12 d-flex mb-4 w-100">
                                    <label htmlFor="property_checkbox" style={{ color: "black" }}>Property&emsp;</label>
                                    &nbsp;<input type="checkbox" name="vehicle" value="Bike" />&nbsp;Own a House&nbsp;
                                    &nbsp;<input type="checkbox" name="vehicle" value="Car" />&nbsp;Own a Farm&nbsp;
                                    &nbsp;<input type="checkbox" name="vehicle" value="Car" />&nbsp;Own a Plot&nbsp;
                                    &nbsp;<input type="checkbox" name="vehicle" value="Car" />&nbsp;Extra Additional Property&nbsp;
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <input type="submit" value="Save Details" id="basic_info_btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FamilyInfo