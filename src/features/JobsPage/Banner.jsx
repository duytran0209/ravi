import React from "react";

const Banner = () => {
  return (
    <div
      className="Banner"
      style={{
        backgroundImage:
          "url(https://ravi.com.vn/uploads/0000/24/2022/06/16/banner-tuyen-dung.png)",
      }}
    >
      <div className="background-banner">
        <div className="background-opaciti" />
      </div>
      <div className="content-banner">
        <span>TUYỂN DỤNG</span>
      </div>
    </div>
  );
};

export default Banner;
