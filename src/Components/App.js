import React, { Component } from "react";
import axios from "axios";
import DisplayBar from "./DisplayBar";
import DisplayButton from "./DisplayButton";
import DisplayLevels from "./DisplayLevels";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: { buttons: [], bars: [], limit: 0 },
      currentLevel: null
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
      currentLevel: `ProgressLevel${1}`
    });
  }

  updateProgress = (index, eachButton) => {
    console.log("in click");
  };
  setCurrentLevel = level => {
    this.setState({
      currentLevel: `ProgressLevel${level}`
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2>Basic Progress Bar</h2>
          <DisplayBar barData={this.state.data.bars} limit={this.state.limit} />
          {this.state.data.buttons.map((eachButton, index) => {
            return (
              <DisplayButton
                eachButton={eachButton}
                key={index}
                updateProgress={() => this.updateProgress(eachButton, index)}
              />
            );
          })}
          <DisplayLevels
            levelsData={this.state.data.bars}
            setCurrentLevel={this.setCurrentLevel}
            currentLevel={this.state.currentLevel}
          />
        </div>
      </div>
    );
  }
}

export default App;
