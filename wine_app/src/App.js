import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WineList from "./WineList";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      allWine: null,
      wineDataLoaded: false
    };
    this.fetchWines = this.fetchWines.bind(this);
  }
  ComponentDidMount() {
    this.fetchWines();
  }

  fetchWines() {
    fetch("http://localhost:4567/api/wines")
      .then(response => response.json())
      .then(response => {
        this.setState({
          allWine: response,
          wineDataLoaded: true
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.wineDataLoaded ? (
          <WineList
            allWine={this.state.allWine}
            wineDataLoaded={this.state.wineDataLoaded}
          />
        ) : (
          <p> ITS LODING, JUST GIVE ME A MINUTE </p>
        )}
      </div>
    );
  }
}

export default App;
