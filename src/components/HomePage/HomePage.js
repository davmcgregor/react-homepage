import React from "react";
import Button from "react-bootstrap/Button";

import CenteredModal from "../Modal.js";

import './HomePage.css'

function HomePage() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="home-content">
        <h1>The new way to happiness is through Otter!</h1>
        <h4 style={{padding: "2%"}}>Be the first to know when we launch</h4>
        <Button className="button" variant="dark" onClick={() => setModalShow(true)}>
          Request an invite
        </Button>

        <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default HomePage;
