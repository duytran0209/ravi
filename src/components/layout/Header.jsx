import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import useClickOutSide from "hooks/useClickOutSide";
const HeaderStyled = styled.div`
  /* header */

  svg {
    color: white;
    cursor: pointer;
  }
  a.sub-menu.depth-1.menu-btn {
    margin: 10px 0;
  }
  .menu {
    display: flex;
    gap: 40px;
    transition: all 0.4s ease-in-out;
    @media screen and (max-width: 917px) {
      transform: translateY(-100%);
    }
  }

  .menu-btn i {
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    display: none;
  }

  .menu-close {
    display: none;
  }

  .sticky .menu-btn i {
    color: #ba9256;
  }

  .navbar-header {
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    position: fixed;
    /* padding: 26px 0; */
    z-index: 999;
    max-width: 1920px;
  }

  .sticky {
    background: #fff;
    transition: 0.3s ease;
  }

  .sticky .logo {
    background-image: url(/images/logo-ravi-1.png?f5202638c4cfb6d85e5fde1160636876);
  }

  .sticky .navbar-box-list a {
    color: #666666;
  }

  .sticky .icon-down-header {
    color: #666666;
    display: none !important;
  }
  .sticky .icon-web-app i {
    color: #bcbcbc;
  }

  .sticky .icon-web-app .icon-face {
    background-image: url(/images/Icons-face-Copy-b.svg?c3527b2271b0206f017df42cefad7025);
  }

  .sticky .icon-web-app .icon-face:hover {
    background-image: url(/images/Icons-face-Copy.svg?28da8d9101cf9e90e13f7e0db0b93ad7);
  }

  .sticky .icon-web-app .icon-youtube {
    background-image: url(/images/Icons-youtube-Copy-b.svg?19204e5fb91988c20f2c1379e8519949);
  }

  .sticky .icon-web-app .icon-youtube:hover {
    background-image: url(/images/Icons-youtube-Copy.svg?40904f7cb34e349af01764babc7822f1);
  }

  .navbar-box {
    display: flex;
    width: 87.5%;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }

  .navbar-box a {
    margin: auto 0;
  }

  .logo {
    height: 48px;
    width: 154px;
    background-size: 100% 100%;
    background-image: url(/images/logo-ravi.png?3e5a3619b884437f837d0af477e60a0b);
    background-repeat: no-repeat;
  }

  .navbar-box-list {
    display: flex;
    list-style: none;
    margin: 0;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    gap: 40px;
  }

  .navbar-box-list .header-project {
    position: relative;
    padding: 20px 0;
  }

  .box-header {
    display: flex;
  }
  .children-menu {
    position: absolute;
    z-index: 1;
    width: 190px;
    display: none;
  }

  .children-menu li {
    list-style: none;

    border-radius: 3px;
    width: 100%;
    cursor: pointer;
  }
  .children-menu li > div > a {
    width: 100%;
  }
  .children-menu li:hover a {
    /* background-color: #c99757; */
    color: #c99757 !important;
  }

  .navbar-box-list .header-project:hover .icon-down-header {
    color: #ba9256;
  }
  .navbar-box-list .header-project:hover .header-project {
    color: #ba9256;
  }

  .navbar-box-list .header-project:hover .children-menu {
    display: block;
    padding: 15px;
    margin-top: 19px;
    min-width: 240px;
  }

  .navbar-box-list li a {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }

  .navbar-box-list li a:hover {
    color: #ba9256;
  }

  .icon-web-app {
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: space-between;
  }

  .icons {
    width: 24px;
    height: 24px;
  }

  .icon-down-header {
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    font-weight: 400 !important;
    width: 25px;
    display: none !important;
    justify-content: center;
    position: relative;
  }

  .icon-web-app i {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }

  .icon-web-app a {
    display: flex;
    align-items: center;
  }

  .icon-web-app a i {
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }

  .icon-web-app i:hover {
    color: #ba9256;
  }
  @media (max-width: 1441px) {
    .navbar-box-list li a {
      font-size: 12px;
    }

    .logo {
      width: 115.5px;
      height: 36px;
      background-size: 115.5px 36px;
    }

    .icons {
      height: 18px;
      width: 18px;
      background-size: 18px 18px;
    }

    .icon-web-app i {
      font-size: 15px !important;
    }
  }
  .navbar-box-list .header-project {
    padding: 15px 0;
  }

  .navbar-box-list .header-project:hover .children-menu {
    margin-top: 14px;
  }

  .navbar-box-list .header-project:hover .children-menu {
    padding: 10px;
  }
  @media (max-width: 947px) {
    .sticky .icon-down-header {
      color: #ba9256;

      display: block !important;
    }

    .navbar-box-list .header-project {
      padding: 0;
    }

    .header-project a {
      display: flex;
      justify-content: space-between;
    }
    .box-header {
      justify-content: space-between;
    }
    .children-menu {
      position: unset;
      width: 100%;
      display: none !important;
      padding-left: 20px;
      margin-top: 20px;
      margin-bottom: 0 !important;
    }
    .sticky .navbar-box-list a {
      color: #fff;
    }

    .icon-web-app i {
      font-size: 21px !important;
    }

    .icons {
      height: 24px;
      width: 24px;
      background-size: 24px 24px;
    }

    .menu-close span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
    }

    .menu-btn {
      display: block;
    }

    .navbar-box .menu.active {
      left: 0;
      transition: all 0.3s ease;
    }

    .navbar-box .menu {
      position: fixed;
      height: 60vh;
      left: -100%;
      top: 0;
      padding: 20px 16px 0 20px;
      background: #7f7f7f;
      display: block;
      z-index: 1;
      transition: all 0.4s linear;
      transform: translateY(50px);
    }

    .navbar-box .menu .menu-close {
      display: flex;
      color: #ba9256;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      margin-bottom: 33px;
    }

    .navbar-box .menu .menu-btn i {
      font-size: 20px;
      color: #666666;
    }

    .navbar-box .menu ul {
      display: block;
      margin-bottom: 26px;
      width: 500px;
    }

    .navbar-box-list li a {
      font-size: 16px;
    }

    .navbar-box .menu ul li {
      padding: 24px 0;
    }

    .icon-down-header {
      display: block !important;
    }

    .navbar-box .menu .icon-web-app {
      display: flex;
      justify-content: start;
    }

    .navbar-box .menu .header-project:hover .children-menu {
      display: block !important;
      animation: fade-in 1s;
      background: none;
    }

    .navbar-box .menu .header-project:not(:hover) .children-menu {
      display: block;
      animation: fade-out 1s;
    }

    .navbar-box .menu .children-menu li:hover a {
      color: #ba9256;
      transition: 0.3s;
    }

    .navbar-header {
      padding: 15px 6.1%;
    }

    .navbar-box {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .menu-btn i {
      display: block;
    }

    .navbar-box-list {
      display: none;
    }

    .icon-web-app {
      display: none;
    }
  }
  @media (max-width: 578px) {
    a.sub-menu.depth-1.menu-btn {
      margin-top: unset;
    }
  }
`;

