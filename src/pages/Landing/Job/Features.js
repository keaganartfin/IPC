import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

import Avatar10 from "../../../assets/images/users/avatar-10.jpg";
import About from "../../..//assets/images/ipc/Front-Cover.jpg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center justify-content-lg-between justify-content-center gy-4">
            <Col lg={5} sm={7}>
              <div className="about-img-section mb-5 mb-lg-0 text-center">
                <Card className="rounded shadow-lg inquiry-box d-none d-lg-block">
                  <CardBody className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0 me-3">
                      <div className="avatar-title bg-secondary-subtle text-secondary rounded-circle fs-18">
                        <i className="ri-briefcase-2-line"></i>
                      </div>
                    </div>
                    <h5 className="fs-15 lh-base mb-0">
                      Search Through{" "}
                      <span className="text-secondary fw-semibold">5,000+</span>{" "}
                      Unique Parts
                    </h5>
                  </CardBody>
                </Card>

                <Card className="feedback-box">
                  <CardBody className="d-flex shadow-lg">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={Avatar10}
                        alt=""
                        className="avatar-sm rounded-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fs-14 lh-base mb-0">Jaime Gomez</h5>
                      <p className="text-muted fs-11 mb-1">Google Reviews</p>

                      <div className="text-warning">
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <img
                  src={About}
                  alt=""
                  className="img-fluid mx-auto rounded-3"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-muted">
                <h2 className="mb-3 lh-base fw-semibold">
                  Find The <span className="text-primary">Parts You Need</span>{" "}
                  in One Place
                </h2>
                <p className="ff-secondary fs-16 mb-2">
                  Since 1974, Insulation Products Corporation has been committed
                  to providing our customers with superior products and service.
                  As a major supplier of heat-shrinkable and extruded tubing,
                  sleeving and adhesives, we pride ourselves on quick, accurate
                  and courteous service.
                </p>
                <p className="ff-secondary fs-16">
                  At Insulation Products Corporation the customer is number one,
                  our staff is dedicated to processing all customer requests
                  quickly. We are happy to answer your questions and respond to
                  your concerns. We strive to develop strong relationships with
                  our customers.
                </p>

                <div className="vstack gap-2 mb-4 pb-1">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs icon-effect">
                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                          <i className="ri-check-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">Large Selection Of Parts</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs icon-effect">
                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                          <i className="ri-check-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">Easy To Use Catalog</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs icon-effect">
                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                          <i className="ri-check-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">Fantastic Customer Service</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link to="/product-specs" className="btn btn-primary">
                    View Catalog{" "}
                    <i className="ri-arrow-right-line align-bottom ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
