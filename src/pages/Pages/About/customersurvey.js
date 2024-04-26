import React, { useState } from "react";
import { Card, CardBody, Col, Row, Label, Input } from "reactstrap";

import customerreview from "../../../assets/images/illustrations/reviews.png";
import Rating from "react-rating";

const CustomerSurvey = () => {
  const [customize, setcustomize] = useState("");

  return (
    <Col xxl={9}>
      <Card>
        <CardBody>
          <Card className="rounded-0 bg-light mx-n4 mt-n3 border-top pt-10">
            <div className="px-4">
              <Row>
                <Col xxl={5} className="align-self-center">
                  <div className="py-4">
                    <h4 className="display-6 coming-soon-text2">
                      Rate Your Experience
                    </h4>
                    <p className="text-primary fs-15 mt-3">
                      Leave us some feedback letting us know what we're doing
                      right or what we need to work on.
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
                    <img src={customerreview} alt="" className="img-fluid" />
                  </div>
                </div>
              </Row>
            </div>
          </Card>
          <Row className="justify-content-evenly mb-4">
            <Col md={6}>
              <div className="mb-3">
                <Label for="FirstNameInput" className="form-label">
                  First Name
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  id="FirstNameInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="LastNameInput" className="form-label">
                  Last Name
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  id="LastNameInput"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Label for="CompnayInput" className="form-label">
                  Company Name
                </Label>
                <Input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  id="CompnayInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="PhoneInput" className="form-label">
                  Phone Number
                </Label>
                <Input
                  required
                  type="tel"
                  className="form-control"
                  placeholder="+1 (000) 000-0000"
                  id="PhoneInput"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="mb-3">
                <Label for="EmailInput" className="form-label">
                  Email Address
                </Label>
                <Input
                  required
                  type="email"
                  className="form-control"
                  placeholder="example@insulationproducts.com"
                  id="EmailInput"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Label for="FeedbackInput" className="form-label d-flex">
                  Rate your experience today
                </Label>
                <Rating
                  initialRating={customize}
                  stop={5}
                  emptySymbol="mdi mdi-star-outline text-muted "
                  fullSymbol="mdi mdi-star-outline text-warning "
                  onChange={(customize) => setcustomize(customize)}
                  className="d-flex display-4"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="mb-3">
                <Label for="FeedbackInput" className="form-label">
                  Feedback
                </Label>
                <textarea
                  required
                  type="url"
                  className="form-control"
                  placeholder="Leave us a message letting us know how your experience was for today."
                  id="FeedbackInput"
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

export default CustomerSurvey;
