import React from "react";

const WineListItem = props => {
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
      <img src={picture} />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{year}</p>
        <p>
          {grapes}, {country}, {region}
        </p>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default WineListItem;
