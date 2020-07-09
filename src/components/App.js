import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends Component {
  state = {
    city: "",
  };

  handleChangeInput = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Form city={this.state.city} onChange={this.handleChangeInput} />
        <Result />
      </div>
    );
  }
}

export default App;
