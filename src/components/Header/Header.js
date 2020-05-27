import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar
        style={{ borderBottom: "3px solid black" }}
        fixed="top"
        bg="light"
      >
        <Navbar.Brand style={{ paddingLeft: "5%", fontSize: "2em" }}>
          Otter
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
