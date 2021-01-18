import React from "react";

const Buttons = ({ d, viewBox, evenodd, className }) => {
  return (
    <svg
      className={className || "w-6 h-6"}
      fill="none"
      stroke="currentColor"
      viewBox={viewBox || "0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={d}
        fillRule={evenodd || ""}
        clipRule={evenodd || ""}
      ></path>
    </svg>
  );
};

export default Buttons;
