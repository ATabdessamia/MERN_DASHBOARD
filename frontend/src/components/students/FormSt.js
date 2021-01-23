import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import Alert from "../Alert";
import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";
import Loading from "../Loading";
import Error from "../Error";
import "react-datepicker/dist/react-datepicker.css";
import { getAllTeachers } from "../../actions/teacherActions";
import { createStudent, getAllStudents } from "../../actions/studentActions";

const FormSt = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [cls, setCls] = useState("");
  const [profs, setProfs] = useState([]);

  const response = useSelector((state) => state.teachers);
  const { loading, error, teachers } = response;

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  if (!teachers.data) {
    return <Error error={error} />;
  }

  const teacher = teachers.data.map((t) => `${t.firstName} ${t.lastName}`);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createStudent(fName, lName, startDate, cls, profs));
    dispatch(getAllStudents());
  };

  return (
    <form className="mt-5" onSubmit={onFormSubmit}>
      <Alert />
      <div className="p-5">
        <Input
          id="fName"
          label="first name"
          placeholder="jhon"
          onChange={(e) => setFname(e.target.value)}
          value={fName}
        />
        <Input
          id="lName"
          label="last name"
          placeholder="doe"
          onChange={(e) => setLname(e.target.value)}
          value={lName}
        />
        <Input
          id="cl"
          label="class"
          placeholder="grad x"
          onChange={(e) => setCls(e.target.value)}
          value={cls}
        />

        <label
          htmlFor="date"
          className="text-lg capitalize text-purple-100 mr-3 mt-5"
        >
          school year
        </label>
        <DatePicker
          id="date"
          className="p-1 rounded focus:outline-none ring ring-purple-100 ring-opacity-75 mt-5"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        {loading ? (
          <Loading />
        ) : (
          <Select
            options={teacher}
            title="teachers"
            className="hidden-select block mt-5"
            onChange={(e) =>
              setProfs([...e.target.selectedOptions].map((o) => o.value))
            }
          />
        )}
      </div>
      <div className="flex justify-end p-5">
        <button className="hidden-save" type="submit">
          <Buttons d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </button>
      </div>
    </form>
  );
};

export default FormSt;
