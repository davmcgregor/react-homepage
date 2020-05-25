import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
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
  }
}

export default Header;
