import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteClass, getAllClasses } from "../../actions/classActions";
import Buttons from "../Buttons";
import ModalCs from "./ModalCs";
import Modal from "../../Modal";

const TableCs = ({ classes }) => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  const [studentIds, setStudentIds] = useState([]);
  const [date, setDate] = useState("");

  const modalHandler = (e, ids, year) => {
    e.preventDefault();
    setHidden(!hidden);
    setStudentIds(ids);
    setDate(year);
  };

  const onDeleteClass = (e, id) => {
    e.preventDefault();
    dispatch(deleteClass(id));
    dispatch(getAllClasses());
  };
  return (
    <>
      {hidden && (
        <Modal
          renderModal={<ModalCs ids={studentIds} year={date} />}
          title="attend"
        />
      )}
      <table className="table">
        <thead className="border-b border-purple-900">
          <tr className="text-center capitalize p-5 text-purple-700">
            <th>id</th>
            <th>class name</th>
            <th>teachers</th>
            <th>attend</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="flex-1">
          {classes.map((clas) => {
            return (
              <tr className="tr-body" key={clas._id}>
                <td className="text-yellow-500 py-1">{clas._id}</td>
                <td>{clas.className}</td>
                <td>
                  <select
                    defaultValue="teachers"
                    className="bg-purple-100 focus:outline-none hover:text-purple-500 w-5"
                  >
                    {clas.teachers.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button
                    className="teach-btn"
                    onClick={(e) =>
                      modalHandler(
                        e,
                        clas.attend.students,
                        clas.attend.schoolYear
                      )
                    }
                  >
                    <Buttons d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </button>
                </td>
                <td>
                  <button className="edite-btn">
                    <Buttons d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </button>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={(e) => onDeleteClass(e, clas._id)}
                  >
                    <Buttons d="M6 18L18 6M6 6l12 12" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableCs;
