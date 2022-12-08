import React from "react";
import styled from "styled-components";

const StoryStyled = styled.section`
  width: 100%;
  padding: 7.81% 0;
  display: flex;
  justify-content: center;

  .story-box {
    gap: 104px;
    display: flex;
    width: 87.5%;
  }

  img {
    width: 48.9%;
  }

  .story-text-list {
    text-align: center;
    margin-top: 12.35%;
  }

  .story-text-list p {
    margin-bottom: 6px;
    color: #666666;
  }

  .story-width {
    margin-top: 34px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .story-width-btn {
    height: 50px;
    border: 2px solid #ba9256;
    border-radius: 25px;
    color: #666666;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .story-width-btn:hover {
    background-color: #ba9256;
    color: #fff;
    transition: 0.1s;
  }

  .story-width-btn:hover a {
    color: #ffffff;
  }
  @media (max-width: 1601px) {
    .story-box {
      gap: 78px;
    }

    .story img {
      width: 50%;
      height: auto;
    }
  }
`;

const Story = () => {
  return (
    <StoryStyled id="story" className="story">
      <div className="story-box">
        <img
          src="https://ravi.com.vn/uploads/0000/1/2022/05/02/masksgroup.jpg"
          alt="story"
        />
        <div className="story-text-list">
          <h5>CÂU CHUYỆN</h5>
          <h3>VỀ CHÚNG TÔI</h3>
          <p style={{ textAlign: "justify" }}>
            Công ty Cổ phần Đầu tư phát triển du lịch RAVI ra đời dựa trên 15
            năm kinh nghiệm trong lĩnh vực phát triển bất động sản nghỉ dưỡng từ
            Chủ đầu tư Ngoại Ô Corp. Định hướng trở thành đơn vị đi tiên phong
            trong lĩnh vực bất động sản và xây dựng hệ thống thẻ nghỉ dưỡng theo
            hướng đi mới, phát triển du lịch tiêu chuẩn 5 sao kết hợp với bảo
            tồn tự nhiên.
          </p>
          <p style={{ textAlign: "justify" }}>
            Tầm nhìn trong 5 năm tới, RAVI sẽ trở thành đơn vị hàng đầu trong
            lĩnh vực du lịch nghỉ dưỡng, chia sẻ kỳ nghỉ tại Việt Nam đồng thời
            đầu tư và phát triển chuỗi dự án gắn liền với hệ sinh thái rừng từ
            Bắc vào Nam [...]
          </p>
          <div className="story-width">
            <div className="story-width-btn font-btn">
              <a href="https://ravi.com.vn/#activity">XEM THÊM</a>
            </div>
          </div>
        </div>
      </div>
    </StoryStyled>
  );
};

export default Story;
