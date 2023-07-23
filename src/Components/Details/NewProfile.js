import React, { useEffect, useState } from "react"
import "./NewProfile.css"
import img1 from "../../images/Profile Images/1.jpg"
import img2 from "../../images/Profile Images/2.jpg"
import img3 from "../../images/Profile Images/3.jpg"
import img4 from "../../images/Profile Images/4.jpg"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import ladyImg from "../../images/dummy_profile_image.jpg"
import ImageSlider from "./ImageSlider"

const NewProfile = () => {
  const [profileData, setProfileData] = useState({})
  const notify = (p, msg) => (p ? toast.success(msg) : toast.error(msg))

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
        console.log(profileData)
      })
      .catch((err) => {
        notify(0, "Something went wrong..!")
      })
  }, [])
  return (
    <>
      {/* <!-- Profile Picture Section--> */}
      <div className="container-fluid">
        <div className="picture_box animate__animated animate__fadeInLeft">
          <h3 className="name">{profileData.firstname}</h3>
          <img
            className="profile_img"
            src={profileData.image1 ? profileData.image1 : ladyImg}
            alt="Profile"
          />
        </div>
      </div>

      {/* <!-- Personal Details Section--> */}
      <div className="container-fluid">
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
      <div className="container mt-5 desktop_gallery">
        <div className="row text-center text-lg-start">
          <div className="col-lg-4 col-md-4 col-6">
            <a href={img1} target="_blank" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail gallery"
                src={img1}
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <a href={img2} target="_blank" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail gallery"
                src={img2}
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <a href={img3} target="_blank" className="d-block mb-4 h-100">
              <img
                className="img-fluid img-thumbnail gallery"
                src={img3}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="container mobile_gallery">
        <h2 className="gallery-font">Gallery</h2>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner carousel-box">
            <div className="carousel-item active">
              <img
                className="d-block w-100 carousel_img"
                src={img2}
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 carousel_img"
                src={img3}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 carousel_img"
                src={img4}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>

      {/* New Carousel */}
      <ImageSlider
        img1={profileData.image1}
        img2={profileData.image2}
        img3={profileData.image3}
      />
      <div className="button animate__animated animate__bounceIn mt-5">
        <a href="#details">Get Contact Details</a>{" "}
      </div>
      <div className="container-fluid ">
        <div className="row other_details justify-content-center">
          <div
            className="col-lg-4 other_details_box animate__animated animate__slideInLeft mb-4"
            style={{ height: "auto" }}
          >
            <h3 id="details">Contact Details</h3>
            <hr />
            <div className="col-lg-12">
              <div className="col-lg-12">
                <p className="fs-5 mt-2 text-capitalize">
                  <b>Name :</b> {profileData.firstname} {profileData.lastname}
                </p>
                <p className="fs-5 mt-2">
                  <b>Conact No. :</b> {profileData.mobile}
                </p>
              </div>

              <div className="col-lg-12">
                <p className="fs-5 mt-2">
                  <b>Email ID :</b> {profileData.email}
                </p>
                <p className="fs-5 mt-2 text-capitalize">
                  <b>Address :</b> {profileData.addressLine1}
                </p>
                <p className="fs-5 mt-2">
                  <b>Father's Name :</b> {profileData.fathers_name}
                </p>
                <p className="fs-5 mt-2 text-capitalize">
                  <b>Mother's Name :</b> {profileData.mothers_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProfile
