import React from "react";
import { Link } from "react-router-dom";

const ItemRecruit = ({
  time,
  to,
  recruitPosition,
  money,
  number,
  address,
  expiredDate,
}) => {
  return (
    <div className="item-recruit">
      <div className="time">
        <span>{time}</span>
        <Link to={to}>
          <h3 className="name-recruit">{recruitPosition}</h3>
        </Link>
      </div>
      <div className="content-item">
        <span>Mức lương:</span>
        <p>{money}</p>
      </div>
      <div className="content-item">
        <span>Số lượng:</span>
        <p>{number}</p>
      </div>
      <div className="content-item">
        <span>Khu vực:</span>
        <p>{address}</p>
      </div>
      <div className="content-item">
        <span>Ngày hết hạn:</span>
        <p>{expiredDate}</p>
      </div>
      <Link to="https://ravi.com.vn/jobs/nhan-vien-dat-lich-hen">
        <div className="submit">
          <button type="submit" className="submit-now">
            ỨNG TUYỂN NGAY
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ItemRecruit;
