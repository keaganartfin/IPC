import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import StaffPhoto from "../../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";
import { NST } from "../data/nonshrinktubing-data";

const NonShrinkTubing = () => {
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
                          Non-Heat Shrink Tubing Solutions
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation, we specialize in
                          providing Non-Heat Shrink Tubing for
                          a variety of needs within the electronic and
                          electrical industries. Our tubing options serve as
                          excellent electrical insulators and are versatile
                          enough for uses ranging from fluid transfer to various
                          other applications. We pride ourselves on delivering{" "}
                          premium quality products, with an
                          unrivaled attention to detail and deep industry
                          knowledge that sets us apart from our competitors.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Our Non-Heat Shrink Tubing Offerings
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Among the most popular types of non-heat shrink tubing
                          we offer is{" "}
                          
                            extruded polyvinylchloride (PVC) tubing
                          
                          . Known for its inherent flame-retardant properties,
                          our PVC tubing is available in a wide array of grades,
                          sizes, and colors to meet your specific needs.
                          Additionally, we supply PTFE tubing{" "}
                          for applications requiring non-toxic materials or
                          resistance to high temperatures. Our catalog also
                          includes various forms of{" "}
                          slit conduit and spiral wrap tubing,
                          ideal for bundling purposes where flexibility and easy
                          access are key.
                          <br />
                          <br />
                          Beyond Non-Shrink Tubing, our product range extends to{" "}
                          woven and expandable sleeving for
                          scenarios demanding superior abrasion resistance. Our
                          selection features woven fiberglass and expandable
                          polyester sleevings, engineered to accommodate a broad
                          spectrum of application requirements, available in
                          multiple sizes and styles.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Contact Us
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          For more detailed information about our Non-Shrink
                          electrical insulation tubing options, reach out to our{" "}
                          dedicated customer service team at{" "}
                          <a href="tel:6307710700">+1 (630) 771-0700</a> or
                          connect with our sales department via email at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>
                          . We're here to assist you in selecting the right
                          products for your needs.
                        </p>
                        <Row></Row>
                      </Row>
                    </CardBody>
                  </Card>
                  <Row>
                    {NST.map((item, index) => (
                      <Col sm={6} xl={4} key={index}>
                        <Card>
                          <CardBody>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="img-fluid rounded"
                            />
                          </CardBody>
                          <CardBody>
                            <ul className="list-inline fs-14 text-muted">
                              <li className="list-inline-item">
                                {item.subtitle}
                              </li>
                            </ul>
                            <Link to="#!">
                              <h5>{item.title}</h5>
                            </Link>
                            <p className="text-muted fs-14">
                              {item.description.length > 150
                                ? item.description.slice(
                                    0,
                                    item.description
                                      .substr(0, 151)
                                      .lastIndexOf(" ")
                                  ) + " ..."
                                : item.description}
                            </p>
                            <div>
                              <Link to={item.link} className="link-success">
                                Learn More{" "}
                                <i className="ri-arrow-right-line align-bottom ms-1"></i>
                              </Link>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
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

export default NonShrinkTubing;
