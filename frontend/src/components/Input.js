import React from "react";

const Input = ({ id, label, placeholder, onChange }) => {
  return (
    <>
      <label htmlFor={id} className="text-lg capitalize text-purple-100">
        {label}
      </label>
      <input
        id={id}
        type="text"
        className="hidden-input"
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
