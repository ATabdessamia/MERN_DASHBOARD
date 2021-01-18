import React from "react";

const Select = ({ title, className, options, onChange }) => {
  return (
    <select
      multiple
      name={title}
      className={className || "hidden-select mr-5 mt-4 ml-5"}
      onChange={onChange}
    >
      <option disabled>{title}</option>
      {options.map((opt) => (
        <option key={Math.random()} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default Select;
