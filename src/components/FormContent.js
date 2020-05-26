import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function FormContent() {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setconfirmEmail] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (email !== confirmEmail) {
      alert("emails do not match");
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(form.checkValidity());
  };

  return (
    <div style={{ textAlign: "center" }}>
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
            />
            <Form.Control.Feedback type="invalid">
              Name needs to be at least 3 characters long
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <InputGroup size="lg" style={{ padding: "3% 0 1.5% 0" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              required
              type="email"
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              onChange={(e) => setEmail(e.target.value)}
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
            />
            <Form.Control.Feedback type="invalid">
              Please provide a matching email.
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
}

export default FormContent;
