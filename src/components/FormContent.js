import React, { useState } from "react";
import axios from "axios";

import { Form, Button, InputGroup } from "react-bootstrap";

function FormContent({ onHide }) {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [confirmEmail, setconfirmEmail] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (email !== confirmEmail) {
      alert("emails do not match");
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post(
          "https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup",
          { name, email }
        )
        .then((res) => {
          console.log(res.data.success);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            setError(error.response.data.error);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error);
        });
      setValidated(true);
    }
  };

  if (validated === false) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ padding: "3%" }}>Request an Invite</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <InputGroup size="lg" style={{ padding: "3% 0 1.5% 0" }}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Full Name
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                minLength={3}
                type="text"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setName(e.target.value)}
                isInvalid={name.length < 3}
                isValid={name.length >= 3}
              />
              <Form.Control.Feedback type="invalid">
                Name needs to be at least 3 characters long
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <InputGroup size="lg" style={{ padding: "3% 0 1.5% 0" }}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Email
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                type="email"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!email.includes("@")}
                isValid={email.includes("@")}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formConfirmEmail">
            <InputGroup size="lg" style={{ padding: "3% 0 1.5% 0" }}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">
                  Confirm email
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                required
                type="email"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setconfirmEmail(e.target.value)}
                isInvalid={confirmEmail !== email}
                isValid={confirmEmail === email}
              />
              <Form.Control.Feedback type="invalid">
                Email must match
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button
            size="lg"
            variant="dark"
            type="submit"
            style={{ padding: "1% 5% 1% 5%" }}
          >
            Send
          </Button>
        </Form>
      </div>
    );
  } else if (error.length < 1) {
    return (
      <div>
        <h1 style={{ padding: "2%" }}>All done!</h1>
        <h5 style={{ padding: "2%" }}>
          You will be one of the first to be notified when we launch
        </h5>
        <Button
          type="button"
          size="lg"
          variant="dark"
          style={{ padding: "1% 8% 1% 8%" }}
          onClick={onHide}
        >
          OK
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ padding: "2%" }}>{error}</h1>
        <Button
          type="button"
          size="lg"
          variant="dark"
          style={{ padding: "1% 8% 1% 8%" }}
          onClick={onHide}
        >
          OK
        </Button>
      </div>
    );
  }
}

export default FormContent;
