import React from "react";
import styled from "styled-components";

const HeroStyled = styled.section`
  .myVideo {
    width: 100%;
    height: 100vh;
    background-color: #000000;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .home {
    /* background-image: url('../images/ravi/leaf.png');
    background-repeat: no-repeat; */
    width: 100%;
    height: 100%;
    position: relative;
  }

  .home-box {
    position: absolute;
    bottom: 0;
  }

  .home-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .home-btn-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #fff;
    border: 2px solid #ba9256;
    border-radius: 25px;
    cursor: pointer;
    background-color: #ba9256;
  }

  .font-btn {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    padding: 16px 32px;
  }

  .font-btn a {
    color: #666666;
  }
  a.sub-menu.depth-1.menu-btn {
    margin-top: 10px;
  }
  .home-btn-btn:hover {
    background-color: #fff;
    color: #ba9256;
  }

  .img-bottom {
    width: 100%;
  }

  .img-bottom img {
    width: 100%;
  }
  @media (max-width: 1601px) {
    /* home */

    .home-text h1 {
      padding-top: 213.75px;
      font-size: 75px;
      line-height: 112.5px;
    }

    .home-btn-btn {
      font-size: 12px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyled className="wrapper-content" id="tp-apec">
      <section className="home">
        <video autoPlay muted loop playsInline className="myVideo">
          <source
            src="https://ravi.com.vn/videos/demo-home.mp4"
            type="video/mp4"
          />
        </video>
        <div className="home-box">
          <div className="home-btn">
            <a href="/projects">
              <div className="home-btn-btn font-btn">
                KHU NGHỈ DƯỠNG CỦA CHÚNG TÔI
              </div>
            </a>
          </div>
          <div className="img-bottom">
            <img
              src="https://ravi.com.vn/images/ravi/h1-rev-bottom 1.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </HeroStyled>
  );
};

export default Hero;
