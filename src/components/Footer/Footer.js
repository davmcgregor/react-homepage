import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
    return (
      <Navbar
        style={{
          borderTop: "3px solid black",
          textAlign: "center",
          display: "inline-block"
        }}
        fixed="bottom"
        bg="light"
      >
        <Navbar.Brand style={{margin: "0"}}>
          <h5>
            Made with<span role="img" aria-label="heart">  ❤️  </span>in London
          </h5>
          <h6>Copyright. 2020 Otter Limited</h6>
        </Navbar.Brand>
      </Navbar>
    );
}

export default Footer;
