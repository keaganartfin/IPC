import React from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Container, Input, Label, Col, Row } from "reactstrap";

const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Pricing" pageTitle="Pages" />
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <div className="mb-3">
                <Label for="firstNameinput" className="form-label">
                  First Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your firstname"
                  id="firstNameinput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="lastNameinput" className="form-label">
                  Last Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter your lastname"
                  id="lastNameinput"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Label for="compnayNameinput" className="form-label">
                  Company Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                  id="compnayNameinput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="phonenumberInput" className="form-label">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  className="form-control"
                  placeholder="+(245) 451 45123"
                  id="phonenumberInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="emailidInput" className="form-label">
                  Email Address
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  placeholder="example@gamil.com"
                  id="emailidInput"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Label for="address1ControlTextarea" className="form-label">
                  Address
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Address 1"
                  id="address1ControlTextarea"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="citynameInput" className="form-label">
                  City
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Enter your city"
                  id="citynameInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="ForminputState" className="form-label">
                  State
                </Label>
                <select
                  id="ForminputState"
                  className="form-select"
                  data-choices
                  data-choices-sorting="true"
                >
                  <option>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </Col>
            <Col md={12}>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
