import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./../../index.css";
import { HeaderPageContainer } from "../../component/header/header.container";

const UserForm = (props) => {
  const { convertType } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form:", { name, email, phone });
  };

  return (
    <div className="container_form">
      <HeaderPageContainer />
      <div className={`${convertType ? "content_width" : "show_false"}`}>
        <Container fluid>
        <div className="px-3 vh-100 m-auto">
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <Form.Group controlId="formBasicName">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Village</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter village name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>PinCoad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Pincoad"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UserForm;
