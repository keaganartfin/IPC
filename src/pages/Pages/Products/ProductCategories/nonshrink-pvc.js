import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import StaffPhoto from "../../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../../About/LeftSideTables";


const NonShrinkPVC = () => {
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
                      <Card className="rounded-0 bg-secondary-subtle mx-n4 mt-n3 border-top pt-10">
                        <div className="px-4">
                          <Row>
                            <Col xxl={5} className="align-self-center">
                              <div className="py-4">
                                <h4 className="display-6 coming-soon-text3">
                                  Non-Shrink PVC Tubing Solutions
                                </h4>
                                <p className="text-secondary fs-15 mt-3">
                                  Insulation Products Corporation offers a
                                  diverse array of{" "}
                                  <strong>
                                    flame-retardant Non-Shrink PVC Tubing
                                  </strong>
                                  , showcasing excellent electrical, chemical,
                                  and physical properties suitable for a wide
                                  range of applications.
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
                            <div
                              className="col-xxl-3 ms-auto mr-3 faq-img"
                              style={{ width: "32rem" }}
                            >
                              <div className="h-100 mb-n5 pb-1 d-none d-lg-flex align-items-center">
                                <img
                                  src={StaffPhoto}
                                  alt=""
                                  className="img-fluid"
                                  style={{ maxHeight: "100%" }}
                                />
                              </div>
                            </div>
                          </Row>
                        </div>
                      </Card>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3 className="mb-3 card-header">
                          Low Temperature Vinyl Tubing
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          <strong>Product Number: IP1274</strong>
                          <br />A premier choice for low temperature PVC tubing,
                          featuring:
                          <ul>
                            <li>Exceptional low temperature flexibility</li>
                            <li>Flame retardancy</li>
                            <li>Designed specifically for aircraft devices</li>
                            <li>
                              Soft durometer for superior flexibility and high
                              cut-through resistance
                            </li>
                            <li>
                              Meets MIL-I-7444 Types 1&3 and MIL-I-22076
                              standards
                            </li>
                          </ul>
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Extruded 105°C Vinyl Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP10EX</strong>
                          <br />
                          This high-temperature PVC tubing offers:
                          <ul>
                            <li>Excellent dielectric strength up to 105°C</li>
                            <li>U/L recognized and CSA certified</li>
                            <li>
                              Cost-effectiveness for a range of applications
                            </li>
                            <li>Meets MIL-I-631D, Grade C requirements</li>
                          </ul>
                          Available in standard and .032" wall thickness for
                          special orders requiring a 600V rating.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          General Purpose Vinyl Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP12GA</strong>
                          <br />A versatile general purpose PVC tubing, known
                          for:
                          <ul>
                            <li>Wide operational temperature range</li>
                            <li>Flame retardancy and flexibility</li>
                            <li>
                              High dielectric strength and fungus resistance
                            </li>
                            <li>Non-corrosive properties</li>
                            <li>Compliance with MIL-I-631D, Grades A & B</li>
                          </ul>
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Fractional Wall Plastic Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP15PV</strong>
                          <br />
                          Ideal for low-pressure FDA applications, offering:
                          <ul>
                            <li>Food-grade vinyl construction</li>
                            <li>Heavy wall for durability</li>
                            <li>Kink resistance</li>
                            <li>
                              Compliance with U.S. Pharmacopoeia Classes I
                              through VI and Federal Specification L-T-790B
                            </li>
                          </ul>
                          Available in 100 ft. coils or 50' lengths with options
                          for custom sizes.
                        </p>
                        <p className="mt-3 mb-5 fs-5 px-5">
                          To discover more about our Non-Shrink PVC Tubing
                          solutions or for any inquiries, please contact us at{" "}
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or
                          email{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>
                          .
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

export default NonShrinkPVC;
