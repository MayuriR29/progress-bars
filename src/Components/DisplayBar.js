import React from "react";
const DisplayBar = props => {
  return props.barData.map((value, index) => {
    return (
      <div className="progress" key={index}>
        <div
          key={index}
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={props.limit}
          style={{
            width: `${value}%`,
            backgroundColor: value >= props.limit ? "red" : "blue"
          }}
        >
          <span className="sr">{value}%</span>
        </div>
      </div>
    );
  });
};
export default DisplayBar;
