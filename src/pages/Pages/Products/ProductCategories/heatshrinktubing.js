import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";
import img2 from "../../../../assets/images/small/img-2.jpg";
import { HST } from "../data/heatshrinktubing-data";

const HeatShrinkTubing = () => {
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
                        <h3 className="mb-3 card-header">Heat Shrink Tubing</h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Insulation Products Corporation has proudly served the
                          electrical and electronic sectors as a leading
                          provider of heat shrink tubing for over 40 years. Our
                          comprehensive selection includes a variety of premium
                          materials that not only meet but exceed the rigorous
                          standards of SAE QPL-AS23053, alongside carrying U/L
                          and CSA certifications. Offering a diverse lineup, our
                          heat shrink tubing comes in several material options,
                          each with distinctive properties to suit different
                          needs. Our range features Polyolefin, PVC, Layflat
                          PVC, PTFE, PVDF, Mylar®, Neoprene®, and
                          Fluoroelastomer tubing. Additionally, we provide
                          options equipped with an adhesive liner on the inside,
                          designed for those requiring a durable, flexible, and
                          waterproof solution.
                          <br />
                          <br />
                          For further assistance, feel free to reach out to our
                          customer service team at 1.630.771.0700 or via email
                          at sales@insulationproducts.com. For quick, easy
                          access to more information, our Product FAQ and
                          Specifications pages are also available to address
                          common inquiries.
                        </p>
                      </Row>
                    </CardBody>
                  </Card>
                  <Row>
                    {HST.map((item, index) => (
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

export default HeatShrinkTubing;
