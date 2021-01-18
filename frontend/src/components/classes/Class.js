import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import SearchBar from "../SearchBar";
import Table from "./TableCs";
import Navigation from "../Navigation";
import FormCs from "./FormCs";
import Loading from "../Loading";
import { getAllClasses } from "../../actions/classActions";

const Class = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");

  const data = useSelector((state) => state.classes);
  const { loading, error, classes } = data;

  useEffect(() => {
    dispatch(getAllClasses());
  }, [dispatch]);

  if (!classes) {
    return <Loading />;
  }

  const formHandler = () => {
    setVisible(!visible);
  };

  const searchTerm = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getAllClasses(term));
    if (term === "") {
      dispatch(getAllClasses());
    }
  };

  return (
    <>
      {visible ? (
        <Form value="0" form={<FormCs />} />
      ) : (
        <Form value="full" form={<FormCs />} />
      )}
      <SearchBar
        formHandler={formHandler}
        value={term}
        changeHandler={searchTerm}
        onSubmitSearch={onSubmitSearch}
      />
      <div className="lg:p-5 md:p-4 sm:p-3 p-2">
        <h3 className="h3-s">classess</h3>
        <div className="scroll-table">
          {loading && <Loading />}
          {error && (
            <div className="text-center p-5 text-xl font-black text-red-600">
              {error}
            </div>
          )}
          <Table classes={classes} />
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Class;
