import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../assets/images/profile-bg.jpg";
import StaffPhoto from "../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../About/LeftSideTables";

const ProductInsights = () => {
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
              <div>
                <Col xxl={9}>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3 className="mb-3 card-header">
                          PVC Heat Shrink Tubing
                        </h3>
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
                          tight fitting insulation in most general applications
                          while retaining a high degree of flexibility. PVC Heat
                          Shrink Tubing resists most chemicals and oils as well
                          as sunlight, moisture and fungus. IP30HS meets the
                          requirements of AMS-DTL-23053/2 Class 2.
                          <br />
                          <br />
                          Heat Shrinkable PVC Tubing is also available in
                          irradiated (IP32IP below) and 1/32″ heavy wall.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Layflat PVC Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Layflat PVC Heat Shrink Tubing is a thin-wall low cost
                          material offering good electrical and mechanical
                          characteristics. When exposed to heat in excess of
                          275°F for a few seconds, the specially formulated
                          polyvinyl chloride material will shrink rapidly and
                          uniformly conforming to the shape of the object to be
                          covered.
                          <br />
                          <br />
                          Layflat PVC is available in diameters from .250″ to 6″
                          and larger. The standard wall thickness is .004″-
                          .006″ but is also available as thin as .0015″ or as
                          thick as .012″ (for thicker walls, use product
                          IP30HS). Standard colors are white, black, and clear
                          but can be specially ordered in almost any color.
                          <br />
                          <br />
                          Applications include insulation and jacketing of
                          batteries, capacitors and production of industrial
                          equipment, toys, sporting goods, medical and consumer
                          products. A portable heat gun can be used for
                          shrinking in most applications of our low temperature
                          heat shrink tubing.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Irradiated PVC Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          IP32IP provides excellent electrical insulation along
                          with the lowest shrink temperature of any of our
                          tubings. When high shrink temperatures can damage
                          enclosed or adjacent components this tubing is the
                          best choice. PVC tubing shrinks a full 50% quickly at
                          100°C.
                          <br />
                          <br />
                          Approximately 15% longitudinal shrinkage allows ripple
                          free conformance around sharp bends to form a tight
                          fitting insulation for most general applications with
                          a high degree of flexibility. Our Irradiated PVC Heat
                          Shrink tubing resists most chemicals and oils as well
                          as sunlight, moisture and fungus. IP32IP meet the
                          requirements of AMS-DTL-23053/2 Class 1 with the
                          exception of longitudinal shrinkage.
                          <br />
                          <br />
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ProductInsights;
