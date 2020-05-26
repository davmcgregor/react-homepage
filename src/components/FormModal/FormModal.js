import React from "react";
import { Modal } from "react-bootstrap";

import FormContent from "../FormContent.js";

import "./FormModal.css"

const FormModal = ({show, onHide}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
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
