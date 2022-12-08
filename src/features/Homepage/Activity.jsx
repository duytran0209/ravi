import React from "react";
import styled from "styled-components";

const activityList = [
  {
    id: 1,
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/1/2022/05/01/icons2.svg")',
    caption: "Du lịch và quản lý khách sạn",
    desc: "Phát triển các hoạt động du lịch nghỉ dưỡng sinh thái gắn liền với việc bảo tồn và phát triển hệ sinh thái rừng. Tập trung vào thị trường xây dựng các chuyến du lịch khám phá thiên nhiên và du lịch khám phá mạo hiểm [...]",
  },
  {
    id: 2,
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/1/2022/05/01/icons.svg")',
    caption: "Đầu tư và phát triển các dự án bất động sản",
    desc: " Ravi đẩy mạnh hợp tác cùng các đối tác lớn, có uy tín để triển khai phát triển hệ thống dự án khách sạn, khu nghỉ dưỡng tại các địa điểm du lịch quan trọng tại Việt Nam. Tham gia góp vốn, mua lại các dự án giàu tiềm năng về phát triển du lịch [...]",
  },
  {
    id: 3,
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/1/2022/05/01/icons3.svg")',
    caption: "Xây dựng và kiến trúc",
    desc: " Đối tác liên kết chuyên về hoạt động xây dựng và thiết kế Greenscape được thành lập vào  những năm 2006. Từ khi thành lập đến nay, Greenscape tập trung vào nghiên cứu và phát triển các  liệu, phương án thi công mới mang tính chất đột phá [...]",
  },
];

const ActivityStyled = styled.section`
  /* activity */

  .activity {
    width: 100%;
    background-repeat: no-repeat;
  }

  .activity-box {
    padding: 7.81% 0;
    text-align: center;
  }

  .activity-box h3 {
    color: #fff;
  }

  .activity-list {
    display: flex;
    justify-content: center;
    gap: 32px;
    width: 87.5%;
    margin-left: auto;
    margin-right: auto;
  }

  .activity-box-item {
    width: 33.3333%;
    padding: 0 32px 32px 32px;
    cursor: pointer;
  }

  .activity-box-item:hover {
    background-color: #ba9256;
    transition: 0.1s;
  }

  .activity-box-item:hover .activity-group {
    background: #d1b076;
  }

  .activity-box-item:hover span {
    color: #fff;
  }

  .activity-box-item:hover .img-order-1 {
    background-image: url(/images/icons-copy.svg?de4d38dd6147d2c8bd0e18fda1aedeec) !important;
  }

  .activity-box-item:hover .img-order-0 {
    background-image: url(/images/icons2-copy.svg?4060dbaf68da48263b3ca443684d1751) !important;
  }

  .activity-box-item:hover .img-order-2 {
    background-image: url(/images/icons3-copy.svg?113c1d05e654ba85d3eca96c930a53ef) !important;
  }

  .activity-group-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .activity-group {
    margin: 32px;
    width: 230px;
    height: 230px;
    background: rgba(44, 102, 64, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .group-img {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
  }

  .group-img-icon-1 {
    background-image: url(/images/Icons.svg?f159bb44ec4ba2cef84e353e59b3c929);
  }

  .group-img-icon-2 {
    background-image: url(/images/Icons2.svg?23e6a8a9c72ed9280cbfc332474f80e1);
  }

  .group-img-icon-3 {
    background-image: url(/images/Icons3.svg?0e8d6df94093f23b33da7890ab4e42dd);
  }

  .activity-box-item h4 {
    text-align: center;
    color: #fff;
    height: 85px;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .activity-box-item p {
    margin: 24px 0 0 0;
    color: #f9f8f5;
    text-align: start;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .activity-box-item span {
    margin-top: 32px;
    display: flex;
    color: #ba9256;
  }
  @media (max-width: 1601px) {
    .activity-group {
      width: 172.5px;
      height: 172.5px;
    }

    .activity-box-item p {
      -webkit-line-clamp: 5;
    }

    .activity-box-item span {
      margin-top: 24px;
    }

    .group-img {
      width: 75px;
      height: 75px;
      background-size: 75px 75px;
    }
  }
`;

const Activity = () => {
  return (
    <ActivityStyled
      id="activity"
      className="activity"
      style={{
        backgroundImage: `url("https://ravi.com.vn/images/build.png?30682f45c7bc4357673f818979e32eb7")`,
      }}
    >
      <div className="activity-box">
        <h3>LĨNH VỰC HOẠT ĐỘNG</h3>
        <div className="activity-list">
          {/*  */}
          {activityList.map((activity) => (
            <div key={activity.id} className="activity-box-item">
              <div className="activity-group-box">
                <div className="activity-group">
                  <div
                    className="group-img "
                    style={{
                      backgroundImage: `${activity.backgroundImage}`,
                    }}
                  />
                </div>
              </div>
              <h4>{activity.caption}</h4>
              <div className="fos">
                <p>{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ActivityStyled>
  );
};

export default Activity;
