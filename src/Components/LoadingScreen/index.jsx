import React, { useEffect } from "react";
import { Spin, Space } from "antd";
import loadingImg from "../../assets/img/loading.gif";

const Loading = () => {
  useEffect(() => {
    window.document.body.style.overflow = "hidden";

    return () => {
      window.document.body.style.overflow = "initial";
    };
  }, []);

  return (
    <div className="flex justify-center align-middle bg-white z-50 fixed  w-full h-full">
      {/* <img className="w-1/5" src={loadingImg} alt="loading" /> */}
      <Space size="large">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loading;
