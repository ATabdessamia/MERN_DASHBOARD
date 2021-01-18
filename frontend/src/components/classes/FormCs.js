import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";
import { getAllTeachers } from "../../actions/teacherActions";
import { getAllStudents } from "../../actions/studentActions";
import { createClass, getAllClasses } from "../../actions/classActions";
import Loading from "../Loading";
import Alert from "../Alert";

const FormCs = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [cls, setCls] = useState("");
  const [stud, setStud] = useState([]);
  const [profs, setProfs] = useState([]);

  const data = useSelector((state) => state.teachers);
  const { loading, teachers } = data;
  const data2 = useSelector((state) => state.students);
  const { loadings, students } = data2;

  useEffect(() => {
    dispatch(getAllTeachers());
    dispatch(getAllStudents());
  }, [dispatch]);

  if (!teachers || !students) {
    return <Loading />;
  }

  const teacher_ids = teachers.map((t) => t._id);
  const student_ids = students.map((s) => s._id);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createClass(cls, profs, stud, startDate));
    dispatch(getAllClasses());
  };
  return (
    <form className="mt-5" onSubmit={onFormSubmit}>
      {loading && <Loading />}
      {loadings && <Loading />}
      <Alert />
      <div className="p-5">
        <Input
          id="cName"
          label="class name"
          placeholder="grad ex"
          onChange={(e) => setCls(e.target.value)}
          value={cls}
        />
      </div>

      <Select
        options={teacher_ids}
        title="teachers"
        onChange={(e) =>
          setProfs([...e.target.selectedOptions].map((o) => o.value))
        }
      />

      <div className="w-full my-4 rounded-md">
        <label className="text-lg capitalize text-purple-100 mb-1 ml-5">
          attend
        </label>
        <div className="p-5">
          <Select
            options={student_ids}
            title="students"
            className="hidden-select ml-7 px-1"
            onChange={(e) =>
              setStud([...e.target.selectedOptions].map((o) => o.value))
            }
          />

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
        <button className="hidden-cls">
          <Buttons d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </button>
        <button className="hidden-save" type="submit">
          <Buttons d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </button>
      </div>
    </form>
  );
};

export default FormCs;
