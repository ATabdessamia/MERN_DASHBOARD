import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import SearchBar from "../SearchBar";
import Table from "./TableCs";
import Navigation from "../Navigation";
import FormCs from "./FormCs";
import Loading from "../Loading";
import Error from "../Error";
import { getAllClasses } from "../../actions/classActions";

const Class = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");
  let [count, setCount] = useState(1);

  const response = useSelector((state) => state.classes);
  const { loading, error, classes } = response;

  useEffect(() => {
    dispatch(getAllClasses());
  }, [dispatch]);

  const formHandler = () => {
    setVisible(!visible);
  };

  const searchTerm = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getAllClasses(term));
    term === "" && dispatch(getAllClasses());
  };

  const next = () => {
    count++;
    setCount(count);
    dispatch(getAllClasses("", count));
  };

  const prev = () => {
    count--;
    if (count < 1) return (count = 1);
    setCount(count);
    dispatch(getAllClasses("", count));
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
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="lg:p-5 md:p-4 sm:p-3 p-2">
          <div className="scroll-table">
            <Table classes={classes.data} />
          </div>
          <Navigation
            next={next}
            prev={prev}
            count={count}
            size={classes.resultes}
          />
        </div>
      )}
    </>
  );
};

export default Class;
