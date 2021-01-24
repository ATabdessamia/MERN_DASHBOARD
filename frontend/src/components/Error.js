import React from "react";

const Error = ({ error }) => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="flex flex-col items-center mt-2">
      <button
        onClick={refreshPage}
        className="self-end mr-5 bg-red-400 px-5 text-purple-100 rounded transform hover:scale-95 hover:bg-red-500 uppercase focus:outline-none"
      >
        back
      </button>

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
