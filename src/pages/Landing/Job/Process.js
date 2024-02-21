import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { jobProcess } from "../../../common/data/jobLanding";

const Process = () => {
  return (
    <React.Fragment>
      <section className="section" id="process">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h1 className="mb-3 fw-semibold lh-base">
                  Embracing Business Through{" "}
                  <span className="text-primary">
                    Innovation and Sustainability{" "}
                  </span>
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            {jobProcess.map((item, key) => (
              <Col lg={3} md={6} key={key}>
                <Card className={item.clss}>
                  <CardBody className="p-4">
                    <h1 className="fw-bold display-5 ff-secondary mb-4 text-success position-relative">
                      <div className="job-icon-effect"></div>
                      <span>{item.id}</span>
                    </h1>
                    <h6 className="fs-17 mb-2">{item.lable}</h6>
                    <p className="text-muted mb-0 fs-15">{item.desc}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
