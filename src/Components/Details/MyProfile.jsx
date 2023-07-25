// @ts-nocheck
import axios from "axios"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../ContextCreation/AuthContext/AuthContext"
import RedNav from "../../RedNav"
import "./MyProfile.css"
import Singlepageprofile from "./Singlepageprofile"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SinglePageProfileUpdate from "./SinglePageProfileUpdate"
const MyProfile = () => {
  const notify = (p, msg) => (p ? toast.success(msg) : toast.error(msg))
  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  const [sendOtp, setSendOtp] = useState(false)
  const [showError, setShowError] = useState(false)
  const handleOTP = (e) => {
    setSendOtp(true)
    fetch(`${process.env.REACT_APP_BASEURL}/auth/resendotp`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("accesstoken"),
      },
    })
      .then((response) => response.text())
      .catch((err) => notify(0, "Something went wrong..!"))
  }

  const handleOTPSubmit = (event) => {
    event.preventDefault()
    const formdata = new FormData(event.target)
    const data = Object.fromEntries(formdata.entries())

    axios
      .post(`${process.env.REACT_APP_BASEURL}/auth/verifyotp`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        localStorage.setItem("datatoken", res.data.datatoken)
        authContext.dataDispatch({ type: "changeState" })
        navigate("/")
      })
      .catch((err) => {
        setShowError(true)
        notify(0, "Something went wrong..!")
      })
  }
  return (
    <>
      <RedNav />
      <div className="container-fluid">
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div>
          {
            // authContext.dataState.verified
            // authContext.dataState.verified ? (<div> <Singlepageprofile /> </div>) :
            authContext.dataState.verified ? (
              <div>
                {" "}
                <SinglePageProfileUpdate />{" "}
              </div>
            ) : (
              <div>
                <h2 className="verify_title">Verify Your Email</h2>
                <h4 className="verify_subTitle">
                  Click Below To Get OTP On Your Registered Email
                </h4>
                {sendOtp ? (
                  <button disabled className="getOTPBtn">
                    OTP Sent!
                  </button>
                ) : (
                  <button className="getOTPBtn" onClick={handleOTP}>
                    Get OTP
                  </button>
                )}
              </div>
            )
          }

          {sendOtp ? (
            <>
              <div
                className="mt-4 mb-3"
                style={{ color: "red", textAlign: "center" }}
              >
                OTP Will Expire in 3 Minutes!
              </div>
              <form onSubmit={handleOTPSubmit}>
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <input type="number" name="otp" className="form-control" />
                    <input
                      type="submit"
                      value="Submit Now"
                      className="getOTPBtn"
                    />
                  </div>
                </div>
              </form>
            </>
          ) : (
            ""
          )}
          {showError ? (
            <p className="mt-3" style={{ color: "red", textAlign: "center" }}>
              Invalid OTP...!
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default MyProfile
