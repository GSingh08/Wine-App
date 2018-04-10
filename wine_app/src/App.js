import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import WineList from "./WineList";
import Header from "./Header";
import WineInfo from "./WineInfo";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      allWine: null,
      wineDataLoaded: false,
      wine: null,
      singleWineDataLoaded: false
    };
    this.fetchWines = this.fetchWines.bind(this);
    // this.fetchById = this.fetchById.bind(this);
  }
  componentDidMount() {
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
      <Router>
        <div>
          <div>
            <div className="wineList">
              {this.state.wineDataLoaded ? (
                <WineList
                  allWine={this.state.allWine}
                  wineDataLoaded={this.state.wineDataLoaded}
                />
              ) : (
                <p> Loading </p>
              )}
              <Link to="/wine/new">Add new wine</Link>
            </div>
            <Route exact path="/wine/:id" component={WineInfo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
