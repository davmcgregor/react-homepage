import React from "react";
import { Modal } from "react-bootstrap";

import FormContent from "../FormContent.js";

import "./FormModal.css"

function FormModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body closeButton dialogClassName="form-modal">
        <h1 style={{padding: "3%"}}>Request an Invite</h1>
        <FormContent />

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Body>
    </Modal>
  );
}

export default FormModal;
