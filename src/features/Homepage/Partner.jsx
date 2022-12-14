import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Scrollbar, Pagination } from "swiper";
import styled from "styled-components";

const PartnerStyled = styled.section`
  /* Partner */

  margin: 80px 0;
  .partner-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }

  .partner-box span {
    font-family: "Prata";
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    text-transform: uppercase;
    color: #181c23;
    margin: 0 0 30px 0;
  }

  .partner-box p {
    color: #666666;
    width: 72.25%;
    margin-bottom: 50px;
  }

  .partner-max-width {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 86px;
    position: relative;
  }

  .panrtner-carousel {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    z-index: 1;
  }

  .panrtner-carousel-card {
    padding: 16px;
    border: 1px solid #f5f5f5;
    cursor: pointer;
  }

  .panrtner-carousel-card:hover {
    border: 1px solid #ba9256;
  }

  .panrtner-carousel-card img {
    height: 50px;
  }

  .owl-stage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .owl-nav {
    width: 100%;
    height: 100px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 95px;
    z-index: 0;
  }

  .owl-prev {
    color: #fff;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-left: -85px;
    margin-top: -195px;
    border: none;
  }

  .owl-next {
    color: #fff;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin-right: -85px;
    margin-top: -195px;
    border: none;
  }

  .partner-btn {
    width: 100%;
    height: 100%;
    border: 2px solid #bcbcbc;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .partner-btn:hover {
    background-color: #ba9256;
    transition: 0.1s;
  }

  .partner-btn:hover i {
    color: #fff;
  }

  .partner-btn i {
    font-size: 15px;
    color: #bcbcbc;
  }
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0 !important;
  }
  .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0px;
  }
  @media (max-width: 1601px) {
    .owl-prev {
      width: 37.5px;
      height: 37.5px;
      margin-left: -76px;
    }

    .owl-next {
      width: 37.5px;
      height: 37.5px;
      margin-right: -76px;
    }
    .news-row-text p {
      font-size: 24px;
    }
  }
`;

const Partner = () => {
  return (
    <PartnerStyled id="partner" className="partner">
      <div className="partner-box">
        <span>?????i t??c c???a RAVI</span>
        <p>
          Danh s??ch ?????i t??c ng??y c??ng d??i th??m l?? minh ch???ng cho m???i quan h??? h???p
          t??c hi???u qu??? gi???a RAVI c??ng c??c ?????i t??c t???i Vi???t Nam v?? nhi???u qu???c gia
          tr??n th??? gi???i. RAVI t??? h??o ???????c k??? t??n c??c th????ng hi???u n???i ti???ng m??
          RAVI ???? v?? ??ang h???p t??c.
        </p>
        <div className="partner-max-width">
          <div className="panrtner-carousel owlCarousel">
            <Swiper
              modules={[Navigation, Scrollbar, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              grabCursor={true}
              className="mySwiper"
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/bw.png"
                    alt="slide"
                  />
                </div>{" "}
              </SwiperSlide>

              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/bw.png"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/logoapave.png"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/bio.png"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/logo-mora-group.png"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/logo-css-group.png"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="panrtner-carousel-card">
                  <img
                    className="panrtner-img"
                    src="https://ravi.com.vn/uploads/0000/1/2022/05/01/logo-new.png"
                    alt="slide"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </PartnerStyled>
  );
};

export default Partner;
