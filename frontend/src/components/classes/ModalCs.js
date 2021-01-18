import React from "react";

const ModalCs = ({ ids, year }) => {
  const date = `${year.split("-")[0] - 1}/${year.split("-")[0]}`;

  return (
    <>
      <h3 className="ml-10 p-2 capitalize text-purple-700 font-black text-lg">
        school year :
        <span className="bg-purple-300 rounded text-purple-900 font-thin ml-1">
          {date}
        </span>
      </h3>

      <table className="table-auto w-full h-full text-md border-4 border-purple-300">
        <thead className="border-b border-purple-500">
          <tr className="text-center capitalize p-5 text-purple-700">
            <th>students_id</th>
          </tr>
        </thead>
        <tbody>
          {ids.map((id) => (
            <tr className="modal-tr" key={id}>
              <td className="text-yellow-500 py-1 text-center">{id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ModalCs;
