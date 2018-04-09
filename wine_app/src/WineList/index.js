import React from "react";
import WineDetailItem from "../WineDetailItem";

const WineList = props => {
  let wineItems = props.allWine.map(wine => (
    <WineDetailItem allWine={wine} key={wine.id} />
  ));
  return (
    <div>
      <h1 className="section-title">Wines</h1>

      <div onscroll="myFunction()">{wineItems}</div>
    </div>
  );
};

export default WineList;
