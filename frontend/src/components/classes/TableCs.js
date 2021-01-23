import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Buttons from "../Buttons";
import ModalCs from "./ModalCs";
import Modal from "../../Modal";
import { deleteClass, getAllClasses } from "../../actions/classActions";

const TableCs = ({ classes }) => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  const [student, setStudent] = useState({});
  const [date, setDate] = useState("");

  const modalHandler = (e, st, year) => {
    e.preventDefault();
    setHidden(!hidden);
    setStudent(st);
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
          renderModal={<ModalCs st={student} year={date} />}
          title="attend"
        />
      )}
      <table className="table">
        <caption className="caption">classess</caption>
        <thead className="border-b border-purple-900">
          <tr className="text-center capitalize text-purple-700">
            <th className="py-2">id</th>
            <th>class name</th>
            <th>teachers</th>
            <th>attend</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="flex-1">
          {classes &&
            classes.map((clas) => {
              return (
                <tr className="tr-body" key={clas._id}>
                  <td className="text-yellow-500 py-3">{clas._id}</td>
                  <td>{clas.className}</td>
                  <td>
                    <select
                      defaultValue="teachers"
                      className="bg-purple-100 focus:outline-none hover:text-purple-500 w-5 capitalize"
                    >
                      {clas.teachers.map((t) => (
                        <option
                          key={t._id}
                        >{`${t.firstName} ${t.lastName}`}</option>
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
