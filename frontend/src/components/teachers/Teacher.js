import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import SearchBar from "../SearchBar";
import Table from "./TableTch";
import Navigation from "../Navigation";
import FormTch from "./FormTch";
import Loading from "../Loading";
import Error from "../Error";
import { getAllTeachers } from "../../actions/teacherActions";

const Teacher = ({ location }) => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");
  const [btn, setBtn] = useState("add");
  let [count, setCount] = useState(1);

  const response = useSelector((state) => state.teachers);
  const { loading, error, teachers } = response;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  const formHandler = (btn) => {
    setVisible(!visible);
    setBtn(btn);
  };

  const searchTerm = (e) => {
    setTerm(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(getAllTeachers(term));
    term === "" && dispatch(getAllTeachers());
  };

  const next = () => {
    count++;
    setCount(count);
    dispatch(getAllTeachers("", count));
  };

  const prev = () => {
    count--;
    if (count < 1) return (count = 1);
    setCount(count);
    dispatch(getAllTeachers("", count));
  };

  return (
    <>
      {visible ? (
        <Form
          value="0"
          form={<FormTch disable={btn} count={() => setCount(1)} />}
        />
      ) : (
        <Form value="full" form={<FormTch />} />
      )}
      <SearchBar
        formHandler={() => formHandler("add")}
        value={term}
        changeHandler={searchTerm}
        onSubmitSearch={onSubmitSearch}
      />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} loc={location} />
      ) : (
        <div className="lg:p-5 md:p-4 sm:p-3 p-2">
          <div className="scroll-table">
            <Table
              teachers={teachers.data}
              formHandler={() => formHandler("edite")}
              count={() => setCount(1)}
            />
          </div>
          <Navigation
            next={next}
            prev={prev}
            count={count}
            size={teachers.resultes}
          />
        </div>
      )}
    </>
  );
};

export default Teacher;
