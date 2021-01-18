import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ renderModal, title }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="relative bg-indigo-100 min-h-full  w-full shadow-lg">
        <div className="modal-head">
          <h1>{title}</h1>
        </div>
        {renderModal}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
