import React from "react";

const Form = ({ value, form }) => {
  return (
    <>
      <div
        className={`hidden-form  transform -translate-x-${value} -translate-x-0 `}
      >
        {form}
      </div>
    </>
  );
};

export default Form;
