import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";
import picture1 from "../../../../assets/images/ipc/IP30HS.png";
import picture2 from "../../../../assets/images/ipc/IP3L.png";
import picture3 from "../../../../assets/images/ipc/IP32IP.png";
const HeatShrinkPVC = () => {
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
                          PVC Heat Shrink Tubing{" "}
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-success-subtle text-success badge-border"
                              target="_blank"
                              href="/product-catalog/IP30HS"
                            >
                              IP30HS <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            Heat Shrinkable PVC Tubing has one of the lowest
                            shrink temperatures of any electrical insulation
                            tubing. This tubing is the best alternative for
                            avoiding heat damage for enclosed or adjacent
                            components. PVC tubing shrinks a full 50% quickly at
                            200°F.
                            <br />
                            <br />
                            The approximate 20% of longitudinal shrinkage allows
                            ripple free conformance around sharp bends to form a
                            tight fitting insulation in most general
                            applications while retaining a high degree of
                            flexibility. PVC Heat Shrink Tubing resists most
                            chemicals and oils as well as sunlight, moisture and
                            fungus. IP30HS meets the requirements of
                            AMS-DTL-23053/2 Class 2.
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
                          Heat Shrinkable PVC Tubing is also available in
                          irradiated (IP32IP below) and 1/32″ heavy wall.
                          <br />
                          <br />
                          <ul>
                            <li>Low shrink temperature</li>
                            <li>2:1 shrink low cost</li>
                            <li>U/L CSA MIL-Spec.</li>
                            <li>AMS-DTL-23053/2 Class 2</li>
                          </ul>
                        </p>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3 className="card-title mb-4 fs-4 card-header">
                          Layflat PVC Heat Shrink Tubing{" "}
                          <span className="fs-5 float float-end">
                            {" "}
                            Product Number:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/product-catalog/LayflatPVC"
                            >
                              IP3L <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
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
                        <p className="mt-3 mb-5 fs-5 px-5">
                          Applications include insulation and jacketing of
                          batteries, capacitors and production of industrial
                          equipment, toys, sporting goods, medical and consumer
                          products. A portable heat gun can be used for
                          shrinking in most applications of our low temperature
                          heat shrink tubing.
                          <br />
                          <br />
                          <ul>
                            <li>Ultra-thin wall</li>
                            <li>Semi-rigid – Low shrink temperature</li>
                            <li>U/L VW-1</li>
                          </ul>
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
                          Irradiated PVC Heat Shrink Tubing{" "}
                          <span className="fs-5 float float-end">
                            Product Number:{" "}
                            <a
                              className="badge bg-dark-subtle text-dark badge-border"
                              target="_blank"
                              href="/product-catalog/IP32IP"
                            >
                              IP32IP <i className="bx bx-link-external"></i>
                            </a>{" "}
                          </span>
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
                              src={picture3}
                              alt=""
                            />
                          </div>
                        </Col>
                        <p className="mt-3 mb-5 fs-5 px-5">
                          Improved solder iron cut-through and abrasion
                          resistance with outstanding dielectric and mechanical
                          protection.
                          <br />
                          <br />
                          <ul>
                            <li>Excellent Abrasion Resistance</li>
                            <li>Highly Flame Retardant</li>
                            <li>Highly Flexible</li>
                            <li>U/L, CSA and MIL-SPEC</li>
                            <li>AMS-DTL-23053/2 Class 1</li>
                          </ul>
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

export default HeatShrinkPVC;
