import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import StaffPhoto from "../../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../../About/LeftSideTables";

const HeatShrinkNeopreneFluro = () => {
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
                          Neoprene/Fluoroelastomer Heat Shrink Tubing Solutions
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Insulation Products Corporation offers an extensive
                          range of <strong>Heat Shrink Tubing</strong>{" "}
                          solutions, including our Neoprene and Fluoroelastomer
                          lines, designed to meet the rigorous demands of
                          various industrial applications.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Neoprene Heat Shrink Tubing
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          <strong>Product Number: IP41NE</strong>
                          <br />
                          Our Neoprene Tubing, a modified polychloroprene, is
                          highly recommended for applications needing a durable,
                          flexible covering. It is particularly suited for
                          cables and harness applications in extreme
                          environmental conditions, offering:
                          <ul>
                            <li>High abrasion resistance</li>
                            <li>Flexibility at low temperatures</li>
                            <li>
                              Superior cut-through and abrasion resistance with
                              its thick-wall construction
                            </li>
                            <li>
                              Excellent resistance to most fluids and solvents,
                              including oils
                            </li>
                            <li>Meets SAE QPL-AS23053/1 requirements</li>
                          </ul>
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Fluoroelastomer Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP43VT</strong>
                          <br />
                          Our Fluoroelastomer Tubing enhances the properties of
                          Neoprene by adding high-temperature performance up to
                          200°C, making it ideal for:
                          <ul>
                            <li>
                              Applications requiring both low temperature and
                              chemical resistance
                            </li>
                            <li>
                              Environments needing high-temperature performance
                            </li>
                            <li>Meeting SAE QPL-AS23053/13 requirements</li>
                          </ul>
                          Both types of tubing are suitable for hot-stamping,
                          enabling easy and permanent wire and terminal
                          identification.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Diesel-Resistant Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP56DR</strong>
                          <br />
                          This elastomeric polyolefin tubing is designed to
                          offer:
                          <ul>
                            <li>
                              Exceptional resistance to aviation and diesel
                              fuels, hydraulic fluids, greases, and lubricants
                            </li>
                            <li>
                              Flame retardancy and long-term fluid, heat, and
                              mechanical abuse resistance
                            </li>
                            <li>
                              Flexibility in low temperatures, suited for cables
                              and harness applications in any condition
                            </li>
                            <li>
                              Compliance with AMS-DTL-23053/16, with QPL product
                              available upon request
                            </li>
                          </ul>
                        </p>
                        <p className="mt-3 mb-5 fs-5 px-5">
                          For more details or to inquire about our
                          Neoprene/Fluoroelastomer Heat Shrink Tubing solutions,
                          please contact our sales department at{" "}
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or via
                          email at{" "}
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

export default HeatShrinkNeopreneFluro;
