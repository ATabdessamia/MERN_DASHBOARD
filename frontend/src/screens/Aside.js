import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="bg-purple-900 md:w-1/5 md:p-5 p-4 text-center text-white z-40">
      <div className="flex md:flex-col md:mt-40 mt-20 justify-center items-center md:items-stretch">
        <Link to="/dashboard/teachers" className="tab-btn">
          <button className="focus:outline-none">teachers</button>
        </Link>

        <Link to="/dashboard/students" className="tab-btn">
          <button className="focus:outline-none">students</button>
        </Link>

        <Link to="/dashboard/classes" className="tab-btn">
          <button className="focus:outline-none">classes</button>
        </Link>
      </div>
    </aside>
  );
};

export default Aside;
