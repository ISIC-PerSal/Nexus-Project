import React from "react";
import "./CircularProgressBar.css";

function CircularProgressBarView({
  realVolunteers,
  volunteers,
  isHovered,
  setIsHovered,
  percentage,
  size,
  strokeWidth,
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <>
      <div
        className="circular-progress no-select"
        style={{ width: size, height: size }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg width={size} height={size}>
          <circle
            className="circular-progress-bg"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="circular-progress-bar"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
          />
        </svg>
        {isHovered ? (
          <div className="circular-progress-text fadeIn">{`${realVolunteers}/${volunteers}`}</div>
        ) : (
          <div className="circular-progress-text">{`${percentage}%`}</div>
        )}
      </div>
    </>
  );
}

export default CircularProgressBarView;
