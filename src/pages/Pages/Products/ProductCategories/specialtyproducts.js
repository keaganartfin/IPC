import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import StaffPhoto from "../../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";
import { SPS } from "../data/specialty-data";

const SpecialtyProductsAndServices = () => {
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
                        <h3 className="mb-3 card-header">
                          Specialty Products and Services
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation,
                          we are proud to offer an extensive array of{" "}
                          Specialty Products and Services{" "}
                          tailored to meet the diverse needs of electrical
                          insulation tubing and wire harness applications. Our
                          selection includes{" "}
                          
                            printed wire & cable markers, custom spooling,
                            cutting-to-length services, bagging, tubing kits,
                            industrial adhesives, heat guns,
                          {" "}
                          and various other complementary products designed to
                          facilitate your project requirements efficiently.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Value-Added Services
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Our Value-Added Services are
                          carefully crafted to enhance your operational
                          efficiencies and boost your profits. Backed by a vast
                          inventory and the expertise of our experienced
                          engineers, we are equipped to provide personalized
                          guidance and solutions for all your tubing, sleeving,
                          and adhesive needs. Our commitment to excellence is
                          underscored by our adherence to strict{" "}
                          ISO quality standards, ensuring you
                          receive only the highest level of performance and
                          reliability from our products and services.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Contact Us
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          For further details about our electrical insulation
                          tubing, value-added services, or to explore our range
                          of specialty products, please don't hesitate to
                          contact our friendly{" "}
                          customer service team at{" "}
                          <a href="tel:6307710700">+1 (630) 771-0700</a>. We are
                          here to support your project's success from start to
                          finish.
                        </p>
                      </Row>
                    </CardBody>
                  </Card>
                  <Row>
                    {SPS.map((item, index) => (
                      <Col sm={6} xl={4} key={index}>
                        <Card>
                          <CardBody>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="img-fluid rounded"
                            />
                          </CardBody>
                          <CardBody>
                            <ul className="list-inline fs-14 text-muted">
                              <li className="list-inline-item">
                                {item.subtitle}
                              </li>
                            </ul>
                            <Link to="#!">
                              <h5>{item.title}</h5>
                            </Link>
                            <p className="text-muted fs-14">
                              {item.description.length > 150
                                ? item.description.slice(
                                    0,
                                    item.description
                                      .substr(0, 151)
                                      .lastIndexOf(" ")
                                  ) + " ..."
                                : item.description}
                            </p>
                            <div>
                              <Link to={item.link} className="link-success">
                                Learn More{" "}
                                <i className="ri-arrow-right-line align-bottom ms-1"></i>
                              </Link>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
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

export default SpecialtyProductsAndServices;
