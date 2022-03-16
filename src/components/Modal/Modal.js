import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";

import "./Modal.css";

function Modal() {
  const context = useContext(ModalContext);
  return (
    <div className="modal">
      <div className="modal_overlay"> </div>
      <div className="modal_body">
        <button onClick={context.handleCloseModal}>X</button>
      </div>
    </div>
  );
}

export default Modal;
