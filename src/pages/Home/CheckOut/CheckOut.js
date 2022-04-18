import React, { Fragment, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "./CheckOut.css";

const CheckOut = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    toast("Thanks for your CheckOut");

    setValidated(true);
  };

  return (
    <Fragment>
      <div className="checkout-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="justify-content-between d-flex">
            <p>DEA# BHSDFBEGdbg</p>
            <p>License # 12312344</p>
            <p>NPI # 123434337416</p>
          </div>

          <div className="text-center">
            <h2 className="text-info">Dr. William F Turner</h2>
            <h3>National Hospital</h3>
            <h5>I Main Street </h5>
            <h5>NY, NY 10000</h5>
            <h6>(+1) 222 333 444</h6>
          </div>

          <p className="m-5">Date:</p>

          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label> Patient name *</Form.Label>
              <Form.Control required type="name" placeholder="Patient name" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label> Date of Birth *</Form.Label>
              <Form.Control required type="date" placeholder="Date of Birth" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Patient Email *</Form.Label>
              <Form.Control required type="email" placeholder="Patient Email" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label> Gender *</Form.Label>
              <Form.Control required type="text" placeholder="Gender" />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Age *</Form.Label>
              <Form.Control required type="number" placeholder="Age" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label> Weight *</Form.Label>
              <Form.Control required type="number" placeholder="Weight" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Allergies *</Form.Label>
              <Form.Control required type="text" placeholder="Allergies" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Address 1 *</Form.Label>
              <Form.Control required type="text" placeholder="Address 1" />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Address 2</Form.Label>
              <Form.Control required type="text" placeholder="Address 2" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>City *</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State *</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Phone number *</Form.Label>
              <Form.Control type="number" placeholder="Phone number" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip *</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedbackType="invalid"
            />
          </Form.Group>

          <p className="signature">Signature</p>

          <Button className="submit-style" type="submit">
            Proceed to checkout
          </Button>
        </Form>
      </div>

      <ToastContainer />
    </Fragment>
  );
};

export default CheckOut;
