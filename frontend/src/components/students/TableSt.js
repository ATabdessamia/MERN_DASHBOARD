import React from "react";
import { useDispatch } from "react-redux";

import Buttons from "../Buttons";
import { deleteStudent, getAllStudents } from "../../actions/studentActions";

const TableSt = ({ students }) => {
  const dispatch = useDispatch();

  const onDeleteStudent = (e, id) => {
    e.preventDefault();
    dispatch(deleteStudent(id));
    dispatch(getAllStudents());
  };

  return (
    <table className="table">
      <caption className="caption">students</caption>
      <thead className="border-b border-purple-900">
        <tr className="text-center capitalize text-purple-700">
          <th className="py-2">id</th>
          <th>first name</th>
          <th>last name</th>
          <th>class</th>
          <th>teachers</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="flex-1">
        {students &&
          students.map((student) => {
            return (
              <tr className="tr-body" key={student._id}>
                <td className="text-yellow-500 py-3">{student._id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.className}</td>
                <td>
                  <select className="bg-purple-100 focus:outline-none hover:text-purple-500 w-5">
                    {student.teachers.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button className="edite-btn">
                    <Buttons d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </button>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={(e) => onDeleteStudent(e, student._id)}
                  >
                    <Buttons d="M6 18L18 6M6 6l12 12" />
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TableSt;
