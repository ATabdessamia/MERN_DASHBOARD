import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";
import Alert from "../Alert";
import "react-datepicker/dist/react-datepicker.css";
import {
  createTeacher,
  getAllTeachers,
  updateTeacher,
} from "../../actions/teacherActions";

const subjects = ["math", "biology", "geography", "history", "science"];
const classes = [
  "kindrgarten",
  "grade 1",
  "grade 2",
  "grade 3",
  "grade 4",
  "grade 5",
];

const FormTch = ({ disable, count }) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [id, setId] = useState("");
  const [cls, setCls] = useState([]);
  const [subj, setSubj] = useState([]);
  const [btn, setBtn] = useState("create");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (fName === "" || lName === "" || cls === [] || subj === [])
      toast.error("Please,Fill in the details below");

    btn === "create"
      ? dispatch(createTeacher(fName, lName, cls, subj, startDate))
      : id !== "" &&
        dispatch(updateTeacher(id, fName, lName, cls, subj, startDate));

    dispatch(getAllTeachers());
    count();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Alert />
      <div className="p-5">
        {disable === "edite" && (
          <Input
            id="id"
            label="id"
            placeholder="60096cef111d335f1ae70754"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        )}
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
      <div className="flex justify-end md:flex-col p-5">
        {disable === "add" ? (
          <button
            className="hidden-save"
            type="submit"
            onClick={() => setBtn("create")}
          >
            <Buttons
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              className="w-6 h-6 mr-1"
            />
            create
          </button>
        ) : (
          <button
            className="hidden-save"
            type="submit"
            onClick={() => setBtn("update")}
          >
            <Buttons
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              className="w-6 h-6 mr-1"
            />
            update
          </button>
        )}
      </div>
    </form>
  );
};

export default FormTch;
