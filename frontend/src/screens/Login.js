import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Buttons from "../components/Buttons";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import { login } from "../actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState("");
  const [pwd, setPwd] = useState("");

  const logIn = useSelector((state) => state.logIn);
  const { loading, error } = logIn;

  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(login(admin, pwd));
    setAdmin("");
    setPwd("");
  };

  return (
    <>
      {loading && <Loading />}
      {error && <Alert />}
      <div className="login">
        <div className="lt-s">
          <img
            src="/images/undraw_Login_re_4vu2.svg"
            alt="login"
            className="object-fill max-w-full h-auto"
          />
        </div>
        <form className="rt-s" onSubmit={onSubmitLogin}>
          <div className="form-group">
            <label htmlFor="admin" className="my-2">
              user name
            </label>
            <input
              id="admin"
              type="text"
              placeholder="Admin"
              className="log-input"
              autoComplete="off"
              value={admin}
              onChange={(e) => {
                setAdmin(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="my-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              minLength="8"
              className="log-input"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="log-btn">
              Login{" "}
              <Buttons
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                viewBox="0 0 20 20"
                className="w-6 h-6 inline"
                evenodd="evenodd"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
