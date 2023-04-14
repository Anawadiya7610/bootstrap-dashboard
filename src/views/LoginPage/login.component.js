import React from "react";
import "./../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImgLogo from "./logo.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCubes } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <Container className="h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xl={8}>
            <Card style={{ borderRadius: "1rem" }}>
              <Row className="g-0">
                <Col md={6} lg={5} className="d-none d-md-block">
                  <Card.Img
                    src={ImgLogo}
                    alt="login form"
                    className="img-fluid images"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </Col>
                <Col md={6} lg={7 } className="d-flex align-items-center">
                  <Card.Body className="p-2 p-lg-3 text-black ">
                    <Form>
                      <div className="d-flex align-items-center mb-1 pb-1">
                       
                        <h1 className="fw-bold mb-0">Logo</h1>
                      </div>

                      <h5
                        className="fw-normal mb-1 pb-1"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className="form-label">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email address"
                          size="lg"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="form-label">Password</Form.Label>

                        <Form.Control
                          type="password"
                          placeholder="Password"
                          size="lg"
                        />
                      </Form.Group>

                      <div className="pt-1 mb-2">
                        <Link to="/dashboard">
                          <Button variant="dark" size="lg" block>
                            Login
                          </Button>
                        </Link>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-3 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
