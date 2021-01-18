import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";
import { createTeacher, getAllTeachers } from "../../actions/teacherActions";
import Alert from "../Alert";

const subjects = ["math", "biology", "geography", "history", "science"];
const classes = [
  "kindrgarten",
  "grade 1",
  "grade 2",
  "grade 3",
  "grade 4",
  "grade 5",
];

const FormTch = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [cls, setCls] = useState([]);
  const [subj, setSubj] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeacher(fName, lName, cls, subj, startDate));
    dispatch(getAllTeachers());
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
      </div>
      <div className="p-5">
        <label
          htmlFor="date"
          className="text-lg capitalize text-purple-100 mr-3"
        >
          school year
        </label>
        <DatePicker
          id="date"
          className="p-1 rounded focus:outline-none ring ring-purple-100 ring-opacity-75"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="w-full my-2 rounded-md">
        <label className="text-lg capitalize text-purple-100 mb-1 ml-5">
          teach
        </label>
        <div className="p-5 flex md:flex-col lg:flex-row">
          <Select
            options={subjects}
            title="subjects"
            onChange={(e) =>
              setSubj([...e.target.selectedOptions].map((o) => o.value))
            }
          />
          <Select
            options={classes}
            title="classes"
            onChange={(e) =>
              setCls([...e.target.selectedOptions].map((o) => o.value))
            }
          />
        </div>
      </div>
      <div className="flex justify-end  p-5">
        <button className="hidden-save" type="submit">
          <Buttons d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </button>
      </div>
    </form>
  );
};

export default FormTch;
