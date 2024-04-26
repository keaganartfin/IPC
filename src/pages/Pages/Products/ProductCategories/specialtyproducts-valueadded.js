import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture1 from "../../../../assets/images/ipc/value-added.png";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";

const SpecialtyValueAdded = () => {
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
                          Value-Added Services 
                          <span className="fs-5 float float-end">
                            Spec Sheet:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/ValueAdded"
                            >
                              Value Added Spec Sheet{" "}
                              <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            At Insulation Products Corporation, we excel in
                            providing Value-Added Services that
                            cater to a wide range of customization and
                            processing needs. Our services include spooling,
                            coiling, and precision cutting to custom lengths,
                            all tailored to fit the unique specifications of any
                            tubing application.
                          </p>
                          <h3
                            className="card-title mb-3 fs-4"
                            style={{ paddingLeft: "1.5rem" }}
                          >
                            Custom Spooling and Coiling{" "}
                          </h3>

                          <p className="mt-3 mb-5 fs-5 px-5">
                            Whether you require small volume or high volume
                            orders, with tight tolerances or specific lengths,
                            IPC is equipped to deliver. Our state-of-the-art
                            facility operates under strict{" "}
                            <em>ISO 9001 quality standards</em>, ensuring the
                            highest level of precision and quality in every
                            order. Spools and coils can be customized with your
                            specific labeling requirements, ensuring seamless
                            integration into your operations.
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
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Precision Cutting
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Our cutting service is designed to provide you with
                          tubing cut to the exact lengths you need. Pieces can
                          be bagged according to your specifications, offering a
                          ready-to-use solution that fits perfectly into your
                          project or product assembly.
                        </p>
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
                          Additional Customization Options
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          IPC's capabilities extend beyond cutting and coiling.
                          We offer slitting services for certain types of
                          tubing, allowing for longitudinal cuts that meet your
                          specific requirements. Bar coding and Just-In-Time
                          (JIT) delivery services are also available, leveraging
                          our extensive inventory to meet your supply chain
                          needs efficiently.
                          <br />
                          <br />
                          As your comprehensive resource for all tubing needs,
                          IPC is dedicated to offering a one-stop-shop
                          experience. Our team is ready to work with you to
                          understand your specific requirements and deliver
                          customized solutions that exceed expectations.
                          <br />
                          <br />
                          For more information on our Value-Added Services or to
                          discuss your project's unique needs, please contact
                          our sales team. We're here to provide detailed
                          information and assistance every step of the way.
                          <br />
                          <br />
                          Reach out to us at{" "}
                          <a href="tel:6307710700">+1 (630) 771-0700</a> or via
                          email at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com{" "}
                            <i className="bx bx-link-external"></i>
                          </a>{" "}
                          for additional details.
                        </p>
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

export default SpecialtyValueAdded;
