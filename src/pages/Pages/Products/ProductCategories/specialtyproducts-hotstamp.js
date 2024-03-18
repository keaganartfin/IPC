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


const SpecialtyHotStamp = () => {
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
                          Identification Markers for Wire and Cable
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation, we provide
                          advanced <strong>Identification Markers</strong> for
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
                          Our hot stamping service allows for customization with
                          your manufacturer's logo, part number, date code, and
                          serial number across all types of sleevings, heat
                          shrinkable tubing, and cable ties. Choose from a wide
                          variety of type sizes, tubing colors, and imprint
                          colors to achieve the perfect finished look for your
                          products.
                          <br />
                          <br />
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
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or
                          email us at{" "}
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

export default SpecialtyHotStamp;
