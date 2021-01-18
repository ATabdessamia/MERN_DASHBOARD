import React from "react";

import Buttons from "./Buttons";

const Navigation = () => {
  return (
    <div className="text-purple-100 mt-2 flex justify-end">
      <button className="prev-btn">
        <Buttons d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </button>
      <button className="next-btn">
        <Buttons d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </button>
    </div>
  );
};

export default Navigation;
