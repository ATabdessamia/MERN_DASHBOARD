import React from "react";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center mt-2">
      <Link
        to="/dashboard"
        className="self-end mr-5 bg-red-400 px-5 text-purple-100 rounded transform hover:scale-95 hover:bg-red-500 "
      >
        <button className="uppercase focus:outline-none">back</button>
      </Link>
      <img
        src="/images/undraw_Notify_re_65on.svg"
        alt="error"
        className="w-1/2"
      />
      <div className="p-5 mb-5 text-xl font-black flex-1 text-red-400">
        {error}
      </div>
    </div>
  );
};

export default Error;
