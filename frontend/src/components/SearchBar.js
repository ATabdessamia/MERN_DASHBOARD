import React from "react";

import Buttons from "./Buttons";
const SearchBar = ({ formHandler, changeHandler, value, onSubmitSearch }) => {
  return (
    <div className="search-bar">
      <form className="ml-5 flex-1" onSubmit={onSubmitSearch}>
        <label
          htmlFor="search"
          className="text-lg font-black capitalize text-purple-700"
        >
          search :
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          className="w-3/6 ml-5 p-2 rounded focus:outline-none ring ring-purple-700 ring-opacity-30 font-black text-purple-900"
          autoComplete="off"
          value={value}
          onChange={changeHandler}
        />
      </form>
      <button className="add-btn" onClick={formHandler}>
        <Buttons d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </button>
    </div>
  );
};

export default SearchBar;
