import React from "react";
const DisplayButton = props => {
  return <button onClick={props.updateProgress}>{props.eachButton}</button>;
};

export default DisplayButton;
