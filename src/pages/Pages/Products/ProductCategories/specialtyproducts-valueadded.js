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


const SpecialtyValueAdded = () => {
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
                          Value-Added Services at Insulation Products
                          Corporation
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation, we excel in
                          providing <strong>Value-Added Services</strong> that
                          cater to a wide range of customization and processing
                          needs. Our services include spooling, coiling, and
                          precision cutting to custom lengths, all tailored to
                          fit the unique specifications of any tubing
                          application.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Custom Spooling and Coiling{" "}
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Whether you require small volume or high volume
                          orders, with tight tolerances or specific lengths, IPC
                          is equipped to deliver. Our state-of-the-art facility
                          operates under strict{" "}
                          <em>ISO 9001 quality standards</em>, ensuring the
                          highest level of precision and quality in every order.
                          Spools and coils can be customized with your specific
                          labeling requirements, ensuring seamless integration
                          into your operations.
                        </p>
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
                        <h3
                          className="card-title mb-3 fs-4"
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
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or via
                          email at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>{" "}
                          for additional details.
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

export default SpecialtyValueAdded;
