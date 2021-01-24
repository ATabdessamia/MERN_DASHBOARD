import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Buttons from "../Buttons";
import ModalTch from "./ModalTch";
import Modal from "../../Modal";
import { deleteTeacher, getAllTeachers } from "../../actions/teacherActions";

const Table = ({ teachers, formHandler, count }) => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  const [teachId, setTeachId] = useState("");

  const modalHandler = (e, id) => {
    e.preventDefault();
    setHidden(!hidden);
    setTeachId(id);
  };

  const onDeleteTeacher = (e, id) => {
    e.preventDefault();
    dispatch(deleteTeacher(id));
    dispatch(getAllTeachers());
    count();
  };

  return (
    <>
      {hidden && (
        <Modal renderModal={<ModalTch id={teachId} />} title="teach" />
      )}
      <table className="table">
        <caption className="caption">teachers</caption>
        <thead className="border-b border-purple-900">
          <tr className="text-center capitalize text-purple-700">
            <th className="py-2">id</th>
            <th>first name</th>
            <th>last name</th>
            <th>teach</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="flex-1">
          {teachers &&
            teachers.map((teacher) => {
              return (
                <tr className="tr-body" key={teacher._id}>
                  <td className="text-yellow-500 py-3">{teacher._id}</td>
                  <td>{teacher.firstName}</td>
                  <td>{teacher.lastName}</td>
                  <td>
                    <button
                      className="teach-btn"
                      onClick={(e) => modalHandler(e, teacher._id)}
                    >
                      <Buttons d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </button>
                  </td>
                  <td>
                    <button className="edite-btn" onClick={formHandler}>
                      <Buttons d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={(e) => onDeleteTeacher(e, teacher._id)}
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

export default Table;
