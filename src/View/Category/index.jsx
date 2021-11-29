import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import HeaderJobs from "../../Components/Jobs/HeaderJobs";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { fetchListTypeJobs, fetchSubTypeJobs } from "../../store/action/jobs";

const Category = (props) => {
  const subType = useSelector((state) => state.jobs.subTypeJobs);
  // const listTypeJobs = useSelector((state) => state.jobs.typeJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    const { _id } = props.match.params;
    dispatch(fetchSubTypeJobs(_id));
  }, [dispatch]);

  // useEffect(() => {
  //   const { _id } = props.match.params;
  //   dispatch(fetchListTypeJobs(_id));
  // }, [dispatch]);

  return (
    <>
      <HeaderJobs />

      <div className="ml-4 xl:ml-0 xl:container">
        <div className="text-center mb-10 mx-9">
          <h1 className="text-3xl font-bold mt-5 mb-0">{subType.name}</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
            laboriosam.
          </p>
        </div>
        <div className="xl:container xl:grid xl:grid-cols-6">
          <div className="col-start-1 col-span-2 ml-24 hidden xl:block">
            <h1 className="text-lg font-semibold pb-2">{subType.name}</h1>

            {subType.subTypeJobs?.map((item) => {
              return (
                <ul key={item._id}>
                  <li className="mb-3">
                    <NavLink
                      to={`/categories/jobs`}
                      className="text-base text-gray-500 hover:text-gray-500"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                </ul>
              );
            })}
          </div>

          <div className="xl:col-start-3 xl:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-3">
              {subType.subTypeJobs?.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="col-span-1 -mb-8 h-48 md:h-80 lg:-mb-14 xl:-mb-16 "
                  >
                    <NavLink to={`/categories/jobs`}>
                      <img
                        className="w-full h-3/5 pr-4 rounded"
                        src="https://picsum.photos/200"
                        alt="jobs"
                      />
                      <p className="text-base font-medium text-black hover:text-black mb-0">
                        {item.name}
                      </p>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-8 bg-gray-200 text-center px-5 lg:px-0">
        <div className="lg:col-start-2 lg:col-span-2  mx-4 lg:py-4">
          <h5 className="text-xl pt-4 ">
            Your <b>Terms</b>
          </h5>
          <p className="lg:pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
        <div className=" lg:col-span-2  mx-4 lg:py-4">
          <h5 className="text-xl lg:pt-4 ">
            Your <b>Timeline</b>
          </h5>
          <p className="lg:pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
        <div className=" lg:col-span-2  mx-4 lg:py-4">
          <h5 className="text-xl lg:pt-4 ">
            Your <b>Safety</b>
          </h5>
          <p className="lg:pb-4 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            amet.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Category;
