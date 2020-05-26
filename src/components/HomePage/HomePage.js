import React from "react";
import Button from "react-bootstrap/Button";

import FormModal from "../FormModal/FormModal";

import "./HomePage.css";

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="home-content">
      <h1>The new way to happiness is through Otter!</h1>
      <h4 style={{ padding: "2%" }}>Be the first to know when we launch</h4>
      <Button
        size="lg"
        style={{ padding: "1% 5% 1% 5%" }}
        variant="dark"
        onClick={() => setModalShow(true)}
      >
        Request an invite
      </Button>

      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default HomePage;
