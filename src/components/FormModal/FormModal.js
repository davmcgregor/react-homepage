import React from "react";
import { Modal } from "react-bootstrap";

import FormContent from "../FormContent.js";

import "./FormModal.css"

function FormModal({show, onHide}) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
        <FormContent onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;
