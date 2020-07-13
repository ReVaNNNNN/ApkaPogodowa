import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: false,
  };

  handleChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=f4649408805b935cfa225d7616053ecd&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }

        throw Error("Wystąpił błąd !");
      })
      .then((response) => response.json())
      .then((data) => {
        const date = new Date().toLocaleString();
        this.setState((prevState) => ({
          error: false,
          date: date,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        }));
      })
      .catch((err) => {
        this.setState({
          error: true,
          city: this.state.value,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          city={this.state.value}
          onChange={this.handleChangeInput}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
