import React from "react";
import WineListItem from "../WineListItem";

const WineList = props => {
  let wineItems = props.allWine.map(wine => (
    <WineListItem allWine={wine} key={wine.id} />
  ));
  return (
    <div>
      <h1 className="section-title">Wines</h1>
      <div>{wineItems}</div>
    </div>
  );
};

export default WineList;
