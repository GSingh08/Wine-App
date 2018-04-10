import React from "react";

const WineNameDisplay = props => {
  const { name } = props.allWine;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default WineNameDisplay;
