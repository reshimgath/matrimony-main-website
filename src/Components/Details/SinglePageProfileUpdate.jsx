import React, { useEffect, useState } from "react"
import axios from "axios"
import ladyImg from "../../images/dummy_profile_image.jpg"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ImageSlider from "./ImageSlider"
import RedNav from "../../RedNav"
import "./SinglePageProfileUpdate.css"
export default function SinglePageProfileUpdate() {
  const notify = (p, msg) => (p ? toast.success(msg) : toast.error(msg))
  const [profileData, setProfileData] = useState({})
  const [resetPass, setResetPass] = useState(false)
  const [resetMsg, setResetMsg] = useState(false)
  const [newPass, setNewPass] = useState("")

  const handleReset = () => {
    if (newPass !== "") {
      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/auth/resetpassword`,
          { password: newPass },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("accesstoken"),
            },
          }
        )
        .then((res) => {
          setResetMsg(true)
          setTimeout(() => {
            setResetMsg(false)
            setResetPass(false)
            notify(1, "password reset succesfully...")
          }, 2000)
        })
        .catch((err) => {
          notify(0, "Something went wrong..!")
        })
    }
  }

  // ************** Getting Profile Data *************
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/auth/getsingleprofileofuser`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        setProfileData(res.data)
      })
      .catch((err) => {
        notify(0, "Something went wrong..!")
      })
  }, [])

  return (
    <>
      <RedNav />
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

      {/* <!-- Profile Picture Section--> */}
      <div className="container-fluid">
        <div className="picture_box animate__animated animate__fadeInLeft d-flex flex-column">
          <h3 className="name">{profileData.firstname}</h3>

          <img
            className="profile mt-2 "
            src={profileData.image1 ? profileData.image1 : ladyImg}
            alt="Profile"
          />
          <div>
            <div className="action">
              <button className="deleteProfileBtn">
                {" "}
                <Link to="/deleteprofile">Delete</Link>
              </button>
              <button className="deleteProfileBtn">
                <Link to="/updateuser">Update</Link>
              </button>
              <button
                onClick={() => {
                  setResetPass(true)
                }}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ********** Reset Passowrd Patch start *************** */}
      {resetPass ? (
        <div className="row mt-4 mb-4 justify-content-center">
          <div className="col-lg-9">
            <p>
              <b>Reset Your Password Now:</b>
            </p>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                setNewPass(e.target.value)
              }}
            />
            <button id="mypassResetBtn" onClick={handleReset}>
              Reset Now
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {resetMsg ? (
        <p
          style={{ textAlign: "center", color: "greeen" }}
          className="mt-3 mb-4"
        >
          {" "}
          <b>New Password Added..!</b>
        </p>
      ) : (
        ""
      )}

      {/* ****************** Reset Passowrd Patch Ends ****************** */}

      {/* <!-- Personal Details Section--> */}
      <div className="container-fluid mt-5">
        <div className="personal_details_box animate__animated animate__fadeInRight">
          <h3>Personal Details</h3>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p>
                <b>Gender:</b> {profileData.gender}
              </p>
              <p>
                <b>Date Of Birth:</b> {profileData.dob}
              </p>
              <p>
                <b>Religion:</b> {profileData.caste}
              </p>
              <p>
                <b>Marital Status:</b> {profileData.maritalStatus}
              </p>
              <p>
                <b>Mother Tongue:</b> {profileData.mother_tongue}
              </p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p>
                <b>Height:</b> {profileData.height}
              </p>
              <p>
                <b>Weight:</b> {profileData.weight}
              </p>
              <p>
                <b>Blood Group:</b> {profileData.bloodGroup}
              </p>
              <p>
                <b>Complexion:</b> {profileData.complexion}
              </p>
              <p>
                <b>Disabilities:</b> {profileData.disablity}
              </p>
            </div>
          </div>
          <h3>Educational / Professional Details</h3>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p>
                <b>Education:</b> {profileData.education}
              </p>
              <p>
                <b>Income Per Annum:</b> {profileData.salaryPA}
              </p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p>
                <b>Occupation:</b> {profileData.occupation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Other Details Section --> */}
      <div className="container-fluid">
        <div className="row other_details">
          <div className="col-lg-4 other_details_box animate__animated animate__slideInLeft">
            <h3>Horoscope Details</h3>
            <hr />
            <div className="col-lg-12">
              <p>
                <b>Rashi:</b> {profileData.rashi}
              </p>
              <p>
                <b>Nakshtra:</b> {profileData.nakshatra}
              </p>
              <p>
                <b>Charan:</b> {profileData.charan}
              </p>
              <p>
                <b>Nadi:</b> {profileData.nadi}
              </p>
              <p>
                <b>Gan:</b> {profileData.gan}
              </p>
              <p>
                <b>Mangal:</b> {profileData.mangal ? "Yes" : "No"}
              </p>
              <p>
                <b>Birth Time:</b> {profileData.birth_time}
              </p>
              <p>
                <b>Birth Place:</b> {profileData.birth_place}
              </p>
            </div>
          </div>
          <div className="col-lg-4 other_details_box animate__animated animate__zoomIn">
            <h3>Family Details</h3>
            <hr />
            <div className="col-lg-12">
              <p>
                <b>Father's Occupation:</b> {profileData.fathers_occupation}
              </p>
              <p>
                <b>Mother's Occupation:</b> {profileData.mothers_occupation}
              </p>
              <p>
                <b>Brother(s):</b> {profileData.bother_select}
              </p>
              <p>
                <b>Brother(s) Married?:</b> {profileData.bother_status}
              </p>
              <p>
                <b>Sister(s):</b> {profileData.sister_select}
              </p>
              <p>
                <b>Sister(s) Married?:</b> {profileData.sister_status}
              </p>
            </div>
          </div>
          <div className="col-lg-4 other_details_box animate__animated animate__slideInRight">
            <h3>Expectations</h3>
            <hr />
            <div className="col-lg-12">
              <p>
                <b>Education:</b> {profileData.education_pref}
              </p>
              <p>
                <b>Caste:</b> {profileData.caste}
              </p>
              <p>
                <b>Occupation:</b> {profileData.occupation_pref}
              </p>
              <p>
                <b>Complexion:</b> {profileData.complexion_pref}
              </p>
              <p>
                <b>Height:</b>
                {profileData.height_pref}
              </p>
              <p>
                <b>Location:</b> {profileData.location_pref}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Image Gallery Desktop / Tab View--> */}
      <div className="container mt-5  desktop_gallery">
        <div className="row text-center text-lg-start   ">
          <div className="col-lg-4 col-md-4  d-flex justify-content-center">
            <a href={profileData.image1} className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail gallery"
                src={profileData.image1}
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4   d-flex justify-content-center">
            <a
              href={profileData?.image2 ? profileData.image2 : ladyImg}
              className="d-block mb-4 h-100"
            >
              <img
                className="img-fluid img-thumbnail gallery"
                src={profileData?.image2 ? profileData.image2 : ladyImg}
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4  d-flex justify-content-center">
            <a
              href={profileData?.image3 ? profileData.image3 : ladyImg}
              className="d-block mb-4 h-100"
            >
              <img
                className="img-fluid img-thumbnail gallery"
                src={profileData?.image3 ? profileData.image3 : ladyImg}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mobile_gallery">
        <h2 className="gallery-font text-center">Gallery</h2>

        <ImageSlider
          img1={profileData.image1}
          img2={profileData?.image2 ? profileData.image2 : ladyImg}
          img3={profileData?.image3 ? profileData.image3 : ladyImg}
        />
      </div>

      <div className="container-fluid ">
        <div className="row other_details justify-content-center">
          <div
            className="col-lg-12 other_details_box animate__animated animate__slideInLeft mb-4"
            style={{ height: "auto" }}
          >
            <h3 id="details">Contact Details</h3>
            <hr />
            <div className="row">
              <div class="col-lg-6">
                <p className="fs-5 mt-2 text-capitalize">
                  <b>Name :</b> {profileData.firstname} {profileData.lastname}
                </p>
                <p className="fs-5 mt-2">
                  <b>Conact No. :</b> {profileData.mobile}
                </p>
                <p className="fs-5 mt-2">
                  <b>Email ID :</b> {profileData.email}
                </p>
              </div>

              <div className="col-lg-6">
                <p className="fs-5 mt-2">
                  <b>Father's Name :</b> {profileData.fathers_name}
                </p>
                <p className="fs-5 mt-2 text-capitalize">
                  <b>Mother's Name :</b> {profileData.mothers_name}
                </p>
                <p className="fs-5 mt-2 text-capitalize">
                  <b>Address :</b> {profileData.addressLine1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
