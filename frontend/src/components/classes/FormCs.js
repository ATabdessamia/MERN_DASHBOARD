import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";
import Loading from "../Loading";
import Alert from "../Alert";
import Error from "../Error";
import "react-datepicker/dist/react-datepicker.css";
import { getAllTeachers } from "../../actions/teacherActions";
import { getAllStudents } from "../../actions/studentActions";
import {
  createClass,
  getAllClasses,
  updateClass,
} from "../../actions/classActions";

const FormCs = ({ disable, count }) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [cls, setCls] = useState("");
  const [id, setId] = useState("");
  const [stud, setStud] = useState([]);
  const [profs, setProfs] = useState([]);
  const [btn, setBtn] = useState("create");

  const response = useSelector((state) => state.teachers);
  const { loading, error, teachers } = response;
  const response_2 = useSelector((state) => state.students);
  const { loadings, errors, students } = response_2;

  useEffect(() => {
    dispatch(getAllTeachers());
    dispatch(getAllStudents());
  }, [dispatch]);

  if (!teachers.data || !students.data) {
    const err = `${error} or ${errors}`;
    return <Error error={err} />;
  }

  const teacher = teachers.data.map((t) => t._id);
  const student = students.data.map((s) => s._id);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (cls === "" || profs === [] || stud === [])
      toast.error("Please,Fill in the details below");

    btn === "create"
      ? dispatch(createClass(cls, profs, stud, startDate))
      : id !== "" && dispatch(updateClass(id, cls, profs, stud, startDate));

    dispatch(getAllClasses());
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
          id="cName"
          label="class name"
          placeholder="grad ex"
          onChange={(e) => setCls(e.target.value)}
          value={cls}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Select
          options={teacher}
          title="teachers"
          onChange={(e) =>
            setProfs([...e.target.selectedOptions].map((o) => o.value))
          }
        />
      )}

      <div className="w-full my-4 rounded-md">
        <label className="text-lg capitalize text-purple-100 mb-1 ml-5">
          attend
        </label>
        <div className="p-5">
          {loadings ? (
            <Loading />
          ) : (
            <Select
              options={student}
              title="students"
              className="hidden-select ml-7 px-1"
              onChange={(e) =>
                setStud([...e.target.selectedOptions].map((o) => o.value))
              }
            />
          )}

          <div className="ml-7 mt-10">
            <label
              htmlFor="date"
              className="text-lg capitalize text-purple-100 mr-3"
            >
              school year
            </label>
            <DatePicker
              id="date"
              className="p-1 rounded focus:outline-none ring ring-purple-100 ring-opacity-75  mt-2  "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end p-5">
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

export default FormCs;
