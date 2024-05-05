import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import img8 from "../../../assets/images/ipc/IP30HS.png";
import img6 from "../../../assets/images//ipc/ip17tw.jpg";
import img9 from "../../../assets/images/ipc/Non-Metallic-Coupling.jpg";
const Blog = () => {
  return (
    <React.Fragment>
      <section className="section" id="blog">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h1 className="mb-3 fw-semibold text-capitalize lh-base">
                  Our Latest <span className="text-primary">News</span>
                </h1>
                <p className="text-muted mb-4">
                  We thrive when coming up with innovative ideas but also
                  understand that NavLink smart concept should be supported with
                  faucibus sapien odio measurable results.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} md={6}>
              <Card>
                <CardBody>
                  <img
                    src={img8}
                    alt="Heat Shrink PVC"
                    className="img-fluid rounded"
                  />
                </CardBody>
                <CardBody>
                  <ul className="list-inline fs-14 text-muted">
                    <li className="list-inline-item">
                      <Link
                        className="text-muted"
                        to={"/products/heat-shrink-tubing"}
                      >
                        Heat Shrink Tubing
                      </Link>
                    </li>
                  </ul>
                  <Link to="/products/heat-shrink-tubing/pvc">
                    <h5>Heat Shrink PVC</h5>
                  </Link>
                  <p className="text-muted fs-14">
                    Heat Shrinkable PVC Tubing has one of the lowest shrink
                    temperatures of any electrical insulation tubing. This
                    tubing is the best alternative for avoiding heat damage for
                    enclosed or adjacent components. PVC tubing shrinks a full
                    50% quickly at 200°F.
                  </p> 
                  <div>
                    <Link
                      to="/products/heat-shrink-tubing/pvc"
                      className="link-success"
                    >
                      Learn More{" "}
                      <i className="ri-arrow-right-line align-bottom ms-1"></i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card>
                <CardBody>
                  <img
                    src={img6}
                    alt="PTFE Spaghetti Tubing"
                    className="img-fluid rounded"
                  />
                </CardBody>
                <CardBody>
                  <ul className="list-inline fs-14 text-muted">
                    <li className="list-inline-item">
                      <Link
                        className="text-muted"
                        to={"/products/non-shrink-tubing"}
                      >
                        Non-Shrink Tubing
                      </Link>
                    </li>
                  </ul>
                  <Link to="/products/non-shrink-tubing/ptfe-spaghetti-tubing">
                    <h5>PTFE Spaghetti Tubing</h5>
                  </Link>
                  <p className="text-muted fs-14">
                    PTFE Tubing is the most versatile insulating material,
                    offering highly stable electrical properties at virtually
                    all electronic frequencies throughout an operating range of
                    -70°C to 260°C. PTFE tubing is nontoxic and will not burn in
                    normal atmosphere at any temperature, and is inert to
                    practically all lubricants, solvents, and reagents.
                  </p>
                  <div>
                    <Link
                      to="/products/non-shrink-tubing/ptfe-spaghetti-tubing"
                      className="link-success"
                    >
                      Learn More{" "}
                      <i className="ri-arrow-right-line align-bottom ms-1"></i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card>
                <CardBody>
                  <img
                    src={img9}
                    alt="Non-Metallic Conduit Connectors And Couplings"
                    className="img-fluid rounded"
                  />
                </CardBody>
                <CardBody>
                  <ul className="list-inline fs-14 text-muted">
                    <li className="list-inline-item">
                      <Link
                        className="text-muted"
                        to="/products/specialty-products-services"
                      >
                        Specialty Products & Services
                      </Link>
                    </li>
                  </ul>
                  <Link to="/products/specialty-products-services/non-metallic-conduit-connectors-and-couplings">
                    <h5>Non-Metallic Conduit Connectors And Couplings</h5>
                  </Link>
                  <p className="text-muted fs-14">
                    IPC carries several types of Conduit Connectors & Couplings.
                    Be sure to contact our service representatives with any
                    questions!
                  </p>
                  <div>
                    <Link
                      to="/products/specialty-products-services/non-metallic-conduit-connectors-and-couplings"
                      className="link-success"
                    >
                      Learn More{" "}
                      <i className="ri-arrow-right-line align-bottom ms-1"></i>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-info position-relative">
        <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
        <Container>
          <Row className="align-items-center gy-4">
            <Col className="col-sm">
              <div>
                <h4 className="text-white fw-semibold">
                  Get New Jobs Notification!
                </h4>
                <p className="text-white text-opacity-75 mb-0">
                  Subscribe & get all related jobs notification.
                </p>
              </div>
            </Col>
            <Col sm="auto">
              <Button className="btn btn-danger" type="button">
                Subscribe Now{" "}
                <i className="ri-arrow-right-line align-bottom"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Blog;
