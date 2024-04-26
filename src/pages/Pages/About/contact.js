import React from "react";
import { Card, CardBody, Col, Row, Label, Input } from "reactstrap";

import contactimg from "../../../assets/images/illustrations/contactus.png";
import bgImg from "../../../assets/images/background-image.png";

const Contact = () => {
  return (
    <Col xxl={9}>
      <Card>
        <CardBody>
          <Card className="rounded-0 bg-info-subtle mx-n4 mt-n3 border-top pt-10">
            <div className="px-4">
              <Row>
                <Col xxl={5} className="align-self-center">
                  <div className="py-4">
                    <h4 className="display-6 coming-soon-text2">
                      Contact Us <br /> Directly
                    </h4>
                    <p className="text-info fs-15 mt-3">
                      Drop us a line and we will be sure to get back to you as
                      soon as possible!
                    </p>
                    <div className="hstack gap-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-label rounded-pill me-1"
                        href="mailto:sales@insulationproducts.com"
                      >
                        <i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                        Email Us
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-label rounded-pill"
                        href="tel:+16307710700"
                      >
                        <i className="ri-phone-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                        Give us a call
                      </button>
                    </div>
                  </div>
                </Col>
                <div className="col-xxl-3 ms-auto">
                  <div className="mb-n5 pb-1 faq-img d-none d-xxl-block">
                    <img src={contactimg} alt="" className="img-fluid" />
                  </div>
                </div>
              </Row>
            </div>
          </Card>
          <Row className="justify-content-evenly mb-4">
            <Col md={6}>
              <div className="mb-3">
                <Label for="firstNameinput" className="form-label">
                  First Name
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="First Name"
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
                  required
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
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
                  required
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
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
                  required
                  type="tel"
                  className="form-control"
                  placeholder="+1 (000) 000-0000"
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
                  required
                  type="email"
                  className="form-control"
                  placeholder="example@insulationproducts.com"
                  id="emailidInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="address1ControlTextarea" className="form-label">
                  Address Line 1
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="250 Gibraltar Dr"
                  id="address1ControlTextarea"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="address1ControlTextareaTwo" className="form-label">
                  Address Line 2
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Suite 111"
                  id="address1ControlTextareaTwo"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <Label for="citynameInput" className="form-label">
                  City
                </Label>
                <Input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Bolingbrook"
                  id="citynameInput"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <Label for="zipcodeInput" className="form-label">
                  Zip Code
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="60440"
                  id="zipcodeInput"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mb-3">
                <Label for="statenameInput" className="form-label">
                  State
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Illinois"
                  id="statenameInput"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Label for="ForminputState" className="form-label">
                  Message
                </Label>
                <textarea
                  required
                  type="url"
                  className="form-control"
                  id="contactMessage"
                  placeholder="What can we help with, today?"
                  rows="4"
                />
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
        </CardBody>
      </Card>
    </Col>
  );
};

export default Contact;
