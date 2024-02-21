import React from "react";
import { Col, Container, Row } from "reactstrap";

// Import Images
import processArrow from "../../../assets/images/landing/process-arrow-img.png";

const WorkProcess = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">How We Serve You</h3>
                <p className="text-muted mb-4 ff-secondary">
                  Discover how we ensure you receive high-quality parts
                  efficiently. Our straightforward process is designed to meet
                  your needs with excellence.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="text-center">
            <Col lg={4}>
              <div className="process-card mt-4">
                <div className="process-arrow-img d-none d-lg-block">
                  <img src={processArrow} alt="" className="img-fluid" />
                </div>
                <div className="avatar-sm icon-effect mx-auto mb-4">
                  <div className="avatar-title bg-transparent text-success rounded-circle h1">
                    <i className="ri-mail-line"></i>
                  </div>
                </div>

                <h5>Email or Call for a Quote</h5>
                <p className="text-muted ff-secondary">
                  Start by getting in touch with us to discuss your needs. We're
                  ready to listen and provide a competitive quote.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="process-card mt-4">
                <div className="process-arrow-img d-none d-lg-block">
                  <img src={processArrow} alt="" className="img-fluid" />
                </div>
                <div className="avatar-sm icon-effect mx-auto mb-4">
                  <div className="avatar-title bg-transparent text-success rounded-circle h1">
                    <i className="ri-discuss-line"></i>
                  </div>
                </div>

                <h5>Consult with Our Sales Team</h5>
                <p className="text-muted ff-secondary">
                  We'll work closely with you to understand your specifications
                  and shipping requirements, ensuring a seamless process.
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="process-card mt-4">
                <div className="avatar-sm icon-effect mx-auto mb-4">
                  <div className="avatar-title bg-transparent text-success rounded-circle h1">
                    <i className="ri-gift-line"></i>
                  </div>
                </div>

                <h5>Receive High-Quality Parts</h5>
                <p className="text-muted ff-secondary">
                  Enjoy the peace of mind that comes with receiving the
                  best-quality parts, delivered right to your doorstep.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default WorkProcess;
