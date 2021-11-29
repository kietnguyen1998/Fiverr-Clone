import React, { useState } from "react";
import { CheckCircleOutlined, CaretRightOutlined } from "@ant-design/icons";

import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-modal/styles.css";
import "./style.css";
import Video from "../../assets/video/fiverr-video.mp4";

const Proposition = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="xl:container lg:flex lg:justify-center">
      <div className="lg:pr-16 lg:mx-8 lg:w-1/2 xl:w-1/2 xl:ml-5 xl:pr-40 xl:mx-0 mx-8">
        <h2 className="text-3xl lg:text-4xl" style={{ color: "#404145" }}>
          A whole world of freelance talent at your fingertips
        </h2>
        <ul>
          <li className="my-4">
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-3  pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              The best for every budget
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </li>
          <li className="my-4">
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-2  pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              Quality work done quickly
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </li>
          <li className="my-4">
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-2 pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              Protected payments, every time
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </li>
          <li className="my-4">
            <h5 className="text-lg">
              <CheckCircleOutlined
                className="-mt-2  pr-5 w-6 h-6 leading-none"
                style={{ color: "rgb(122, 125, 133)" }}
              />
              24/7 support
            </h5>
            <p className="text-lg" style={{ color: "#62646a" }}>
              Questions? Our round-the-clock support team is available to help
              anytime, anywhere.
            </p>
          </li>
        </ul>
      </div>
      <div className="relative pt-10 lg:mt-32 lg:mr-8 lg:w-1/2 xl:w-1/2 xl:mt-0">
        <LazyLoadImage
          className="w-full"
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt=""
        />
        <div className="absolute top-36 left-44 md:top-64 md:left-96 lg:top-40 lg:left-52 xl:top-56 xl:left-80">
          <button onClick={onOpenModal}>
            <CaretRightOutlined
              style={{
                fontSize: 48,
                color: "#fff",
                backgroundColor: "#02020287",
                borderRadius: "50%",
                padding: 5,
                paddingLeft: 10
              }}
            />
          </button>
          <Modal open={open} onClose={onCloseModal} center={true}>
            <ReactPlayer
              playing={true}
              controls={true}
              url={Video}
              className="react-player"
              width="100%"
              height="100%"
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Proposition;
