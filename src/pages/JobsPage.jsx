import AppLayout from "components/layout/AppLayout";
import { Contact } from "features/Homepage";
import { Banner, ItemRecruit, JobContent } from "features/JobsPage";
import styled from "styled-components";

const JobsPageStyled = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    color: #181c23;
  }

  .content-recruit h2 {
    margin-bottom: 27px;
  }

  .summary {
    line-height: 26px;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 0 18.4%;
    color: #666666;
    margin-bottom: 50px;
  }

  .item-recruit {
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    padding: 32px 24px 32px 0px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease;
    align-items: center;
  }

  .info-recruit {
    padding: 0 6.25%;
  }

  h3 {
    font-size: 32px;
    font-weight: 400;
    text-align: left;
  }

  .name-recruit {
    width: 538px;
    font-size: 32px;
    margin: unset;
    margin-top: 16px;
    color: #666666;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .name-recruit:hover {
    color: #ba9256;
    transition: 0.3s;
  }
  .content-item {
    height: 95px;
  }
  .content-item span {
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    color: #666666;
  }
  .content-item p {
    font-weight: 700;
    text-align: left;
    color: #666666;
    padding-top: 16px;
    margin: 0;
    font-size: 21px;
    width: 119px;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .time span {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #ba9256;
  }

  .submit-now {
    color: #666666;
    padding: 16px 32px;
    background: none;
    border: 1px solid #ba9256;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }

  .submit {
    display: flex;
    align-items: center;
    line-height: 18px;
  }

  .item-recruit:hover {
    background-color: #f9f8f5;
  }

  .item-recruit:hover .submit-now {
    background: #ba9256;
    color: #ffffff;
    transition: all 0.3s ease;
  }

  .see-more {
    width: 100%;
    padding: 15px 10px 16px;
    background: #ba9256;
    border: none;
    color: #ffffff;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 8.93%;
  }

  .content-recruit {
    padding-top: 50px;
  }

  @media screen and (max-width: 1520px) {
    .name-recruit {
      width: 420px;
      font-size: 28px;
    }
    h3 {
      font-size: 23px;
    }
    .content-item span {
      font-size: 17px;
    }
    .content-item p {
      font-size: 19px;
      width: 106px;
    }
    .submit-now {
      padding: 15px 30px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1280px) {
    .name-recruit {
      width: 359px;
      font-size: 16px;
    }
    h3 {
      font-size: 20px;
    }
    .content-item span {
      font-size: 15px;
    }
    .content-item p {
      font-size: 15px;
      width: 100px;
    }
    .submit-now {
      padding: 14px 28px;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 992px) {
    .content-item {
      height: 45px;
    }
    .name-recruit {
      margin-bottom: 16px;
    }

    .item-recruit {
      align-items: start;
      flex-direction: column;
    }

    .content-item {
      display: flex;
      gap: 16px;
      margin-bottom: 10px;
      align-items: center;
    }

    .content-recruit h2 {
      margin-bottom: 0;
    }

    .summary {
      padding: 0px 120px;
      margin-bottom: 36px;
    }

    .info-recruit {
      padding: 0 50px;
    }

    h3 {
      font-size: 24px;
    }

    .submit-now {
      font-size: 16px;
    }

    .content-item span {
      font-size: 16px;
    }

    .content-item p {
      font-size: 18px;
      padding: 0;
      margin: 0;
      width: 150px !important;
    }
  }

  @media only screen and (max-width: 578px) {
    h3 {
      font-size: 24px;
    }
    .content-item {
      height: 30px;
    }
    .content-item span {
      font-size: 18px;
    }

    .content-item p {
      font-size: 21px;
      padding-top: unset;
    }

    .content-recruit {
      padding: 50px 16px 0px 16px;
    }

    .summary {
      padding: 0 16px;
    }

    h2 {
      font-size: 30px;
    }

    .summary {
      padding-top: 24px;
    }

    .info-recruit {
      padding: 0 !important;
    }

    .time h3 {
      margin-bottom: 16px;
    }

    .see-more {
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width: 1600px) {
    .name-recruit {
      width: 420px;
      font-size: 28px;
    }
    h3 {
      font-size: 23px;
    }
    .content-item span {
      font-size: 17px;
    }
    .content-item p {
      font-size: 19px;
      width: 106px;
    }
    .submit-now {
      padding: 15px 30px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1280px) {
    .name-recruit {
      width: 359px;
      font-size: 16px;
    }
    h3 {
      font-size: 20px;
    }
    .content-item span {
      font-size: 15px;
    }
    .content-item p {
      font-size: 15px;
      width: 100px;
    }
    .submit-now {
      padding: 14px 28px;
      font-size: 14px;
    }
  }
  .Banner {
    position: relative;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .Banner img {
    width: 100%;
    height: 548px;
    cursor: pointer;
  }

  .banner-blog-single {
    height: 900px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .content-banner {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .background-banner {
    position: absolute;
    bottom: -1px;
    height: 8.6%;
    background: #ffffff;
    left: 0;
    right: 0;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    width: 90.83%;
  }

  .background-opaciti {
    position: absolute;
    bottom: 0;
    height: 20px;
    margin: 0 1.84%;
    background: #c4c4c4;
    opacity: 50%;
    left: 0;
    right: 0;
    bottom: 100%;
  }

  .content-banner span {
    width: 50%;
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 5px;
    text-transform: uppercase;
    padding: 0;
    text-align: center;
    line-height: unset !important;
    font-family: "Prata";
    margin-top: 13.23%;
    margin-bottom: 13.23%;
  }

  .content-banner div {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    font-family: "Lato";
    margin-bottom: 11.93%;
  }

  .logo img {
    width: 153.24px;
    height: 48px;
  }

  .item-header {
    display: flex;
    gap: 40px;
    align-items: center;
    margin: 0 120px;
    justify-content: space-between;
    height: 100%;
    background: #ffffff;
    width: 100%;
    padding: 0 32px;
  }

  .item-share {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .item-share img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .icon-facebook {
    width: 11px !important;
  }

  .item-center {
    display: flex;
    gap: 40px;
  }

  .item-center span {
    font-size: 16px;
    font-weight: 500;
    color: #181c23;
    text-transform: uppercase;
    cursor: pointer;
  }

  .item-center span:hover {
    color: #ba9256;
    font-weight: 500;
  }

  .banner-blog {
    height: 900px;
  }

  .img-jobOpening {
    height: 900px;
  }

  @media (max-width: 1520px) {
    .content-banner {
      height: 352px;
    }
    .Banner img {
      height: 352px;
    }
    .content-banner span {
      font-size: 25px !important;
    }
  }

  @media screen and (max-width: 947px) {
    .content-banner span {
      margin-top: 105px;
    }

    .content-banner div {
      margin-bottom: 55px;
    }

    .img-jobOpening {
      height: 520px !important;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .background-banner {
      height: 6px;
      width: 87.5%;
    }

    .background-opaciti {
      margin: 0 22px;
      bottom: 6px;
      height: 4px;
    }
  }

  @media only screen and (max-width: 578px) {
    /* .Banner img {
    height: 235px;
  } */

    .banner-blog-single {
      height: 520px !important;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .content-banner span {
      width: 100%;
      font-size: 36px;
      font-weight: 400;
      padding: 0 16px;
    }

    .content-banner div {
      padding: 0 16px;
      text-align: center;
    }

    .background-banner {
      width: 91%;
    }
  }
  @media screen and (max-width: 1600px) {
    .content-banner {
      height: 352px;
    }
    .content-banner span {
      width: 55%;
      font-size: 30px;
      margin-top: 10%;
      margin-bottom: 10%;
    }
  }
  @media screen and (max-width: 1280px) {
    .content-banner span {
      font-size: 30px;
      margin-top: 8%;
      margin-bottom: 8%;
    }
    .content-recruit {
      padding-top: 10px !important;
    }
    .content-recruit h2 {
      margin-bottom: 10px !important;
    }
    h2 {
      font-size: 30px !important;
    }
  }
  @media screen and (max-width: 578px) {
    .content-banner span {
      width: 100%;
    }
    .content-recruit {
      padding-top: 10px !important;
    }
    .content-recruit h2 {
      margin-bottom: 10px !important;
    }
    h2 {
      font-size: 30px !important;
    }
  }
`;

const JobsPage = () => {
  return (
    <AppLayout>
      <JobsPageStyled>
        <Banner />
        <div className="content-recruit jobs-page">
          <JobContent
            heading="CÁC VỊ TRÍ TUYỂN DỤNG THÁNG 11/2022"
            caption=" RAVI định hướng phát triển trở thành đơn vị đi tiên phong trong
              lĩnh vực bất động sản và phát triển hệ thống thẻ nghỉ dưỡng. Với
              mục tiêu phát triển các dự án nghỉ dưỡng theo xu hướng xanh, cung
              cấp tiêu chuẩn kỳ nghỉ 5 sao kết hợp với sứ mệnh bảo tồn tự nhiên.
              Và chúng tôi đang tìm kiếm những nhân tài sẵn sàng gia nhập RAVI,
              để cùng nhau hoàn thành nhiệm vụ trên."
          />
          <div className="info-recruit">
            <ItemRecruit
              time="FULLTIME"
              to="https://ravi.com.vn/jobs/nhan-vien-dat-lich-hen"
              recruitPosition="Nhân viên Đặt lịch hẹn qua điện thoại"
              money="10 ~ 20 triệu"
              number="3"
              address="Hà Nội"
              expiredDate="30/11/2022"
            />

            <ItemRecruit
              time="FULLTIME"
              to="https://ravi.com.vn/jobs/nhan-vien-kinh-doanh"
              recruitPosition="Nhân viên Kinh doanh"
              money="10 ~ 30 triệu"
              number="3"
              address="Hà Nội"
              expiredDate="30/11/2022"
            />

            <ItemRecruit
              time="FULLTIME"
              to="https://ravi.com.vn/jobs/chuyen-vien-cskh-cs-booking"
              recruitPosition="Chuyên viên CSKH"
              money="Thỏa thuận"
              number="1"
              address="Hà Nội"
              expiredDate="30/11/2022"
            />

            <ItemRecruit
              time="FULLTIME"
              to="https://ravi.com.vn/jobs/nhan-vien-hanh-chinh-nhan-su"
              recruitPosition="Chuyên viên CSKH"
              money="6 ~ 7 triệu"
              number="1"
              address="Hòa Bình"
              expiredDate="30/11/2022"
            />
          </div>
        </div>
      </JobsPageStyled>
      <Contact />
    </AppLayout>
  );
};

export default JobsPage;
