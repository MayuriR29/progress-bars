import React, { Component } from "react";
import axios from "axios";
import DisplayBar from "./DisplayBar";
import DisplayButtons from "./DisplayButtons";
import DisplayLevels from "./DisplayLevels";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: { buttons: [], bars: [], limit: 0 },
      dataLoaded: false,
      currentBar: null
    };
  }
  async componentDidMount() {
    const barsInfo = await axios.get("http://pb-api.herokuapp.com/bars");
    this.setState({
      data: {
        buttons: barsInfo.data.buttons,
        bars: barsInfo.data.bars,
        limit: barsInfo.data.limit
      },
      dataLoaded: true
    });
  }

  updateProgress = (event, index, eachButton) => {};

  render() {
    return (
      <div>
        <div className="container">
          <h2>Basic Progress Bar</h2>
          <DisplayBar barData={this.state.data.bars} limit={this.state.limit} />
          <DisplayButtons buttonData={this.state.data.buttons} />
          <DisplayLevels levelsData={this.state.data.bars} />
        </div>
      </div>
    );
  }
}

export default App;
