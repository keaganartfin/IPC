import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { partData } from "../../../common/data/IPC";
import img1 from "../../../assets/images/companies/img-1.png";
import img5 from "../../../assets/images/companies/img-5.png";
import img2 from "../../../assets/images/companies/img-2.png";
import img7 from "../../../assets/images/companies/img-7.png";
import img8 from "../../../assets/images/companies/img-8.png";

const FindJob = () => {
  const [randomJobs, setRandomJobs] = useState([]);

  // Fisher-Yates Shuffle Algorithm
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  useEffect(() => {
    // Shuffle the partData array and slice it to get 8 elements
    const shuffledJobs = shuffleArray([...partData]).slice(0, 8);
    setRandomJobs(shuffledJobs);
  }, []);

  return (
    <React.Fragment>
      <section className="section" id="partData">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-5">
                <h1 className="mb-3 ff-secondary text-capitalize lh-base">
                  Find The <span className="text-primary">Parts</span> You Need
                </h1>
                <p className="text-muted">
                  Click the button below to see our extensive catalog of parts.{" "}
                  <br />
                  Already know what you want? Give us a{" "}
                  <a href="tel:+16307710700">call</a>!
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            {randomJobs.map((item, key) => (
              <Col lg={6} key={key}>
                <Card className="shadow-lg">
                  <CardBody>
                    <div className="d-flex">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-warning-subtle rounded">
                          <img src={img2} alt="" className="avatar-xxs" />
                        </div>
                      </div>
                      <div className="ms-3 flex-grow-1">
                        <Link to="#!">
                          <h5>{item.PartName}</h5>
                        </Link>
                        <ul className="list-inline text-muted mb-3">
                          <li className="list-inline-item">
                            <i className="ri-building-line align-bottom me-1"></i>{" "}
                            {item.VendorName}
                          </li>
                          <li className="list-inline-item">
                            <i className="ri-map-pin-2-line align-bottom me-1"></i>{" "}
                            USA
                          </li>
                          <li className="list-inline-item">
                            <i className="ri-money-dollar-circle-line align-bottom me-1"></i>{" "}
                            {item.PartID}
                          </li>
                        </ul>
                        <div className="hstack gap-2">
                          <span
                            className={
                              "badge bg-" +
                              item.TypeColor +
                              "-subtle text-" +
                              item.TypeColor
                            }
                          >
                            {item.TypeColor}
                          </span>
                          <span
                            className={
                              "badge bg-" +
                              item.TypeColor +
                              "-subtle text-" +
                              item.TypeColor
                            }
                          >
                            {item.TypeColor}
                          </span>
                          {item.s3 ? (
                            <span
                              className={
                                "badge bg-" +
                                item.TypeColor +
                                "-subtle text-" +
                                item.TypeColor
                              }
                            >
                              {item.TypeColor}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div>
                        <Link
                          type="button"
                          to={`/${item.PartID}`}
                          className="btn btn-ghost-primary btn-icon custom-toggle"
                        >
                          <span className="icon-on">
                            <i className="ri-arrow-right-up-line align-bottom"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}

            <Col lg={12}>
              <div className="text-center mt-4">
                <Link to="#!" className="btn btn-ghost-info">
                  View Our Catalog{" "}
                  <i className="ri-arrow-right-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bg-light">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="text-muted mt-5 mt-lg-0">
                <h5 className="fs-12 text-uppercase text-success fw-semibold">
                  Hot Featured Company
                </h5>
                <h1 className="mb-3 fw-semibold text-capitalize lh-base">
                  Get <span className="text-primary">10,000+</span> Featured
                  Companies
                </h1>
                <p className="ff-secondary mb-2">
                  The demand for content writing services is growing. This is
                  because content is required in almost every industry.{" "}
                  <b>
                    Many companies have discovered how effective content
                    marketing is.
                  </b>{" "}
                  This is NavLink major reason for this increase in demand.
                </p>
                <p className="mb-4 ff-secondary">
                  A Content Writer is NavLink professional who writes
                  informative and engaging articles to help brands showcase
                  their products.
                </p>

                <div className="mt-4">
                  <NavLink to="/index" className="btn btn-primary">
                    View More Companies{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              sm={7}
              xs={10}
              className="ms-lg-auto mx-auto order-1 order-lg-2"
            >
              <div>
                <Card className="shadow-lg">
                  <CardBody>
                    <Button
                      type="button"
                      className="btn btn-icon btn-soft-primary float-end"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <i className="mdi mdi-cards-heart fs-16"></i>
                    </Button>
                    <div className="avatar-sm mb-4">
                      <div className="avatar-title bg-secondary-subtle rounded">
                        <img src={img1} alt="" className="avatar-xxs" />
                      </div>
                    </div>
                    <Link to="#!">
                      <h5>New Web designer</h5>
                    </Link>
                    <p className="text-muted">Themesbrand</p>

                    <div className="d-flex gap-4 mb-3">
                      <div>
                        <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                        Escondido,California
                      </div>

                      <div>
                        <i className="ri-time-line text-primary me-1 align-bottom"></i>{" "}
                        3 min ago
                      </div>
                    </div>

                    <p className="text-muted">
                      As NavLink Product Designer, you will work within NavLink
                      Product Delivery Team fused with UX, engineering, product
                      and data talent.
                    </p>

                    <div className="hstack gap-2">
                      <span className="badge bg-success-subtle text-success">
                        Full Time
                      </span>
                      <span className="badge bg-primary-subtle text-primary">
                        Freelance
                      </span>
                      <span className="badge bg-danger-subtle text-danger">
                        Urgent
                      </span>
                    </div>

                    <div className="mt-4 hstack gap-2">
                      <Link to="#!" className="btn btn-soft-primary w-100">
                        Apply Job
                      </Link>
                      <Link to="#!" className="btn btn-soft-success w-100">
                        Overview
                      </Link>
                    </div>
                  </CardBody>
                </Card>
                <Card className="shadow-lg bg-info mb-0 features-company-widgets rounded-3">
                  <CardBody>
                    <h5 className="text-white fs-16 mb-4">
                      10,000+ Featured Companies
                    </h5>

                    <div className="d-flex gap-1">
                      <Link to="#!" id="abc">
                        <UncontrolledTooltip placement="top" target="abc">
                          Brent Gonzalez
                        </UncontrolledTooltip>
                        <div className="avatar-xs">
                          <div className="avatar-title bg-light bg-opacity-25 rounded-circle">
                            <img src={img5} alt="" height="15" />
                          </div>
                        </div>
                      </Link>
                      <Link to="#!" id="abs">
                        <UncontrolledTooltip placement="top" target="abs">
                          Brent Gonzalez
                        </UncontrolledTooltip>
                        <div className="avatar-xs">
                          <div className="avatar-title bg-light bg-opacity-25 rounded-circle">
                            <img src={img2} alt="" height="15" />
                          </div>
                        </div>
                      </Link>
                      <Link to="#!" id="brent">
                        <UncontrolledTooltip placement="top" target="brent">
                          Brent Gonzalez
                        </UncontrolledTooltip>
                        <div className="avatar-xs">
                          <div className="avatar-title bg-light bg-opacity-25 rounded-circle">
                            <img src={img8} alt="" height="15" />
                          </div>
                        </div>
                      </Link>
                      <Link to="#!" id="ellen">
                        <UncontrolledTooltip placement="top" target="ellen">
                          Ellen Smith
                        </UncontrolledTooltip>
                        <div className="avatar-xs">
                          <div className="avatar-title bg-light bg-opacity-25 rounded-circle">
                            <img src={img7} alt="" height="15" />
                          </div>
                        </div>
                      </Link>
                      <Link to="#!" id="more">
                        <UncontrolledTooltip placement="top" target="more">
                          More Companies
                        </UncontrolledTooltip>
                        <div className="avatar-xs">
                          <div className="avatar-title fs-11 rounded-circle bg-light bg-opacity-25 text-white">
                            1k+
                          </div>
                        </div>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FindJob;
