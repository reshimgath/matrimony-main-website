import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"

const ImageSlider = ({ img1, img2, img3 }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  }
  let images = []
  if (img1) images.push(img1)
  if (img2) images.push(img2)
  if (img3) images.push(img3)

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="imgslider mx-5 mt-4  ">
            <Slider {...settings}>
              {images.map((image) => (
                <img src={image} className="img-fluid" alt="" />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
export default ImageSlider
