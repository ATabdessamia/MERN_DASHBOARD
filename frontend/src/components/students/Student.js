import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form.js";
import SearchBar from "../SearchBar";
import Table from "./TableSt";
import Navigation from "../Navigation";
import FormSt from "./FormSt";
import Loading from "../Loading.js";
import Error from "../Error";
import { getAllStudents } from "../../actions/studentActions";

const Student = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");
  let [count, setCount] = useState(1);

  const response = useSelector((state) => state.students);
  const { loading, error, students } = response;

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  const formHandler = () => {
    setVisible(!visible);
  };

  const searchTerm = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getAllStudents(term));
    if (term === "") {
      dispatch(getAllStudents());
    }
  };

  const next = () => {
    count++;
    setCount(count);
    dispatch(getAllStudents("", count));
  };

  const prev = () => {
    count--;
    if (count < 1) return (count = 1);
    setCount(count);
    dispatch(getAllStudents("", count));
  };

  return (
    <>
      {visible ? (
        <Form value="0" form={<FormSt />} />
      ) : (
        <Form value="full" form={<FormSt />} />
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
        <Error error={error} to="students" />
      ) : (
        <div className="lg:p-5 md:p-4 sm:p-3 p-2">
          <div className="scroll-table">
            {loading && <Loading />}
            <Table students={students.data} />
          </div>
          <Navigation
            next={next}
            prev={prev}
            count={count}
            size={students.resultes}
          />
        </div>
      )}
    </>
  );
};

export default Student;
