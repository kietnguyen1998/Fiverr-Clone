import React from "react";
import "./styleMarketPlace.css"

const MarketPlace = () => {
  return (
    <div className="xl:container xl:mx-0 mx-8">
      <h2 className="text-3xl my-20 font-bold">Explore the marketplace</h2>
      <div>
        <ul className="flex flex-wrap text-center">
          <li className="mb-14 w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/5 col-auto ">
            <a className="image" href="#" >
              <img
                loading="lazy"
                className=" w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics & Design"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Graphics & Design</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 col-span-1">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Digital Marketing"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Digital Marketing</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Writing & Translation"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black"> Writing & Translation</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Video & Animation"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Video & Animation</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Music & Audio"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Music & Audio</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Programming & Tech"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Programming & Tech</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Business"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Business</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Lifestyle"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black">Lifestyle</p>
            </a>
          </li>

          <li className="mb-14 w-1/2 md:w-1/3 md:mt-3  xl:mt-0  lg:w-1/4 xl:w-1/5">
            <a className="image" href="#">
              <img
                loading="lazy"
                className="w-1/3 lg:w-1/4 xl:mt-3 pb-1 xl:w-1/5 m-auto "
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Data"
              />
              <div className="underLine"></div>
              <p className="mt-3 text-base text-black md:mt-5 lg:mt-3">Data</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MarketPlace;
