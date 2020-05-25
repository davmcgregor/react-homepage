import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
        <Navbar
          style={{ borderTop: "3px solid black", width: "100%", textAlign: "center"}}
          fixed="bottom"
          bg="light"
        >
          <Navbar.Brand>
              <h5>
                Made with 
                <span role="img" aria-label="heart">
                  ❤️
                </span>
                in London
              </h5>
              <h6>Copyright. 2020 Otter Limited</h6>
          </Navbar.Brand>
        </Navbar>
    );
  }
}

export default Footer;
