import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form.js";
import SearchBar from "../SearchBar";
import Table from "./TableSt";
import Navigation from "../Navigation";
import FormSt from "./FormSt";
import { getAllStudents } from "../../actions/studentActions";
import Loading from "../Loading.js";

const Student = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");

  const data = useSelector((state) => state.students);
  const { loading, error, students } = data;

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  if (!students) {
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
    dispatch(getAllStudents(term));
    if (term === "") {
      dispatch(getAllStudents());
    }
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
      <div className="lg:p-5 md:p-4 sm:p-3 p-2">
        <h3 className="h3-s">students</h3>
        <div className="scroll-table">
          {loading && <Loading />}
          {error && (
            <div className="text-center p-5 text-xl font-black text-red-600">
              {error}
            </div>
          )}
          <Table students={students} />
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Student;
