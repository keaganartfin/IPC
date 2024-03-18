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


const NonShrinkTubing = () => {
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
                          Non-Heat Shrink Tubing Solutions
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation, we specialize in
                          providing <strong>Non-Heat Shrink Tubing</strong> for
                          a variety of needs within the electronic and
                          electrical industries. Our tubing options serve as
                          excellent electrical insulators and are versatile
                          enough for uses ranging from fluid transfer to various
                          other applications. We pride ourselves on delivering{" "}
                          <strong>premium quality products</strong>, with an
                          unrivaled attention to detail and deep industry
                          knowledge that sets us apart from our competitors.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Our Non-Heat Shrink Tubing Offerings
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Among the most popular types of non-heat shrink tubing
                          we offer is{" "}
                          <strong>
                            extruded polyvinylchloride (PVC) tubing
                          </strong>
                          . Known for its inherent flame-retardant properties,
                          our PVC tubing is available in a wide array of grades,
                          sizes, and colors to meet your specific needs.
                          Additionally, we supply <strong>PTFE tubing</strong>{" "}
                          for applications requiring non-toxic materials or
                          resistance to high temperatures. Our catalog also
                          includes various forms of{" "}
                          <strong>slit conduit and spiral wrap tubing</strong>,
                          ideal for bundling purposes where flexibility and easy
                          access are key.
                          <br />
                          <br />
                          Beyond Non-Shrink Tubing, our product range extends to{" "}
                          <strong>woven and expandable sleeving</strong> for
                          scenarios demanding superior abrasion resistance. Our
                          selection features woven fiberglass and expandable
                          polyester sleevings, engineered to accommodate a broad
                          spectrum of application requirements, available in
                          multiple sizes and styles.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Contact Us
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          For more detailed information about our Non-Shrink
                          electrical insulation tubing options, reach out to our{" "}
                          <strong>dedicated customer service team</strong> at{" "}
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or
                          connect with our sales department via email at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>
                          . We're here to assist you in selecting the right
                          products for your needs.
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

export default NonShrinkTubing;
