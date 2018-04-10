import React from "react";
import WineNameDisplay from "../WineNameDisplay";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const WineList = props => {
  let wineItems = props.allWine.map(wine => (
    <Link to={`/wine/${wine.id}`}>
      <WineNameDisplay allWine={wine} key={wine.id} />{" "}
    </Link>
  ));
  return (
    <div>
      <h3 className="section-title">All Wines</h3>

      <div onscroll="myFunction()">{wineItems}</div>
    </div>
  );
};

export default WineList;
