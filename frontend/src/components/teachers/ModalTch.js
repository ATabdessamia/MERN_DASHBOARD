import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../Loading";
import { getTeacher } from "../../actions/teacherActions";

const ModalTch = ({ id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teacher);
  const { loading, error, teacher } = data;

  useEffect(() => {
    dispatch(getTeacher(id));
  }, [dispatch, id]);

  if (!teacher) {
    return <Loading />;
  }

  const year = `${teacher.teach.year.split("-")[0] - 1}/${
    teacher.teach.year.split("-")[0]
  }`;

  return (
    <>
      {loading && <Loading />}
      {error && (
        <div className="text-center p-5 text-xl font-black text-red-600">
          {error}
        </div>
      )}
      <h3 className="ml-10 p-2 capitalize text-purple-700 font-black text-lg">
        school year :
        <span className="bg-purple-300 rounded text-purple-900 font-thin ml-1">
          {year}
        </span>
      </h3>
      <div className="p-4 flex flex-col lg:flex-row">
        <table className="table-auto w-full h-full text-md border-4 border-purple-300">
          <thead className="border-b border-purple-500">
            <tr className="text-center capitalize p-5 text-purple-700">
              <th>classe_ids</th>
            </tr>
          </thead>
          <tbody>
            {teacher.teach.classes.map((clss) => {
              return (
                <tr className="modal-tr" key={Math.random()}>
                  <td className="text-yellow-500 py-1 text-center">{clss}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="table-auto w-full text-md border-4 mt-2 lg:mt-0 border-purple-300 lg:ml-1">
          <thead className="border-b border-purple-400">
            <tr className="text-center capitalize p-5 text-purple-700">
              <th>subjects</th>
            </tr>
          </thead>
          <tbody>
            {teacher.teach.Subjects.map((sub) => {
              return (
                <tr className="modal-tr" key={Math.random()}>
                  <td className="text-center py-1">{sub}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModalTch;
