import React from "react";
import styled from "styled-components";

const ContactStyled = styled.section`
  /* contact */

  background-image: url("https://ravi.com.vn/images/build-2.png?003f489ca0c872008ae4bbbf63171af9");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  bottom: -1px;

  .contact-box {
    width: 87.5%;
    display: flex;
    padding: 7.81% 0;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-background {
    width: 100%;
    position: absolute;
    top: -2px;
    left: 0;
  }

  .contact-background img {
    width: 100%;
  }

  .contact-text {
    display: flex;
    flex-direction: column;
    width: 827px;
    margin-top: 49px;
    margin-right: 10%;
  }

  .contact-text span {
    font-family: "Prata";
    font-weight: 400;
    font-size: 70px;
    line-height: 108px;
    background: linear-gradient(90deg, #bc842f 0%, #eeba6b 36.01%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .wrapper-contact-form {
    display: flex;
    align-items: center;
  }

  .contact-form {
    width: 512px;
    padding: 64px 32px;
    background-color: #fff;
  }

  .contact-form-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .contact-form-input span {
    font-weight: 500;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #bcbcbc;
    margin: 0 0 4px 16px;
  }

  .contact-form-input input {
    background: #ffffff;
    border: 1px solid #bcbcbc;
    border-radius: 25px;
    height: 50px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    outline-color: #ba9256;
  }

  .contact-form-input input::-webkit-input-placeholder {
    color: #bcbcbc;
  }

  .contact-form-input input::-moz-placeholder {
    color: #bcbcbc;
  }

  .contact-form-input input:-ms-input-placeholder {
    color: #bcbcbc;
  }

  .contact-form-input input::-ms-input-placeholder {
    color: #bcbcbc;
  }

  .contact-form-input input::placeholder {
    color: #bcbcbc;
  }

  .contact-form-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-btn-btn {
    height: 50px;
    background: #ba9256;
    border: 1px solid #ba9256;
    border-radius: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .form-btn-btn:hover {
    background-color: #fff;
    color: #ba9256;
  }
  @media (max-width: 1600px) {
    .contact-text {
      margin-top: 80px;
      margin-left: 80px;
    }

    .contact-text span {
      font-size: 50px;
      line-height: 80px;
    }
  }
  @media (max-width: 1441px) {
    .contact-text {
      margin-left: 0;
    }

    .contact-form-input span {
      font-size: 12px;
    }
  }
  @media (max-width: 1291px) {
    .contact-form {
      width: 380px;
      padding: 24px;
    }

    .contact-text {
      margin-top: 30px;
    }
  }

  @media (max-width: 1050px) {
    /* contact */

    .contact {
      background-image: url(/images/Rectangle-background.png?6b3f7268f606c80fd5f5344959266237);
      background-repeat: no-repeat;
    }

    .contact-box {
      display: block;
      padding: 65px 0 50px;
    }

    .contact-text {
      width: 100%;
    }

    .contact-text span {
      font-size: 30px;
      line-height: 41px;
      text-align: center;
      margin-bottom: 36px;
    }

    .contact-form {
      width: 100%;
    }

    .contact-form-input span {
      font-size: 16px;
    }

    .contact-background {
      top: -7px;
    }
  }

  @media (max-width: 947px) {
    .contact-text {
      margin-top: 0;
    }

    .contact-form {
      padding: 24px 16px;
    }
  }

  @media (max-width: 578px) {
    .contact-box {
      width: 100%;
      padding: 65px 16px 50px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <div className="contact-background">
        <img src="https://ravi.com.vn/images/ravi/Mask-group.png" alt="" />
      </div>
      <div className="contact-box">
        <div className="contact-text">
          <span>
            Đăng ký nhận voucher trải nghiệm nghỉ dưỡng miễn phí cùng RAVI!
          </span>
        </div>
        <div className="wrapper-contact-form">
          <div className="contact-form">
            <form className="ravi-client-subscriber-form">
              <input
                type="hidden"
                name="_token"
                defaultValue="ClnwmjM8O23hEz9AC1WMdMNHefqxsBjAqEHwTqfs"
              />{" "}
              <div className="contact-form-input">
                <span>HỌ TÊN *</span>
                <input
                  name="name"
                  className="name-pattern"
                  type="text"
                  placeholder="Họ tên"
                />
              </div>
              <div className="contact-form-input">
                <span>SỐ ĐIỆN THOẠI *</span>
                <input
                  name="phone"
                  className="phone-pattern"
                  type="number"
                  placeholder="Số điện thoại của bạn"
                />
              </div>
              <div className="contact-form-input">
                <span>EMAIL *</span>
                <input
                  className="email-pattern"
                  name="email"
                  type="email"
                  placeholder="Địa chỉ Email của bạn"
                />
              </div>
              <div className="contact-form-btn">
                <button type="submit" className="form-btn-btn font-btn">
                  ĐĂNG KÝ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
