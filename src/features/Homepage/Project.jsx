import { Link } from "react-router-dom";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const projectList = [
  {
    id: 1,
    to: "/projects/hasu-village-by-ravi",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/17/hasu-out-002.jpg")',
    title: "Hasu Village by Ravi",
    address: "xóm nước hang, hòa bình",
  },

  {
    id: 2,
    to: "/projects/sakana-resort-hoa-binh",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/20/nhanon-dem.png")',
    title: "Sakana Resort Hòa Bình",
    address: "hòa bình - đang triển khai",
  },

  {
    id: 3,
    to: "/projects/onsen-villas",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/1/2022/05/01/onsen-villa.jpg")',
    title: "Onsen Villas",
    address: "dân hòa, kỳ sơn, hòa bình",
  },

  {
    id: 4,
    to: "/projects/rose-villas",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/1/2022/05/01/rose-villa.jpg")',
    title: "Rose Villas",
    address: "yên bài, ba vì",
  },

  {
    id: 5,
    to: "/projects/queens-homestay",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/17/75328611-408341476723334-6483468238159085568-n.jpg")',
    title: "Queen's Homestay",
    address: "yên bài, ba vì",
  },
  {
    id: 6,
    to: "/projects/queens-homestay",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/1775328611-408341476723334-6483468238159085568-n.jpg")',
    title: "Queen's Homestay",
    address: "yên bài, ba vì",
  },
  {
    id: 7,
    to: "/projects/ravi-phu-yen-heritage-resort",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/20/z3368183255758-3522de787185f7674f5d07b457d699cd.jpg")',
    title: "Ravi Phú Yên Heritage Resort",
    address: "Phú Yên - đang triển khai",
  },
  {
    id: 8,
    to: "/projects/casuarina-resort-phu-yen",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/20/picture9.jpg")',
    title: "Casuarina Resort Phú Yên",
    address: "sông cầu, phú yên - đang triển khai",
  },
  {
    id: 9,
    to: "/projects/rainforest-phu-yen",
    backgroundImage:
      'url("https://ravi.com.vn/uploads/0000/24/2022/06/20/z3370291025922-35e5d7b3a75c713af77739c822b33983.jpg")',
    title: "Rainforest Phú Yên",
    address: "Lâm Phú, Phú Yên - đang triển khai",
  },
];

const ProjectStyled = styled.section`
  .project {
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 1250px;
    padding: 7.81% 0;
  }

  .project-box h5 {
    text-align: center;
  }

  .project-box h3 {
    text-align: center;
  }

  .project-max-width {
    width: 100%;
    margin-bottom: 50px;
  }

  .project-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .carousel-card-box {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    padding-bottom: 150%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-position: center;
    position: relative;
  }

  .img-1 {
    background-image: url(/images/hasu-21.jpg?1e854ccb3eb996c802931108b1a3e9b2);
  }

  .img-2 {
    background-image: url(/images/vung-ro.jpg?156a4bc5168ccc43cb56bd87f2d84fa6);
  }

  .img-3 {
    background-image: url(/images/hoa-binh.jpg?d6adff40dc3721af7d8efd51b5060e51);
  }

  .img-4 {
    background-image: url(/images/onsen-villa.jpg?21a231a8039a1be5708510156e593bfe);
  }

  .img-5 {
    background-image: url(/images/rose-villa.jpg?685787d160b7a67dc1856eb4069ffbee);
  }

  .img-6 {
    background-image: url(/images/queen.jpg?062f74964deb20c8b01fe160ced52d34);
  }

  .img-7 {
    background-image: url(/images/Rolling-hill.jpg?345014b26bd33f7b0018a2960b6e01a0);
  }

  .carousel-text {
    padding: 64px 0 32px 24px;
    height: 162px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }

  .carousel-text h4 {
    line-height: 43px;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 1;
  }

  .carousel-text h5 {
    text-align: start;
  }

  .project-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .project-btn-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 2px solid #ba9256;
    border-radius: 25px;
    cursor: pointer;
    color: #666666;
  }

  .project-btn-btn:hover {
    background-color: #ba9256;
    color: #fff;
    transition: 0.3s;
  }
  @media (max-width: 1601px) {
    .carousel-card-box {
      padding-bottom: 120%;
      width: 300px;
    }
    .carousel-card-box:hover {
      padding-bottom: 123%;
    }
  }
`;

const Project = () => {
  return (
    <ProjectStyled
      id="project"
      className="project"
      style={{
        backgroundImage: `url("https://ravi.com.vn/images/landing-img-49.png?6a620a197bbe6bc5363ad00637639ca8")`,
      }}
    >
      <div className="project-box">
        <h5>CÁC KHU NGHỈ DƯỠNG</h5>
        <h3>TUYỆT TÁC GIỮA KHOẢNG TRỜI RIÊNG</h3>
        <div className="project-max-width">
          <div className="project-carousel owl-carousel">
            <>
              {projectList.map((project) => (
                <Link key={project.id} to={project.to}>
                  <div className="project-carousel-card">
                    <div
                      className="carousel-card-box"
                      style={{
                        backgroundImage: `${project.backgroundImage}`,
                      }}
                    >
                      <div className="carousel-text">
                        <h4>{project.title}</h4>
                        <h5>{project.address}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          </div>
        </div>
        <div className="project-btn">
          <Link to="/projects">
            <div className="project-btn-btn font-btn">
              XEM TẤT CẢ CÁC KHU NGHỈ DƯỠNG
            </div>
          </Link>
        </div>
      </div>
    </ProjectStyled>
  );
};

export default Project;
