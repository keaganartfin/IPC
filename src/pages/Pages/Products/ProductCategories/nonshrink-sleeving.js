import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture1 from "../../../../assets/images/ipc/IP61ES.jpg";
import picture2 from "../../../../assets/images/ipc/ip63es.jpg";
import picture3 from "../../../../assets/images/ipc/ip64fs-1.jpg";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";

const NonShrinkSleeving = () => {
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
                          Non-Shrink Sleeving Solutions
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-danger-subtle text-danger badge-border"
                              target="_blank"
                              href="/product-catalog/IP61ESIP62EF"
                            >
                              IP61ES <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-dark-subtle text-dark badge-border"
                              target="_blank"
                              href="/product-catalog/IP61ESIP62EF"
                            >
                              IP62EF <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            Insulation Products Corporation offers a
                            comprehensive range of{" "}
                            Non-Shrink Sleevings for
                            applications requiring protective covering without
                            shrinkable features. Our inventory includes
                            Expandable Polyester Sleeving, Roundit 2000
                            Sleeving, and Fiberglass Sleeving, each designed to
                            meet specific protection needs.
                          </p>
                          <h3
                            className="card-title mb-3 fs-4"
                            style={{ paddingLeft: "1.5rem" }}
                          >
                            Expandable Polyester Sleeving
                          </h3>

                          <p className="mt-3 mb-5 fs-5 px-5">
                            Our Expandable Polyester Sleeving is engineered for
                            flexibility and conformity to irregular shapes,
                            making it ideal for protecting cable bundles and
                            wire assemblies. This lightweight, encapsulating
                            sleeving is braided from polyethylene terephthalate
                            monofilament, ensuring resistance to cut-through,
                            chemicals, fungus, and abrasion.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture2}
                              alt=""
                            />
                          </div>
                        </Col>
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
                          Roundit® 2000 Sleeving
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/product-catalog/IP61ESIP62EF"
                            >
                              IP61ES <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-info-subtle text-info badge-border"
                              target="_blank"
                              href="/product-catalog/IP61ESIP62EF"
                            >
                              IP62EF <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            Roundit® 2000 Sleeving offers exceptional toughness
                            and flexibility. It is a self-wrapping sleeving,
                            crafted from a woven blend of polyester
                            monofilaments and multifilaments. The flat weave
                            construction provides a rugged yet smooth finish,
                            making it quick and easy to apply or remove, while
                            perfectly conforming to irregular shapes.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture3}
                              alt=""
                            />
                          </div>
                        </Col>
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
                          Fiberglass Sleeving
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-warning-subtle text-warning badge-border"
                              target="_blank"
                              href="/product-catalog/IP63ES"
                            >
                              IP63ES <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-danger-subtle text-danger badge-border"
                              target="_blank"
                              href="/product-catalog/IP64FS"
                            >
                              IP64FS <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-dark-subtle text-dark badge-border"
                              target="_blank"
                              href="/product-catalog/IP64FSIP65VCIP66ACIP67SC"
                            >
                              IPC65VC <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/product-catalog/IP64FSIP65VCIP66ACIP67SC"
                            >
                              IP66AC <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-success-subtle text-success badge-border"
                              target="_blank"
                              href="/product-catalog/IP64FSIP65VCIP66ACIP67SC"
                            >
                              IP67SC <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            For applications subjected to very high
                            temperatures, our Fiberglass Sleeving is the ideal
                            solution. It is specifically designed for heat
                            resistance and is available with various coatings to
                            meet specific thermal and dielectric requirements.
                            This sleeving is perfect for environments where
                            extreme heat protection is a necessity.
                          </p>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            To learn more about our Non-Shrink Sleeving options
                            or for assistance in selecting the right sleeving
                            solution for your application, please contact
                            Insulation Products Corporation at{" "}
                            <a href="tel:6307710700">+1 (630) 771-0700</a> or
                            via email at{" "}
                            <a href="mailto:sales@insulationproducts.com">
                              sales@insulationproducts.com
                            </a>
                            .
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

export default NonShrinkSleeving;
