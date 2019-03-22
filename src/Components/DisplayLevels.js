import React from "react";
const DisplayLevels = props => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        {props.currentLevel}
        <span className="caret" />
      </button>
      <ul className="dropdown-menu">
        {props.levelsData.map((value, index) => {
          return (
            <li
              onClick={() => props.setCurrentLevel(index + 1)}
              key={index}
            >{`ProgressLevel${index + 1}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayLevels;
