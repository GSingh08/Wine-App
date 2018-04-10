import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class WineInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: "",
      year: "",
      grapes: "",
      country: "",
      region: "",
      description: "",
      picture: "",
      price: "",
      wineId: this.props.match.params.id,
      wine: null,
      singleWineDataLoaded: false
    };
    this.fetchById = this.fetchById.bind(this);
    this.upDateData = this.upDateData.bind(this);
  }

  componentDidMount() {
    this.fetchById();
  }

  componentDidUpdate() {
    if (this.state.wineId !== Number(this.props.match.params.id)) {
      this.upDateData();
    }
  }

  fetchById() {
    fetch(`http://localhost:4567/api/wine/${this.state.wineId}`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          ...response,
          singleWineDataLoaded: true
        });
      });
  }

  upDateData() {
    this.setState({
      wineId: Number(this.props.match.params.id)
    });
    this.fetchById();
  }

  render() {
    const {
      name,
      year,
      grapes,
      country,
      region,
      description,
      picture,
      price
    } = this.state;
    return (
      <div className="wine-info">
        <div>
          <h1>Wine info</h1>
          <img src={this.state.picture} />
          <div>
            <span>
              {name}
              {year}
            </span>
          </div>
          <div>
            <span>{grapes}</span>
          </div>
          <div>
            <span>{country}</span>
          </div>
          <div>{region}</div>
        </div>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export default WineInfo;
