import React from "react";

const WineDetailItem = props => {
  const {
    name,
    year,
    grapes,
    country,
    region,
    description,
    picture,
    price
  } = props.allWine;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default WineDetailItem;
