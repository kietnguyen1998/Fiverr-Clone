import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/action/auth";
import { Menu, Dropdown, Space } from "antd";
import { UserOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { fetchTitleJobs } from "../../store/action/jobs";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const me = useSelector((state) => state.user.me);
  const title = useSelector((state) => state.jobs.titleJobs);
  useEffect(() => {
    dispatch(fetchTitleJobs());
  }, [dispatch]);

  const handleSignOut = () => {
    dispatch(
      signOut(() => {
        if (history.location.pathname === "/me") {
          history.push("/");
        }
      })
    );
  };

  const [header, setHeader] = useState(false);
  const [addHeader, setAddHeader] = useState(false);

  const changeLayoutHeader = () => {
    if (window.scrollY >= 150) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const addLayoutHeader = () => {
    if (window.scrollY >= 150) {
      setAddHeader(true);
    } else {
      setAddHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLayoutHeader);

    return () => window.removeEventListener("scroll", changeLayoutHeader);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", addLayoutHeader);

    return () => window.removeEventListener("scroll", addLayoutHeader);
  }, []);

  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => setSideBar(!sideBar);

  const [showOption, setShowOption] = useState(false);
  const handleShowOption = () => {
    setShowOption(!showOption);
  };

  return (
    <header
      // className={path ? "lg:fixed lg:p-4 z-40 w-full " : "xl:p-4 xl:pb-0"}
      className={` w-full z-40  lg:p-4 xl:pb-0 lg:fixed ${
        header
          ? "bg-white lg:fixed transition duration-300 "
          : " xl:p-4  transition duration-500"
      }`}
    >
      <div className="grid grid-cols-3 mx-auto h-16 border-b md:border-0  md:px-0 md:container xl:pl-20  xl:flex xl:justify-between  ">
        {/* responsive header */}
        <div className="relative z-40 col-span-3 grid grid-cols-3 xl:hidden  md:grid-cols-8 ">
          {header ? (
            <p
              onClick={handleSideBar}
              className="pl-6 pt-5 col-span-1 md:col-start-1 md:pl-16 md:pt-7 lg:pt-5 lg:pl-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 z-20 md:text-black lg:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </p>
          ) : (
            <p
              onClick={handleSideBar}
              className="pl-6 pt-5 col-span-1 md:col-start-1 md:pl-16 md:pt-7 lg:pt-5 lg:pl-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 z-20 md:text-black lg:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </p>
          )}

          {/* Sidebar */}

          <div
            style={{ zIndex: 1000 }}
            className={` w-full fixed inset-y-0 left-0 ease-out transform translate-x-0 ${
              sideBar
                ? "transition duration-600 ease-out translate-x-0  "
                : "transition duration-600 ease-in -translate-x-full "
            }`}
          >
            <div
              onClick={handleSideBar}
              className={`bgSideBar w-1/2 fixed inset-y-0 right-0 z-10 overflow-y-auto ease-out transform translate-x-0 md:w-2/3 lg:w-3/4 ${
                sideBar ? "translate-x-0  " : " -translate-x-full"
              }`}
            ></div>
            <div className=" bg-white transition duration-600 ease-linear w-1/2 md:w-1/3 lg:w-1/4">
              <div className="ml-5 pt-5 ">
                <div className="grid grid-cols-3">
                  {me ? (
                    <p className="col-span-2 pt-3 text-base">Hello, Kudo</p>
                  ) : (
                    <NavLink className="col-span-2 " to="/signin">
                      <button className=" bg-green-500 text-base rounded text-white p-2 ">
                        Join Fiverr
                      </button>
                    </NavLink>
                  )}
                  <span
                    onClick={handleSideBar}
                    className="col-start-3 text-center text-gray-500 text-2xl"
                  >
                    <CloseOutlined />
                  </span>
                </div>
                <ul className="pl-2 pt-4">
                  <li className="py-2 ">
                    <NavLink
                      to="/signin"
                      className="text-base text-gray-500 hover:text-gray-500"
                    >
                      Signin
                    </NavLink>
                  </li>
                  <li className="py-2 text-base text-gray-500">
                    Browse Categories
                  </li>
                  <li className="py-2 text-base text-gray-500">Explore</li>
                  <li className="py-2 text-base text-gray-500">Fiverr Pro</li>
                  <li className="py-2 text-base text-gray-500">
                    Fiverr Business
                  </li>
                </ul>
                <div className="pb-64 pt-8 pl-2">
                  <h4 className="text-gray-500 text-base">General</h4>
                  <hr />
                  <ul>
                    <li className="text-gray-500 py-2 text-base">Home</li>
                    <li className="text-gray-500 py-2 text-base">English</li>
                    <li className="text-gray-500 py-2 text-base">$USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* End sidebar */}

          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="pt-4 pl-6  lg:hidden md:col-start-2 md:pl-1 md:pt-6 lg:pt-4"
          >
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#404145">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>

              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </NavLink>

          {header ? (
            <NavLink
              to="/"
              aria-label="Back to homepage"
              className="pt-4 pl-6 hidden lg:block md:col-start-2 md:pl-1 lg:-ml-16"
            >
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#404145">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </NavLink>
          ) : (
            <NavLink
              to="/"
              aria-label="Back to homepage"
              className="pt-4 pl-6 hidden lg:block md:col-start-2 md:pl-1 lg:-ml-16"
            >
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </NavLink>
          )}

          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="pt-4 pl-6 hidden xl:block md:col-start-2 md:pl-1"
          >
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </NavLink>

          {header ? (
            <ul className="mb-0 hidden lg:flex lg:col-start-4 lg:col-span-3 lg:justify-center lg:mt-2 ">
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-black font-semibold text-base"
                >
                  Fiverr Business
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-black font-semibold text-base"
                >
                  Explore
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-black font-semibold text-base"
                >
                  Become a Seller
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="mb-4 hidden lg:flex lg:col-start-4 lg:col-span-3 lg:justify-center lg:mt-2 ">
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                >
                  Fiverr Business
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                >
                  Explore
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/"
                  className="flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                >
                  Become a Seller
                </NavLink>
              </li>
            </ul>
          )}

          {me ? (
            <div className="relative inline-block text-center md:col-start-7  lg:mx-auto">
              {header ? (
                <div onClick={handleShowOption} className="text-black pt-1.5">
                  <UserOutlined
                    style={{
                      paddingLeft: "3.5rem",
                      paddingTop: 6,
                      fontSize: "2rem"
                    }}
                  />
                </div>
              ) : (
                <div
                  onClick={handleShowOption}
                  className="text-white md:text-black pt-1.5 md:pt-3 lg:pt-1.5 lg:text-white"
                >
                  <UserOutlined
                    style={{
                      paddingLeft: "3.5rem",
                      paddingTop: 6,
                      fontSize: "2rem"
                    }}
                  />
                </div>
              )}
              {showOption && (
                <div
                  className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <NavLink
                      to="/me"
                      className="text-gray-700 block text-left px-4 py-1 text-sm font-medium"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Profile
                    </NavLink>

                    <button
                      onClick={handleSignOut}
                      type="button"
                      className="text-gray-700 block w-full text-left px-4 pb-1 text-sm font-medium"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink
                to="/signin"
                className={
                  header
                    ? "text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:col-start-7 md:text-black hidden md:block lg:text-black l "
                    : "text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:col-start-7 md:text-black hidden md:block lg:text-white "
                }
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signin"
                className="text-font-semibold text-base font-semibold text-center mt-5 text-gray-600 md:mr-16  md:col-start-8 md:text-black lg:h-7 lg:rounded lg:text-white lg:border-green-600 lg:bg-green-500 "
              >
                Join
              </NavLink>
            </>
          )}
        </div>

        {/* End responsive header */}

        <>
          {header ? (
            <NavLink
              to="/"
              aria-label="Back to homepage"
              className="pt-3 xl:block hidden md:hidden sm:flex sm:items-center p-2 col-start-2"
            >
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#000">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </NavLink>
          ) : (
            <NavLink
              to="/"
              aria-label="Back to homepage"
              className="pt-3 xl:block hidden md:hidden sm:flex sm:items-center p-2 col-start-2"
            >
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#fff">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </NavLink>
          )}

          {header ? (
            <div className="relative w-1/4 -ml-52 mt-1">
              <SearchOutlined
                className="text-xl text-black absolute left-1 top-1 z-20 "
                style={{ color: "#9ca3af" }}
              />
              <input
                className="w-3/4 pl-6 py-2 rounded-tl rounded-bl outline-none border"
                type="text"
                placeholder="Find Services"
              />
              <button className=" py-2 px-4 border bg-green-500 border-green-500 text-white rounded-tr rounded-br">
                Search
              </button>
            </div>
          ) : null}

          <ul className="mb-4 items-stretch mr-14 hidden space-x-3 xl:flex">
            <li className="flex">
              <NavLink
                to="/"
                className={
                  header
                    ? "flex items-center px-2 -mb-1 hover:text-black text-black font-semibold text-base"
                    : "flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                }
              >
                Fiverr Business
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className={
                  header
                    ? "flex items-center px-2 -mb-1 hover:text-black text-black font-semibold text-base"
                    : "flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                }
              >
                Explore
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className={
                  header
                    ? "flex items-center px-2 -mb-1 hover:text-black text-black font-semibold text-base"
                    : "flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                }
              >
                Become a Seller
              </NavLink>
            </li>
            {me ? (
              <li className="flex">
                <NavLink
                  to="/me"
                  className={
                    header
                      ? "flex items-center px-2 -mb-1 hover:text-black text-black font-semibold text-base"
                      : "flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                  }
                >
                  Hi, {me.name}
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className={
                    header
                      ? "flex items-center px-2 -mb-1 hover:text-black text-black font-semibold text-base"
                      : "flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                  }
                >
                  Sign out
                </button>
              </li>
            ) : (
              <>
                <li className="flex">
                  <NavLink
                    to="/signin"
                    className={
                      header
                        ? "flex items-center px-2 -mb-1 hover:text-black text-black font-semibold text-base"
                        : "flex items-center px-2 -mb-1 hover:text-green-500 text-white font-semibold text-base"
                    }
                  >
                    Sign In
                  </NavLink>
                </li>
                <li className="flex mt-2">
                  <NavLink
                    to="/signin"
                    className={
                      header
                        ? "flex items-center px-6 h-8 -mb-1 bg-green-500  hover:text-white text-white text-base font-semibold border border-green-500  hover:border-green-500 rounded "
                        : "flex items-center px-6 h-8 -mb-1 bg-transparent  hover:text-white text-white text-base font-semibold border border-white hover:bg-green-500 hover:border-green-500 rounded "
                    }
                  >
                    Join
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </>
      </div>

      {addHeader ? (
        <div className=" border-t border-gray-300 hidden overflow-x-auto overflow-y-hidden md:block transition duration-500 ease-linear">
          <div className="container flex flex-auto flex-wrap text-center">
            {title.slice(0, 10).map((item) => {
              return (
                <Space
                  key={item._id}
                  className=" mt-3 md:mr-3 lg:mr-5 xl:mr-8 h-10 "
                  direction="vertical"
                >
                  <Space wrap>
                    <Dropdown
                      overlay={
                        <Menu className="grid grid-cols-6  w-auto ml-40">
                          {item.subTypeJobs.map((subType) => {
                            return (
                              <Menu.Item
                                key={subType._id}
                                className="col-span-1"
                              >
                                <p className="text-base">{subType.name}</p>
                              </Menu.Item>
                            );
                          })}
                        </Menu>
                      }
                    >
                      <p className="subType cursor-pointer text-base text-gray-600 font-medium">
                        {item.name}
                      </p>
                    </Dropdown>
                  </Space>
                </Space>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
