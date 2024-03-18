import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import StaffPhoto from "../../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../../About/LeftSideTables";

const HeatShrinkHighTemp = () => {
  document.title = "Team | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid style={{ maxWidth: "1800px" }}>
          <div className="profile-foreground position-relative mx-n4 mt-n4">
            <div className="profile-wid-bg">
              <img src={profileBg} alt="" className="profile-wid-img" />
            </div>
          </div>
          <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
            <Row className="g-4">
              <Col xs={12} className="col-lg-auto order-last order-lg-0">
                <Row className="text text-white-50 text-center">
                  <Col lg={6} xs={4}>
                    <div className="p-2"></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={12}>
              <Row>
                <Col xxl={9}>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3 className="mb-3 card-header">
                          High-Temperature Heat Shrink Tubing Solutions
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Our{" "}
                          <strong>
                            High-Temperature Heat Shrinkable Tubing
                          </strong>{" "}
                          offerings at Insulation Products Corporation provide
                          unparalleled electrical insulation and feature special
                          properties unavailable in standard tubing. If you're
                          in search of 4:1 shrink ratios or Dual-Wall PTFE
                          tubing, we invite you to{" "}
                          <a href="tel:1.630.771.0700">call us for a quote</a>{" "}
                          today.
                        </p>
                        <h3 className="mb-3 card-header">
                          FEP Heat Shrink Tubing
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          <strong>Product Number: IP38FE</strong>
                          <br />
                          This semi-rigid fluorinated ethylene propylene tubing
                          is designed for high-temperature applications,
                          offering:
                          <ul>
                            <li>
                              Continuous service temperature range from -55°C to
                              200°C
                            </li>
                            <li>Excellent chemical resistance</li>
                            <li>Ultra-clear visibility</li>
                            <li>Compliance with AMS-DTL-23053/11</li>
                          </ul>
                          FEP Heat Shrink Tubing is ideal for use as chafe
                          guards on braided metal hoses, for terminal and splice
                          insulation, and over probes in corrosive environments.
                          Its outstanding chemical inertness and low shrink
                          temperature make it a versatile choice where PTFE
                          properties are desired.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          PTFE Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>
                            Product Numbers: IP37SH, IP36TH, IP39LH
                          </strong>
                          <br />
                          Our PTFE Heat Shrink Tubing features:
                          <ul>
                            <li>2:1 shrink ratio for versatile application</li>
                            <li>Capability to withstand high temperatures</li>
                            <li>Exceptional chemical resistance</li>
                            <li>Compliance with AMS-DTL-23053/12</li>
                          </ul>
                          Renowned for its use in high temperature applications,
                          corrosive atmospheres, and as electrical insulation
                          tubing, PTFE tubing boasts the lowest coefficient of
                          friction of any known solid, offering non-wetting,
                          self-lubricating, and anti-stick properties. It is
                          immune to all known chemicals, except in some specific
                          conditions and temperatures, and provides excellent
                          resistance to weathering and outdoor exposure. PTFE is
                          an optimal insulator for electrical applications due
                          to its wide operating temperature range and
                          non-combustible nature.
                        </p>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Explore our high-temperature heat shrink tubing
                          solutions tailored for demanding applications. For
                          more details or to request a quote, contact us at{" "}
                          <a href="tel:1.630.771.0700">1.630.771.0700</a>.
                        </p>
                        <Row>
                          <Col xs={6} md={4}>
                            <div className="d-flex mt-4">
                              <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                  <i className="ri-user-2-fill"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <p className="mb-1">Designation :</p>
                                <h6 className="text-truncate mb-0">
                                  Lead Designer / Developer
                                </h6>
                              </div>
                            </div>
                          </Col>

                          <Col xs={6} md={4}>
                            <div className="d-flex mt-4">
                              <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                  <i className="ri-global-line"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <p className="mb-1">Website :</p>
                                <Link to="#" className="fw-semibold">
                                  www.velzon.com
                                </Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <LeftSideTables />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HeatShrinkHighTemp;