const Header = () => {
  const { navToggle, setNavToggle, nodeRef } = useClickOutSide();
  return (
    <HeaderStyled>
      <header className="navbar-header">
        <div className="ham-burger-menu" ref={nodeRef}>
          <div onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
          </div>
        </div>
        <div className="navbar-box">
          <Link href="/">
            <div
              className="logo ravi-logo-header"
              data-image="https://ravi.com.vn/uploads/0000/1/2022/05/02/logo-ravi.png"
              data-sticky-image="https://ravi.com.vn/uploads/0000/1/2022/05/02/logo-ravi-1.png"
              style={{
                backgroundImage:
                  "url(https://ravi.com.vn/uploads/0000/1/2022/05/02/logo-ravi.png)",
              }}
            />
          </Link>
          <div className={` ${navToggle ? "nav-toggle" : ""}`}>
            <div className="menu">
              <ul className="navbar-box-list">
                <li className="    depth-0">
                  <div className="box-header">
                    <Link className="    depth-0 menu-btn" target to="#story">
                      VỀ CHÚNG TÔI
                    </Link>
                  </div>
                </li>
                <li className="depth-0">
                  <div className="box-header">
                    <Link
                      className="    depth-0 menu-btn"
                      target
                      to="#activity"
                    >
                      LĨNH VỰC HOẠT ĐỘNG
                    </Link>
                  </div>
                </li>
                <li className="header-project      depth-0">
                  <div className="box-header">
                    <Link
                      className="header-project      depth-0 menu-btn"
                      target
                      href="/projects"
                    >
                      KHU NGHỈ DƯỠNG
                    </Link>{" "}
                    <i className="icon-down-header fa fa-angle-down" />
                  </div>
                  <ul className="children-menu menu-dropdown navbar-header ">
                    <li className="sub-menu    depth-1">
                      <div className="box-header">
                        <Link
                          className="sub-menu    depth-1 menu-btn"
                          target
                          href="/projects/category/nature-resort-5-sao"
                        >
                          NATURE RESORT 5 SAO
                        </Link>
                      </div>
                    </li>
                    <li className="sub-menu            depth-1">
                      <div className="box-header">
                        <Link
                          className="sub-menu depth-1 menu-btn"
                          target
                          href="/projects/category/village-ven-do"
                        >
                          VILLAGE VEN ĐÔ
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className=" depth-0">
                  <div className="box-header">
                    <Link className=" depth-0 menu-btn" target href="/blog">
                      TIN TỨC
                    </Link>
                  </div>
                </li>
                <li className="header-project depth-0">
                  <div className="box-header">
                    <Link
                      className="header-project depth-0 menu-btn"
                      target
                      href="/jobs"
                    >
                      TUYỂN DỤNG
                    </Link>{" "}
                    <i className="icon-down-header fa fa-angle-down" />
                  </div>
                  <ul className="children-menu menu-dropdown navbar-header ">
                    <li className="sub-menu depth-1">
                      <div className="box-header">
                        <Link
                          className="sub-menu depth-1 menu-btn"
                          target
                          href="/jobs/category/viec-lam-tai-van-phong"
                        >
                          VIỆC LÀM TẠI VĂN PHÒNG
                        </Link>
                      </div>
                    </li>
                    <li className="sub-menu depth-1">
                      <div className="box-header">
                        <Link
                          className="sub-menu depth-1 menu-btn"
                          target
                          href="/jobs/category/viec-lam-tai-resort"
                        >
                          VIỆC LÀM TẠI RESORT
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>{" "}
              <div className="icon-web-app">
                <div
                  className="footer-button-icon"
                  data-social-redirect="https://www.facebook.com/ravicompany.official/"
                >
                  <FacebookIcon />
                </div>
                <Link href="tel:+02488866688">
                  <i className="far fa-phone-alt menu-btn" />
                </Link>
                <i className="fab fa-instagram menu-btn" data-social-redirect />
                <div className="footer-button-icon" data-social-redirect>
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
