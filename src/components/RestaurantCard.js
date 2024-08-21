import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props);
  const { feature_image, address, name, opening_time, rating } = resData;

  // console.log(resData);

  return (
    <div className="res-card">
      <img
        src={feature_image}
        alt="res_image"
      />
      <h3>{name}</h3>
      <h3>{address}</h3>
      <h3>{opening_time}</h3>
      <h3>{rating + " stars"}</h3>
    </div>
  );
};
export default RestaurantCard;
