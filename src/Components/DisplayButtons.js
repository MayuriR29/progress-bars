import React from "react";
const DisplayButtons = props => {
  return props.buttonData.map((eachButton, index) => {
    return (
      <button
        key={index}
        onClick={event => this.updateProgress(event, index, eachButton)}
      >
        {eachButton}
      </button>
    );
  });
};

export default DisplayButtons;
