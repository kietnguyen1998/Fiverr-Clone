import React, { useCallback, useState } from "react";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import "react-responsive-modal/styles.css";
import { PlusOutlined, GooglePlusSquareFilled } from "@ant-design/icons";
import "react-datepicker/dist/react-datepicker.css";
import userImg from "../../assets/img/user.png";

const UserInfo = () => {
  const me = useSelector((state) => state.user.me);

  const [edit, setEdit] = useState(false);
  const [updateDesc, setUpdateDesc] = useState("");

  const handleEdit = () => setEdit(!edit);

  const handleUpdateDesc = (event) => {
    const inputDesc = event.target.value;
    setUpdateDesc(inputDesc);
  };

  const handleSubmitUpdate = useCallback((event) => {
    event.preventDefault();
    
  });

  return (
    <>
      <HeaderJobs />
      <div className="grid grid-cols-1 xl:grid-cols-10 bg-gray-200 xl:pt-10 xl:pb-20">
        <div className=" xl:col-start-2 xl:col-span-3 font-sans w-full ">
          <div className="card w-full mx-auto bg-white  shadow-xl hover:shadow pt-10 xl:pt-0">
            <div className="w-44 h-44 mx-auto ">
              {/* Show user's avatar, if not have show avatar default */}
              {me?.avatar ? (
                <img className="w-full h-full rounded-full" src={me?.avatar} />
              ) : (
                <img className="w-full h-full rounded-full" src={userImg} />
              )}
            </div>

            <div className="text-center text-xl font-medium">{me?.name}</div>

            <div className="text-center mt-2 font-light text-sm">
              {me?.email}
            </div>
            <div className="text-center font-light text-sm">{me?.phone}</div>
            <div className="px-6 text-center mt-2 font-light text-sm">
              <p>
                Front end Developer, avid reader. Love to take a long walk, swim
              </p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="flex p-4">
              <div className="w-1/2 text-center">
                <p className="font-bold">1.8 k</p> Followers
              </div>
              <div className="w-0 border border-gray-300"></div>
              <div className="w-1/2 text-center">
                <p className="font-bold">2.0 k</p> Following
              </div>
            </div>
          </div>

          {/* Show when screen on sm, md, lg */}
          <div className="bg-white xl:hidden">
            <p className="text-center text-base font-semibold py-2 border-b-2 border-green-500 mb-0">
              About
            </p>
          </div>

          <div className="flex flex-col bg-white pl-4 pt-4 xl:hidden">
            <div className="border border-gray-300 pl-2 w-3/5 py-4 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg font-semibold">Languages</h2>
              <p className="text-base">
                English -{" "}
                <span className="text-gray-400">Native/Billingual</span>
              </p>
            </div>

            <div className="border border-gray-300 pl-2 w-3/5 py-4 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg font-semibold">Linked Accounts</h2>
              <a className="text-gray-600 hover:text-current flex " href="#">
                <GooglePlusSquareFilled
                  style={{ paddingTop: 0, paddingRight: 10, fontSize: 16 }}
                />{" "}
                <p className="-mt-1 font-medium">Google</p>
              </a>
            </div>

            <div className="border border-gray-300 pl-2 w-3/5 py-4 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg mb-0 font-semibold">Skill</h2>
              <input
                className="border border-gray-300 pl-4 py-2 my-2 text-base"
                type="text"
                placeholder="Gamecoach"
              />
            </div>

            <div className="border border-gray-300 pl-2 w-3/5 py-4 md:w-1/3 lg:w-1/4">
              <h2 className="text-lg mb-0 font-semibold">Education</h2>
              <input
                className="border border-gray-300 pl-4 py-2 my-2 text-base"
                type="text"
                placeholder="Add your education"
              />
            </div>
          </div>

          {/* End */}

          <div className="card w-full mx-auto xl:mt-10 bg-white  shadow-xl hover:shadow hidden xl:block">
            <div className="grid grid-cols-2 text-center pt-5 ">
              <h4 className="text-lg font-semibold">Description</h4>
              {edit ? null : (
                <p className="cursor-pointer" onClick={handleEdit}>
                  Edit Description
                </p>
              )}

              <p className="col-span-2 text-base text-left ml-14 pl-3">
                {updateDesc}
              </p>

              {edit ? (
                <form onSubmit={handleSubmitUpdate} className="col-span-2 ">
                  <textarea
                    onChange={handleUpdateDesc}
                    value={updateDesc}
                    className="w-3/4 pl-2 pt-1 outline-none border bg-gray-100  text-sm "
                    rows="5"
                    cols="50"
                    placeholder="Add your description"
                  />
                  <br />
                  <button
                    onClick={handleEdit}
                    className="cursor-pointer mr-10 mt-2 py-2 px-4 rounded bg-white border border-gray-500 text-gray-600 text-base font-medium hover:text-green-500"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEdit}
                    className="cursor-pointer mt-2 py-2 px-4 rounded bg-green-500 border border-green-500 text-white text-base font-medium hover:bg-green-400"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              ) : null}
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4 className="text-lg font-semibold -ml-4">Language</h4>
              <p className="text-blue-700">Add New</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <>
              <div className="text-left pt-5 ml-8">
                <h4 className="text-lg font-semibold pl-8">Linked Accounts</h4>
              </div>
              <ul className="pl-10 ml-8">
                <li>
                  <a className="text-blue-800 flex justify-start mt-2" href="#">
                    <PlusOutlined
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />{" "}
                    <p className="mb-0 font-medium">Facebook</p>
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-current flex justify-start mt-2"
                    href="#"
                  >
                    <GooglePlusSquareFilled
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />{" "}
                    <p className="mb-0 font-medium">Google</p>
                  </a>
                </li>
                <li>
                  <a className="text-blue-800 flex justify-start mt-2" href="#">
                    <PlusOutlined
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />{" "}
                    <p className="mb-0 font-medium">Dribbble</p>
                  </a>
                </li>
                <li>
                  <a className="text-blue-800 flex justify-start mt-2" href="#">
                    <PlusOutlined
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />
                    <p className="mb-0 font-medium">Stack Overflow</p>
                  </a>
                </li>
                <li>
                  <a className="text-blue-800 flex justify-start mt-2" href="#">
                    <PlusOutlined
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />{" "}
                    <p className="mb-0 font-medium">Github</p>
                  </a>
                </li>
                <li>
                  <a className="text-blue-800 flex justify-start mt-2" href="#">
                    <PlusOutlined
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />{" "}
                    <p className="mb-0 font-medium">Vimeo</p>
                  </a>
                </li>
                <li>
                  <a className="text-blue-800 flex justify-start mt-2" href="#">
                    <PlusOutlined
                      style={{ paddingTop: 4, paddingRight: 10, fontSize: 16 }}
                    />{" "}
                    <p className="mb-0 font-medium">Twitter</p>
                  </a>
                </li>
              </ul>
            </>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4 className="text-lg font-semibold pr-10">Skills</h4>
              <p className="text-blue-700">Add New</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center pt-5">
              <h4 className="text-lg font-semibold ">Education</h4>
              <p className="text-blue-700">Add New</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
            <div className="grid grid-cols-2 text-center py-5">
              <h4 className="text-lg font-semibold pl-5">Certification</h4>
              <p className="text-blue-700">Add New</p>
            </div>
            <hr className="mt-8 w-4/5 text-center mx-auto" />
          </div>
        </div>

        <div className="hidden xl:block xl:col-start-5 xl:col-span-5 xl:ml-24">
          <div className="card w-full mx-auto bg-white  shadow-xl hover:shadow">
            <div className="flex justify-between px-10 py-5">
              <p className="pt-2 mb-0 text-base font-medium text-gray-500">
                It seems that you don't have any active Gigs. Get selling!
              </p>
              <button className="border bg-green-500 p-2 text-white font-medium rounded">
                Create a New Gig
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInfo;
