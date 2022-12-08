import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const newsList = [
  {
    id: 1,
    to: "/blog/tri-an-cuoi-nam-boc-tham-trung-lon",
    src: "https://ravi.com.vn/uploads/0000/25/2022/11/04/post-fb1.png",
    time: "04/11/2022",
    title: "TRI ÂN CUỐI NĂM, BỐC THĂM TRÚNG LỚN!!!",
  },
  {
    id: 2,
    to: "blog/ravi-tien-phong-ket-hop-nghi-duong-5-sao-voi-bao-ton-rung-va-phat-trien-van-hoa-dia-phuong",
    src: "https://ravi.com.vn/uploads/0000/24/2022/06/17/z2195852213428-3ea1add558fac8a66c5df93a2d0b617b.jpg",
    time: "03/05/2022",
    title:
      "RAVI - Tiên phong kết hợp nghỉ dưỡng 5 sao với bảo tồn rừngvà phát triển văn hóa địa phương",
  },
  {
    id: 3,
    to: "blog/ravi-ap-dung-tieu-chuan-quoc-te-trong-phat-trien-nghi-duong-xanh",
    src: "https://ravi.com.vn/uploads/0000/24/2022/06/23/083a5038.jpg",
    time: "23/06/2022",
    title:
      " RAVI - Áp dụng tiêu chuẩn quốc tế trong phát triển nghỉ dưỡng xanh",
  },
  {
    id: 4,
    to: "blog/ravi-to-chuc-phong-trao-huong-ung-de-an-trong-1-ty-cay-xanh",
    src: "https://ravi.com.vn/uploads/0000/24/2022/07/28/11.jpg",
    time: "28/07/2022",
    title: 'Ravi tổ chức phong trào hưởng ứng đề án "Trồng 1 tỷ cây xanh"',
  },
];

const NewsStyled = styled.section`
  /* News */

  width: 100%;
  position: relative;
  padding-top: 7.81%;

  .news-box {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .news-box-list {
    text-align: center;
  }

  .news-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 87.5%;
    margin-right: auto;
    margin-left: auto;
    grid-column-gap: 32px;
    justify-content: center;
    margin-bottom: 50px;
  }

  .news-row-item {
    background-color: #fff;
    cursor: pointer;
  }

  .news-row-item img {
    width: 100%;
  }

  .news-row-text {
    width: 100%;
    height: 173px;
    padding: 32px 24px;
    text-align: start;
    background-color: #fff;
  }

  .news-row-text span {
    font-family: "Lato";
    font-weight: 500;
    line-height: 19px;
    text-transform: uppercase;
    color: #ba9256;
    margin: 0;
    margin-bottom: 4px;
  }

  .news-row-text p {
    font-family: "Prata";
    font-size: 20px;
    line-height: 35px;
    color: #181c23;
    margin: 0;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .news-row-text p:hover {
    color: #ba9256;
    transition: 0.1s;
  }

  .news-background {
    width: 100%;
    height: 50%;
    background-color: #ba9256;
    position: absolute;
    z-index: -1;
    bottom: 0;
  }

  .news-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 7.81%;
  }

  .news-btn-btn {
    height: 50px;
    border: 2px solid #ffffff;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }

  .news-btn-btn:hover {
    background-color: #fff;
    color: #ba9256;
    transition: 0.1s;
  }
  @media (max-width: 1000px) {
    .news-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 700px) {
    .news-row {
      grid-template-columns: 1fr;
    }
  }
`;
const News = () => {
  return (
    <NewsStyled id="news">
      <div className="news-background" />
      <div className="news-box">
        <div className="news-box-list">
          <h5>TIN TỨC</h5>
          <h3>BÀI VIẾT MỚI NHẤT CỦA CHÚNG TÔI</h3>
          <div className="news-row">
            <>
              {newsList.map((news) => (
                <div className="news-row-item">
                  <Link key={news.id} to={news.to}>
                    <img src={news.src} alt=" news list" />
                    <div className="news-row-text">
                      <span>{news.time}</span>
                      <p>{news.title}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          </div>
          <div className="news-btn">
            <Link to="/blog">
              <div className="news-btn-btn font-btn">XEM TẤT CẢ</div>
            </Link>
          </div>
        </div>
      </div>
    </NewsStyled>
  );
};

export default News;
