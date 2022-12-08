import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const RecruitStyled = styled.section`
  /* Recruit */

  width: 100%;
  background: #f9f8f5;

  .recruit-box {
    display: flex;
  }

  .recruit-box img {
    padding: 0;
  }

  .recruit-content {
    padding: 2.95% 0 3.35% 4.5%;
    overflow: hidden;
  }

  .recruit-content h5 {
    text-align: start;
  }

  .recruit-box-job {
    width: 100%;
    padding: 39px 24px;
    background-color: #fff;
    border-radius: 3px;
    margin-bottom: 32px;
    cursor: pointer;
    cursor: pointer;
    position: relative;
  }

  .recruit-box-job:hover {
    box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.08);
  }

  .recruit-box-job h4 {
    line-height: 43px;
    color: #181c23;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .box-job-text {
    display: flex;
    margin-top: 16px;
  }

  .job-text-item {
    display: flex;
  }

  .recruit-border {
    border: 1px solid #f5f5f5;
    margin: 0 16px;
  }

  .job-text-item h5 {
    text-transform: none;
    font-weight: 400;
    line-height: 26px;
    margin: 0 4px 0 0;
    color: #666666;
  }

  .job-text-item span {
    line-height: 26px;
    color: #666666;
  }

  .recruit-text-link {
    display: none;
  }

  .recruit-box-job:hover .recruit-text-link {
    display: flex;
    align-items: center;
    position: absolute;
    right: 30px;
    top: 0;
    bottom: -50px;
  }

  .recruit-text-link span {
    text-transform: uppercase;
    margin-right: 10px;
    color: #ba9256;
  }

  .recruit-text-link i {
    color: #ba9256;
  }

  .recruit-btn {
    width: 100%;
    margin-top: 50px;
    display: flex;
  }

  .recruit-btn-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 2px solid #ba9256;
    border-radius: 25px;
    cursor: pointer;
    color: #666666;
  }

  .recruit-btn-btn:hover {
    background-color: #ba9256;
    color: #fff;
    transition: 0.3s;
  }
  @media (max-width: 1601px) {
    .recruit-box-job:hover .recruit-text-link {
      top: 62px;
    }
  }
`;

const Recruit = () => {
  return (
    <RecruitStyled id="recruit" className="recruit">
      <div className="recruit-box row">
        <img
          className="col-sm-12 col-lg-6"
          src="https://ravi.com.vn/uploads/0000/24/2022/06/30/low-angle-view-skyscrapers.jpg"
          alt=" recruit job"
        />
        <div className="recruit-content col-sm-12 col-lg-6">
          <h5>TUYỂN DỤNG</h5>
          <h3>CƠ HỘI VIỆC LÀM TẠI RAVI</h3>
          <a href="/jobs/nhan-vien-kinh-doanh">
            <div className="recruit-box-job">
              <div className="box-job-list">
                <h4>Nhân viên Đại diện kinh doanh</h4>
                <div className="box-job-text">
                  <div className="job-text-item">
                    <h5>Mức lương:</h5>
                    <span>10 ~ 30 triệu</span>
                  </div>
                  <div className="recruit-border" />
                  <div className="job-text-item">
                    <h5>Số lượng:</h5>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div className="recruit-text-link">
                <span>ứng tuyển ngay</span>
                <ArrowRightAltIcon />
              </div>
            </div>
          </a>
          <a href="/jobs/nhan-vien-dat-lich-hen">
            <div className="recruit-box-job">
              <div className="box-job-list">
                <h4>Nhân viên Đặt hẹn lịch qua điện thoại </h4>
                <div className="box-job-text">
                  <div className="job-text-item">
                    <h5>Mức lương:</h5>
                    <span>10 ~ 20 triệu</span>
                  </div>
                  <div className="recruit-border" />
                  <div className="job-text-item">
                    <h5>Số lượng:</h5>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div className="recruit-text-link">
                <span>ứng tuyển ngay</span>
                <ArrowRightAltIcon />
              </div>
            </div>
          </a>
          <a href="/jobs/chuyen-vien-marketing-tong-hop">
            <div className="recruit-box-job">
              <div className="box-job-list">
                <h4>Chuyên viên Marketing</h4>
                <div className="box-job-text">
                  <div className="job-text-item">
                    <h5>Mức lương:</h5>
                    <span>Thỏa thuận</span>
                  </div>
                  <div className="recruit-border" />
                  <div className="job-text-item">
                    <h5>Số lượng:</h5>
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div className="recruit-text-link">
                <span>ứng tuyển ngay</span>
                <ArrowRightAltIcon />
              </div>
            </div>
          </a>
          <div className="recruit-btn">
            <a href="/jobs">
              <div className="recruit-btn-btn font-btn">XEM TẤT CẢ</div>
            </a>
          </div>
        </div>
      </div>
    </RecruitStyled>
  );
};

export default Recruit;
