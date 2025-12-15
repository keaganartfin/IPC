import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture1 from "../../../../assets/images/ipc/tubingkits-e1470671026976.png";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";

const SpecialtyTubingKits = () => {
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
                          Tubing Kits
                          <span className="fs-5 float float-end">
                            Spec Sheet:{" "}
                            <a
                              className="badge bg-danger-subtle text-danger badge-border"
                              target="_blank"
                              href="/product-catalog/TubingKits"
                            >
                              Tubing Kits{" "}
                              <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            At Insulation Products Corporation, we offer custom{" "}
                            Tubing Kits tailored to meet your
                            specific requirements. Whether you need kits
                            packaged in single tubs, divided boxes, or zipper
                            bags, we have the flexibility and resources to
                            accommodate your needs. Our team is dedicated to
                            assisting you with the design, including layout,
                            sizing, and selection of the appropriate types of
                            tubing for your application.
                            <br />
                            <br />
                            Our kits can incorporate a variety of tubing
                            options, including our own products, your products,
                            or a combination thereof. To enhance identification
                            and personalization, tubing within the kits can be
                            marked with size, type, or even your company’s name
                            and logo.
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
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Additionally, we ensure that the packaging—be it
                          boxes, bags, or tubs—is clearly labeled with your
                          company information, contents, and part numbers,
                          providing a professional presentation that's perfect
                          for sales samples, whether used in-office or on the
                          road.
                          <br />
                          <br />
                          Our custom Tubing Kits are an excellent resource for
                          sales representatives and technicians alike, offering
                          a convenient and organized way to present a range of
                          tubing solutions to customers and clients.
                          <br />
                          <br />
                          For more information on our Tubing Kits or to discuss
                          your specific needs, please reach out to our sales
                          team. We’re here to create the perfect solution for
                          your tubing kit requirements.
                          <br />
                          <br />
                          Connect with Insulation Products Corporation by
                          calling{" "}
                          <a href="tel:6307710700">+1 (630) 771-0700</a> or
                          emailing us at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com{" "}
                            <i className="bx bx-link-external"></i>
                          </a>{" "}
                          for detailed information and assistance.
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

export default SpecialtyTubingKits;
