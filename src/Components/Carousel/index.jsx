import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { searchJobByName } from "../../store/action/jobs";
import { NavLink } from "react-router-dom";

const HomeCarousel = (props) => {
  function SampleNextArrow(props) {
    const { style } = props;
    return <div style={{ ...style, display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div style={{ ...style, display: "none" }} />;
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 0,
          autoplay: false,
          fade: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 0,
          autoplay: false,
          fade: false
        }
      }
    ]
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobs.searchJob);

  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value) => {
      return value.subType?.name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    dispatch(searchJobByName());
  }, [dispatch]);

  return (
    <>
      <Slider {...settings}>
        <div className="relative">
          <div className="hero hero-andrea"></div>
          <div className="hidden lg:block absolute right-24 bottom-8">
            <p className="text-lg text-white">
              Andrea, <span className="font-semibold">Fashion Designer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-moon"></div>
          <div className="absolute right-24 bottom-8 hidden lg:block">
            <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Moon, <span className="font-semibold">Marketing Experts</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-ritika"></div>
          <div className="absolute right-24 bottom-8 hidden lg:block">
            <p className="text-lg text-white">
              Ritika,
              <span className="font-semibold"> Shoemaker and Designer</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-zach"></div>
          <div className="absolute right-24 bottom-8 hidden lg:block">
            <p className="text-lg text-white">
              Zach, <span className="font-semibold">Bar Owner</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="hero hero-gabrielle"></div>
          <div className="absolute right-24 bottom-8 hidden lg:block">
            <Rate disabled defaultValue={5} className="text-xs" />
            <p className="text-lg text-white">
              Gabrielle, <span className="font-semibold">Video Editor</span>
            </p>
          </div>
        </div>
      </Slider>

      <div className="grid grid-cols-2 text-white absolute top-24 left-8 md:left-16 md:pr-8 lg:top-48 lg:left-10  xl:top-36 xl:left-24 -translate-x-1/2 translate-y-1/2">
        <div className="col-span-2 lg:w-2/3 xl:w-full xl:col-span-1">
          <h2 className="col-span-2  text-white text-4xl pr-8 pb-4 lg:text-5xl xl:col-span-1 ">
            Find the perfect <i className="font-serif">freelance</i> services
            for your business
          </h2>
          <div className="col-span-2 lg:col-span-1 relative mb-4 pr-8 lg:pr-0">
            <SearchOutlined
              className="text-xl text-black absolute left-4 top-2 z-20 "
              style={{ color: "#9ca3af" }}
            />

            <input
              onChange={handleSearch}
              value={wordEntered}
              className="relative pl-11 mb-4 lg:mb-0 h-12 w-full lg:w-9/12 rounded lg:rounded-tr-none lg:rounded-br-none lg:rounded-tl lg:rounded-bl outline-none text-black"
              placeholder="Try &#34;buiding mobile app&#34;"
              type="text"
            />

            <button className="bg-green-500 md:z-10 text-white h-12 px-6 w-full lg:w-1/6 rounded lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr lg:rounded-br">
              Search
            </button>

            {filteredData.length !== 0 && (
              <div className="searchBar col-span-2 overflow-y-auto bg-white z-30 absolute top-10 lg:w-3/4 ">
                {filteredData?.map((item) => {
                  return (
                    <NavLink to={`/category/${item.type?._id}`} key={item._id}>
                      <p className="text-black hover:text-black ml-5">
                        {item.subType.name}
                      </p>
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="col-start-1 hidden lg:block lg:col-span-2 h-16 ">
          <ul className="flex ">
            <span className="font-semibold">Popular: </span>
            <li className=" mx-2">
              <p className="font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer lg:px-3 ">
                Website Design
              </p>
            </li>
            <li className=" mx-2">
              <p className="font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer lg:px-3 ">
                WordPress
              </p>
            </li>
            <li className=" mx-2">
              <p className="font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer lg:px-3 ">
                Logo Design
              </p>
            </li>
            <li className=" mx-2">
              <p className="font-semibold border-2 rounded-xl hover:bg-white hover:text-black cursor-pointer lg:px-3 ">
                Dropshipping
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
