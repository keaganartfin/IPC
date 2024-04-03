import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture1 from "../../../../assets/images/ipc/IP33TW-1.png";
import picture2 from "../../../../assets/images/ipc/IP34SR.png";
import picture3 from "../../../../assets/images/ipc/IP30HS.png";
import picture4 from "../../../../assets/images/ipc/IP32IP.png";
import LeftSideTables from "../../About/LeftSideTables";

const HeatShrinkPolyolefin = () => {
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
                          Polyolefin Shrink Tubing Solutions
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
                            Insulation Products Corporation is your go-to source
                            for an expansive selection of{" "}
                            <strong>Polyolefin Shrink Tubing</strong>. Our
                            offerings encompass a broad range of styles and
                            shrink ratios, including both single-wall and
                            dual-wall configurations. Our lineup includes
                            commercial-grade options as well as a wide variety
                            of military and medical-grade products, ensuring we
                            meet the diverse needs of our clients.
                            <br />
                            <br />
                            Our products adhere to the highest standards, being
                            both RoHS and U/L compliant. They boast
                            flame-retardant properties and are resistant to a
                            plethora of environmental factors, including
                            chemicals, oils, sunlight, moisture, and fungus.
                            Application is seamless with the use of a heat gun,
                            presenting a variety of options such as:
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
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            <ul>
                              <li>
                                <strong>Thin Wall Polyolefin Tubing:</strong>{" "}
                                Highly flexible and ideal for conserving space
                                in compact areas.
                              </li>
                              <li>
                                <strong>Semi-Rigid Polyolefin Tubing:</strong>{" "}
                                Designed to retain its integrity without
                                splitting upon shrinking.
                              </li>
                              <li>
                                <strong>
                                  Adhesive-Lined Polyolefin Tubing:
                                </strong>{" "}
                                Perfect for any scenario necessitating
                                additional moisture protection or strain relief.
                              </li>
                            </ul>
                            <br />
                            Available in an extensive array of sizes and colors,
                            our polyolefin tubing is highly compatible with hot
                            stamping, allowing you to achieve that polished,
                            professional appearance for your products. Discover
                            our exceptional range of heat shrink polyolefin
                            products and enhance the finish and durability of
                            your projects.
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
                        <p className="mt-3 mb-5 px-5 fs-5">
                          For a closer look at our selection or to consult with
                          our knowledgeable customer service team, reach out to
                          us at <a href="tel:630.771.0700">630.771.0700</a> or
                          via email at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com{" "}
                            <i className="bx bx-link-external"></i>
                          </a>{" "}
                          today!
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
                          Layflat PVC Heat Shrink Tubing
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            Layflat PVC Heat Shrink Tubing is a thin-wall low
                            cost material offering good electrical and
                            mechanical characteristics. When exposed to heat in
                            excess of 275°F for a few seconds, the specially
                            formulated polyvinyl chloride material will shrink
                            rapidly and uniformly conforming to the shape of the
                            object to be covered.
                            <br />
                            <br />
                            Layflat PVC is available in diameters from .250″ to
                            6″ and larger. The standard wall thickness is .004″-
                            .006″ but is also available as thin as .0015″ or as
                            thick as .012″ (for thicker walls, use product
                            IP30HS). Standard colors are white, black, and clear
                            but can be specially ordered in almost any color.
                            <br />
                            <br />
                            Applications include insulation and jacketing of
                            batteries, capacitors and production of industrial
                            equipment, toys, sporting goods, medical and
                            consumer products. A portable heat gun can be used
                            for shrinking in most applications of our low
                            temperature heat shrink tubing.
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
                          Irradiated PVC Heat Shrink Tubing
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            IP32IP provides excellent electrical insulation
                            along with the lowest shrink temperature of any of
                            our tubings. When high shrink temperatures can
                            damage enclosed or adjacent components this tubing
                            is the best choice. PVC tubing shrinks a full 50%
                            quickly at 100°C.
                            <br />
                            <br />
                            Approximately 15% longitudinal shrinkage allows
                            ripple free conformance around sharp bends to form a
                            tight fitting insulation for most general
                            applications with a high degree of flexibility. Our
                            Irradiated PVC Heat Shrink tubing resists most
                            chemicals and oils as well as sunlight, moisture and
                            fungus. IP32IP meet the requirements of
                            AMS-DTL-23053/2 Class 1 with the exception of
                            longitudinal shrinkage.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture4}
                              alt=""
                            />
                          </div>
                        </Col>
                        <p className="mt-3 mb-5 fs-5 px-5">
                          Improved solder iron cut-through and abrasion
                          resistance with outstanding dielectric and mechanical
                          protection.
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

export default HeatShrinkPolyolefin;
