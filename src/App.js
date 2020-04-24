import React, { Component } from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

import coronaLogo from "./image/image.png";
export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={coronaLogo} alt="Covid Logo" /> */}
        <h3>COVID-19 Tracker</h3>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
