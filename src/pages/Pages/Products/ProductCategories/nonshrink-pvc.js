import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture1 from "../../../../assets/images/ipc/IP1274.png";
import picture2 from "../../../../assets/images/ipc/ip17tw.jpg";
import picture3 from "../../../../assets/images/ipc/ip12ga.jpg";
import picture4 from "../../../../assets/images/ipc/IP15PV.jpg";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";

const NonShrinkPVC = () => {
  document.title = "Team | Insulation Products Corporation";

  return (
    <React.Fragment>
      <img
        src={bgImg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          maxWidth: "100vw",
          height: "100%",
        }}
      />
      <div className="page-content">
        <Container fluid style={{ maxWidth: "2800px" }}>
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
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Low Temperature Vinyl Tubing
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/product-catalog/IP32IP"
                            >
                              IP32IP <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            Product Number: IP1274
                            <br />A premier choice for low temperature PVC
                            tubing, featuring:
                            <ul>
                              <li>Exceptional low temperature flexibility</li>
                              <li>Flame retardancy</li>
                              <li>
                                Designed specifically for aircraft devices
                              </li>
                              <li>
                                Soft durometer for superior flexibility and high
                                cut-through resistance
                              </li>
                              <li>
                                Meets MIL-I-7444 Types 1&3 and MIL-I-22076
                                standards
                              </li>
                            </ul>
                            A low temperature extruded PVC electrical insulation
                            tubing designed for aeronautical applications,
                            general purpose bundling, harnessing, and many other
                            uses.
                            <br />
                            <br />
                            IP1274 has a very soft durometer (71 Shore A) which
                            makes it extremely flexible and also has a high
                            cut-through resistance. It meets the requirements of
                            MIL-I-7444 Types 1&3 and MIL-I-22076.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture1}
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Extruded 105°C Vinyl Tubing
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-secondary-subtle text-secondary badge-border"
                              target="_blank"
                              href="/product-catalog/IP10EX"
                            >
                              IP10EX <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            This high-temperature PVC tubing offers:
                            <ul>
                              <li>Excellent dielectric strength up to 105°C</li>
                              <li>U/L recognized and CSA certified</li>
                              <li>
                                Cost-effectiveness for a range of applications
                              </li>
                              <li>Meets MIL-I-631D, Grade C requirements</li>
                            </ul>
                            High temperature extruded PVC tubing designed for
                            electrical applications, general purpose bundling,
                            and many other uses. <br />
                            <br />
                            105°C vinyl tubing is a low cost, flexible vinyl
                            with excellent electrical, mechanical and thermal
                            properties for applications up to 105°C. It carries
                            Underwriters Laboratories recognition and is rated
                            VW-1 along with Canadian Standards Association
                            certification. IP10EX meets the requirements of
                            MIL-I-631D, Grade C.
                            <br />
                            <br />
                            This tubing is available with standard wall
                            thickness shown below along with a .032″ wall
                            thickness in sizes #24 thru 1/2″ on special order
                            where 600V rating is needed.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture2}
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          General Purpose Vinyl Tubing
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-danger-subtle text-danger badge-border"
                              target="_blank"
                              href="/product-catalog/IP12GA"
                            >
                              IP12GA <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            A versatile general purpose PVC tubing, known for:
                            <ul>
                              <li>Wide operational temperature range</li>
                              <li>Flame retardancy and flexibility</li>
                              <li>
                                High dielectric strength and fungus resistance
                              </li>
                              <li>Non-corrosive properties</li>
                              <li>Compliance with MIL-I-631D, Grades A & B</li>
                            </ul>
                            IP12GA is a general purpose, extruded PVC tubing
                            with a wide temperature range designed for
                            appliances, electric motors, commercial and military
                            aircraft, general purpose bundling, harnessing, and
                            many other uses that require a low temperature
                            tubing that remains flexible.
                            <br />
                            <br />
                            IP12GA has a high dielectric strength, excellent
                            flexibility, fungus resistance and is non-corrosive.
                            It meets the requirements of MIL-I-631D, Grades A &
                            B.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture3}
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Fractional Wall Plastic Tubing
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/product-catalog/IP15PV"
                            >
                              IP15PV <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
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
                            IP15PV is great for low pressure FDA applications.
                            Virgin materials are used for this Food and Drug
                            Administration approved Vinyl tubing.
                            <br />
                            <br /> Vinyl tubing is clear, smooth, flexible,
                            corrosion-resistant, non-aging and non-oxidizing.
                            Meets tests such as U.S. Pharmacopoeia Classes I
                            through VI and the criteria set forth by Federal
                            Specification L-T-790B for laboratory and medical
                            tubing
                            <br />
                            <br /> (including oxygen handling). Sold from stock
                            in 100 ft. coils (up to 11/16″ x 15/16″ x 1/8″ wall)
                            and in 50′ lengths (11/16″ x 1″ x 5/32″ wall and
                            larger). Cut pieces or special lengths on quotation.
                          </p>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            To discover more about our Non-Shrink PVC Tubing
                            solutions or for any inquiries, please contact us at{" "}
                            <a href="tel:6307710700">+1 (630) 771-0700</a> or
                            email{" "}
                            <a href="mailto:sales@insulationproducts.com">
                              sales@insulationproducts.com
                            </a>
                            .
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture4}
                              alt=""
                            />
                          </div>
                        </Col>
                        <Row>
                          
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
