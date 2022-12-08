import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  const footerTextList = [
    {
      id: 1,
      text: "Địa chỉ",
      href: "address",
      content:
        "Tầng 5, Toà nhà Artemis, Số 3 Lê Trọng Tấn, Phường Khương Mai, Quận Thanh Xuân, Hà Nội, Việt Nam",
    },
    {
      id: 2,
      text: "Hotline",
      href: "tel:024.888.666.88",
      content: "024.888.666.88",
    },
    {
      id: 3,
      text: "Email",
      href: "mailto:info@ravi.com.vn",
      content: "info@ravi.com.vn",
    },
  ];
  const footerMenuList = [
    {
      id: 1,
      href: "/#story",
      desc: "VỀ CHÚNG TÔI",
    },
    {
      id: 2,
      href: "/#activity",
      desc: "LĨNH VỰC HOẠT ĐỘNG",
    },
    {
      id: 3,
      href: "/#project",
      desc: "KHU NGHỈ DƯỠNG",
    },
    {
      id: 4,
      href: "/#news",
      desc: "TIN TỨC",
    },
    {
      id: 5,
      href: "/#recruit",
      desc: "TUYỂN DỤNG",
    },
    {
      id: 6,
      href: "/#footer",
      desc: "LIÊN HỆ",
    },
  ];
  return (
    <FooterStyled>
      <footer id="footer" className="footer">
        {/* Footer */}

        <div className="footer-box">
          <div className="footer-box-list">
            <img
              src="https://ravi.com.vn/uploads/0000/24/2022/06/14/2.png"
              className="img-responsive"
              alt="logo footer"
            />
            <div className="footer-list-item">
              <div className="footer-text">
                <div className="footer-text-span">thông tin liên hệ</div>
                <>
                  {footerTextList.map((footerText) => (
                    <div footer-text-list key={footerText.id}>
                      <span>{footerText.text}</span>
                      <p>
                        <a href={footerText.href}>{footerText.content}</a>
                      </p>
                    </div>
                  ))}
                </>
              </div>

              <div className="footer-menu">
                <>
                  {footerMenuList.map((footerMenu) => (
                    <div footer-text-list key={footerMenu.id}>
                      <h5>
                        <a href={footerMenu.href}>{footerMenu.desc}</a>
                      </h5>
                    </div>
                  ))}
                </>
              </div>

              <div className="footer-list-icons">
                <div className="footer-text-span">theo dõi chúng tôi</div>
                <div className="footer-box-icons">
                  <div
                    className="footer-button-icon"
                    data-social-redirect="https://www.facebook.com/ravicompany.official/"
                  >
                    <FacebookIcon />
                    {/* <div className="icons icon-face" /> */}
                  </div>
                  <a className="footer-button-icon" href="tel:+02488866688">
                    <i className="far fa-phone-alt menu-btn" />
                  </a>
                  <div className="footer-button-icon" data-social-redirect>
                    <i className="fab fa-instagram" />
                  </div>
                  <div className="footer-button-icon" data-social-redirect>
                    <YouTubeIcon />
                    {/* <div className="icons icon-youtube" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © RAVI 2022. All rights reserved</span>
        </div>
      </footer>
    </FooterStyled>
  );
};
const FooterStyled = styled.div`
  /* Footer */

  .footer {
    width: 100%;
    background-color: #181c23;
    padding: 7.81% 0 0;
  }

  .footer-box {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;
  }

  .footer-box-list {
    display: flex;
    gap: 31.9px;
    width: 87.5%;
  }

  .footer-box-list img {
    height: 253px;
  }

  .footer-list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .footer-text-span {
    font-family: "Prata";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  .footer-text-list {
    display: flex;
  }

  .footer-text-list span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: #bcbcbc;
    width: 70px;
    margin-right: 10px;
  }

  .footer-text-list p {
    font-style: normal;
    font-weight: 400;
    width: 322px;
    color: #bcbcbc;
    line-height: 26px;
  }

  .footer-menu h5 {
    margin-bottom: 16px;
  }

  .footer-menu h5 a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #bcbcbc;
    text-decoration: none;
    cursor: pointer;
  }

  .footer-menu h5:hover a {
    color: #ba9256;
  }

  .footer-box-icons {
    display: flex;
    gap: 16px;
    margin-right: 6px;
  }

  .footer-button-icon {
    width: 50px;
    height: 50px;
    background: #30322d;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: #fff;
    cursor: pointer;
  }

  .footer-button-icon:hover {
    color: #ba9256;
  }

  .footer-button-icon i {
    color: #fff;
  }

  .footer-button-icon:hover i {
    color: #ba9256;
  }

  .footer-button-icon:hover .icon-face {
    background-image: url(/images/Icons-face-Copy.svg?28da8d9101cf9e90e13f7e0db0b93ad7);
  }

  .footer-button-icon:hover .icon-youtube {
    background-image: url(/images/Icons-youtube-Copy.svg?40904f7cb34e349af01764babc7822f1);
  }

  .footer-bottom {
    border-top: 1px solid #30322d;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 79px;
  }

  .footer-bottom span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #666666;
  }

  .font-btn {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    padding: 16px 32px;
  }
  /* responsive */
  @media (max-width: 1441px) {
    .footer-button-icon {
      font-size: 18px;
    }

    .footer-text-span {
      font-size: 15px;
    }

    .footer-text-list p {
      font-size: 12px;
    }

    .footer-text-list span {
      font-size: 12px;
    }

    .footer-menu h5 a {
      font-size: 12px;
    }

    .footer-button-icon {
      width: 37.5px;
      height: 37.5px;
      font-size: 16px;
    }

    .footer-text {
      width: 300px;
    }
  }
  @media (max-width: 1291px) {
    .footer-box-list img {
      height: 192px;
    }

    .footer-text {
      width: 270px;
    }

    .footer-menu {
      width: 134px;
    }

    .footer-box-list {
      gap: 14px;
    }
  }
  @media (max-width: 1050px) {
    .footer {
      padding: 24px 16px;
    }

    .footer-box {
      display: block;
    }

    .footer-box-list {
      width: 100%;
      display: block;
    }

    .footer-text {
      width: 100%;
      margin-bottom: 36px;
    }

    .footer-box-list img {
      width: 90.5%;
      height: auto;
      margin-bottom: 36px;
    }

    .footer-list-item {
      display: block;
    }

    .footer-text-span {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }

    .footer-text-list span {
      font-size: 16px;
      line-height: 26px;
      width: 80px;
    }

    .footer-text-list p {
      font-size: 16px;
      width: 100%;
    }

    .footer-menu h5 a {
      font-size: 16px;
      line-height: 19px;
    }

    .footer-menu {
      width: 100%;
      margin-bottom: 36px;
    }

    .footer-button-icon {
      width: 50px;
      height: 50px;
    }

    .footer-button-icon i {
      font-size: 21px;
    }

    .footer-bottom {
      justify-content: start;
    }
  }
  @media (max-width: 578px) {
    .footer-bottom {
      padding-top: 8px;
      height: unset;
    }
  }
`;
export default Footer;
