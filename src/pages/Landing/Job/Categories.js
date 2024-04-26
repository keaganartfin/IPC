import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { categories } from "../../../common/data/jobLanding";

const Categories = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="categories">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h1 className="mb-3 fw-semibold text-capitalize lh-base">
                  Featured <span className="text-primary">IPC</span> Parts
                </h1>
                <p className="text-muted">
                  Want to learn more about our high-quality products?
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {categories.map((item, key) => (
              <Col lg={3} md={6} key={key}>
                <Card className="shadow-none text-center py-3">
                  <CardBody className="py-4">
                    <div className="avatar-sm position-relative mb-4 mx-auto">
                      <div className="job-icon-effect"></div>
                      <div className="avatar-title bg-transparent text-success rounded-circle">
                        <i className={item.icon}></i>
                      </div>
                    </div>
                    <Link to={item.link} className="to-link">
                      <h5 className="fs-17 pt-1">{item.lable}</h5>
                      <span>
                        Learn More <i className="ri-arrow-right-s-line"></i>{" "}
                      </span>
                    </Link>
                    <p className="mb-0 text-muted">{item.job}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-info position-relative">
        <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
        <Container>
          <Row className="align-items-center gy-4">
            <Col className="col-sm">
              <div>
                <h4 className="text-white fw-bold mb-2">Ready to Started?</h4>
                <p className="text-white-50 mb-0">
                  We're ready to assist you, give us a call.
                </p>
              </div>
            </Col>
            <Col sm="auto">
              <div className="btn bg-gradient btn-danger">
                <a href="tel:6307710700">Contact Us</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Categories;
