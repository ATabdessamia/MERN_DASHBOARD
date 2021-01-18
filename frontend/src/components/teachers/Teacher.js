import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import SearchBar from "../SearchBar";
import Table from "./TableTch";
import Navigation from "../Navigation";
import FormTch from "./FormTch";
import Loading from "../Loading";
import { getAllTeachers } from "../../actions/teacherActions";

const Teacher = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");

  const data = useSelector((state) => state.teachers);
  const { loading, error, teachers } = data;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  if (!teachers) {
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
    dispatch(getAllTeachers(term));
    if (term === "") {
      dispatch(getAllTeachers());
    }
  };

  return (
    <>
      {visible ? (
        <Form value="0" form={<FormTch />} />
      ) : (
        <Form value="full" form={<FormTch />} />
      )}
      <SearchBar
        formHandler={formHandler}
        value={term}
        changeHandler={searchTerm}
        onSubmitSearch={onSubmitSearch}
      />
      <div className="lg:p-5 md:p-4 sm:p-3 p-2">
        <h3 className="h3-s">teachers</h3>
        <div className="scroll-table">
          {loading && <Loading />}
          {error && (
            <div className="text-center p-5 text-xl font-black text-red-600">
              {error}
            </div>
          )}
          <Table teachers={teachers} />
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Teacher;
