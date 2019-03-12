import React, { Component } from "react";
import "./App.css";
import BestBeers from "./components/BestBeers";

class App extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Brainteaser App!</h1>
          <p>Here are the tap numbers of the best beer:</p>
          <button onClick={this.handleClick} className="button">
            {" "}
            SHOW
          </button>
          {this.state.clicked && <BestBeers />}
        </header>
      </div>
    );
  }
}

export default App;
