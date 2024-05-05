import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture1 from "../../../../assets/images/ipc/Marker-Sample-2.jpg";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";

const SpecialtyHotStamp = () => {
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
                          Identification Markers for Wire and Cable
                          <span className="fs-5 float float-end">
                            Spec Sheet:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/product-catalog/Markers"
                            >
                              Identification Markers{" "}
                              <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            At Insulation Products Corporation, we provide
                            advanced Identification Markers for
                            wire and cable, utilizing our hot stamp technology.
                            This cost-effective, simple, and aesthetically
                            pleasing method offers a completely dry process for
                            marking or coding your products for identification.
                            Hot stamp markers are ideal for enhancing product
                            identification, thereby increasing production
                            efficiency and the overall appearance of your
                            products.
                            <br />
                            <br />
                            Our hot stamping service allows for customization
                            with your manufacturer's logo, part number, date
                            code, and serial number across all types of
                            sleevings, heat shrinkable tubing, and cable ties.
                            Choose from a wide variety of type sizes, tubing
                            colors, and imprint colors to achieve the perfect
                            finished look for your products.
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
                          We pride ourselves on marking U/L, CSA, and military
                          approved materials with a high-quality, permanent
                          imprint. Our services include precise cutting to
                          length and packaging tailored to your specific needs,
                          all with no minimum order quantity. Our commitment to
                          excellence is supported by our new, high-speed,
                          automated cutting and stamping equipment, ensuring
                          that orders are typically shipped within one to two
                          weeks.
                          <br />
                          <br />
                          Features of our Identification Markers service
                          include:
                          <ul>
                            <li>
                              Application on both shrinkable and non-shrinkable
                              tubing and cable ties
                            </li>
                            <li>A large inventory for immediate delivery</li>
                            <li>
                              Customization to meet your exact specifications
                            </li>
                            <li>
                              No minimum order quantity for ultimate flexibility
                            </li>
                          </ul>
                          <br />
                          <br />
                          Discover the difference our Identification Markers can
                          make in the presentation and functionality of your
                          wire and cable products. For more information or to
                          place an order, contact Insulation Products
                          Corporation at{" "}
                          <a href="tel:6307710700">+1 (630) 771-0700</a> or
                          email us at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>
                          .
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

export default SpecialtyHotStamp;
