import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "./style.css";

const Service = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="xl:container xl:mx-0 mx-5 my-0  xl:my-20">
      <h2 className="text-4xl py-2 pb-3 font-medium xl:text-3xl  ml-4">
        Popular professional services
      </h2>
      <Slider {...settings}>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Build your brand</p>
            <h4 className="text-white text-2xl font-bold">Logo Design</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Customize your site</p>
            <h4 className="text-white text-2xl font-bold">WordPress</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Share your message</p>
            <h4 className="text-white text-2xl font-bold">Voice Over</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Engage your audience</p>
            <h4 className="text-white text-2xl font-bold">Video Explainer</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Reach more customers</p>
            <h4 className="text-white text-2xl font-bold">Social Media</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Unlock growth online</p>
            <h4 className="text-white text-2xl font-bold">SEO</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Color your dreams</p>
            <h4 className="text-white text-2xl font-bold">Illustration</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Go global</p>
            <h4 className="text-white text-2xl font-bold">Translation</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Learn your business</p>
            <h4 className="text-white text-2xl font-bold">Data Entry</h4>
          </div>
        </NavLink>
        <NavLink to="/categories/jobs" className="rounded relative">
          <img
            className="px-4 rounded w-full h-full"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
            alt="photo"
          />
          <div className="absolute top-2 left-9 text-white">
            <p className="mb-0 font-normal text-base">Showcase your story</p>
            <h4 className="text-white text-2xl font-bold">Book Covers</h4>
          </div>
        </NavLink>
      </Slider>
    </div>
  );
};

export default Service;
