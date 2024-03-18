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


const NonShrinkSleeving = () => {
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
                          Non-Shrink Sleeving Solutions
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Insulation Products Corporation offers a comprehensive
                          range of <strong>Non-Shrink Sleevings</strong> for
                          applications requiring protective covering without
                          shrinkable features. Our inventory includes Expandable
                          Polyester Sleeving, Roundit 2000 Sleeving, and
                          Fiberglass Sleeving, each designed to meet specific
                          protection needs.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Expandable Polyester Sleeving
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Numbers: IP61ES / IP62EF</strong>
                          <br />
                          Our Expandable Polyester Sleeving is engineered for
                          flexibility and conformity to irregular shapes, making
                          it ideal for protecting cable bundles and wire
                          assemblies. This lightweight, encapsulating sleeving
                          is braided from polyethylene terephthalate
                          monofilament, ensuring resistance to cut-through,
                          chemicals, fungus, and abrasion.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Roundit® 2000 Sleeving
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP63ES</strong>
                          <br />
                          Roundit® 2000 Sleeving offers exceptional toughness
                          and flexibility. It is a self-wrapping sleeving,
                          crafted from a woven blend of polyester monofilaments
                          and multifilaments. The flat weave construction
                          provides a rugged yet smooth finish, making it quick
                          and easy to apply or remove, while perfectly
                          conforming to irregular shapes.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Fiberglass Sleeving
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP63ES</strong>
                          <br />
                          <strong>
                            Product Numbers: IP64FS / IPC65VC / IP66AC / IP67SC
                          </strong>
                          <br />
                          For applications subjected to very high temperatures,
                          our Fiberglass Sleeving is the ideal solution. It is
                          specifically designed for heat resistance and is
                          available with various coatings to meet specific
                          thermal and dielectric requirements. This sleeving is
                          perfect for environments where extreme heat protection
                          is a necessity.
                        </p>
                        <p className="mt-3 mb-5 fs-5 px-5">
                          <strong>Product Number: IP63ES</strong>
                          <br />
                          To learn more about our Non-Shrink Sleeving options or
                          for assistance in selecting the right sleeving
                          solution for your application, please contact
                          Insulation Products Corporation at{" "}
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or via
                          email at{" "}
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

export default NonShrinkSleeving;
