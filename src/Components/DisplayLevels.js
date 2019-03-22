import React from "react";
const DisplayLevels = props => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        Levels
        <span className="caret" />
      </button>
      <ul className="dropdown-menu">
        {props.levelsData.map((value, index) => {
          return <li key={index}>{`ProgressLevel${index + 1}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default DisplayLevels;
