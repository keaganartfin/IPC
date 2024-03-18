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


const SpecialtyTubingKits = () => {
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
                          Tubing Kits Solutions
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation, we offer custom{" "}
                          <strong>Tubing Kits</strong> tailored to meet your
                          specific requirements. Whether you need kits packaged
                          in single tubs, divided boxes, or zipper bags, we have
                          the flexibility and resources to accommodate your
                          needs. Our team is dedicated to assisting you with the
                          design, including layout, sizing, and selection of the
                          appropriate types of tubing for your application.
                          <br />
                          <br />
                          Our kits can incorporate a variety of tubing options,
                          including our own products, your products, or a
                          combination thereof. To enhance identification and
                          personalization, tubing within the kits can be marked
                          with size, type, or even your company’s name and logo.
                          <br />
                          <br />
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
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or
                          emailing us at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>{" "}
                          for detailed information and assistance.
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

export default SpecialtyTubingKits;
