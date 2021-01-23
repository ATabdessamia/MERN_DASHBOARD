import React from "react";

import Buttons from "./Buttons";

const Navigation = ({ next, prev, count, size }) => {
  return (
    <div className="text-purple-100 bg-purple-100 flex flex-col items-center py-2">
      <span className="text-xs xs:text-sm text-gray-500 mb-2 capitalize">
        page {count} of {size} entries
      </span>
      <div>
        <button className="prev-btn" onClick={prev}>
          <Buttons d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </button>
        <button className="next-btn" onClick={next}>
          <Buttons d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
