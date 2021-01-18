import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Buttons from "../components/Buttons";
import { logout } from "../actions/authActions";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
  const menuHandler = () => {
    setHidden(!hidden);
  };

  const onSubmitLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const visible = hidden ? "hidden" : "";

  return (
    <header className="header">
      <div className="flex items-center justify-between ">
        <Link to="/dashboard" className="brand">
          <img
            src="/images/undraw_Tabs_re_a2bd.svg"
            alt="brand"
            className="max-h-8 mr-1"
          />
          <span>dashboard</span>
        </Link>
        <div className="md:hidden cursor-pointer px-4">
          <button
            className="focus:outline-none transform hover:scale-105"
            onClick={menuHandler}
          >
            <Buttons
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              viewBox="0 0 20 20"
              evenodd="evenodd"
            />
          </button>
        </div>
      </div>
      <div
        className={`flex-1 border-t py-2 md:py-0 border-purple-300 md:border-0 md:flex flex mt-4 md:mt-0 justify-between md:justify-end  items-center ${visible}`}
      >
        <div className="avatar flex">
          <span className="ml-2 md:ml-0">Admin</span>
          <img
            src="/images/avatar-male-man.svg"
            alt="avatar"
            className="ml-2 max-w-20 h-12 mb-2 md:mb-0 hidden md:block"
          />
        </div>
        <div className="mr-5">
          <button className="out-btn" onClick={onSubmitLogout}>
            <Buttons
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              viewBox="0 0 20 20"
              evenodd="evenodd"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
