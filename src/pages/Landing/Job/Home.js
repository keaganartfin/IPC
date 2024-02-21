import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Input,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

import Avatar3 from "../../../assets/images/users/avatar-3.jpg";
import Avatar9 from "../../../assets/images/users/avatar-9.jpg";
import Avatar10 from "../../../assets/images/users/avatar-10.jpg";
import JobProfile2 from "../../../assets/images/job-profile2.png";
import HeroImg from "../../../assets/images/ipc/main-banner-1349x414.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <section
        className="section job-hero-section pb-0 "
        id="hero"
        // style={{ backgroundColor: "#055C9E" }}
      >
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <div className="text-center mt-lg-5 pt-5">
                <h1 className="display-6 fw-semibold mb-3 lh-base">
                  The better way to manage your inventory with{" "}
                  <span className="text-primary">IPC </span>
                </h1>
                <p className="lead text-muted lh-base">
                  Insulation Products Co. is the leading supplier of top-quality
                  heat shrink tubing and essential tools, designed for
                  unparalleled reliability and performance in electrical
                  applications. We are committed to quality and customer
                  satisfaction, empowering you to achieve results with
                  confidence.
                </p>

                <div className="d-flex gap-2 justify-content-center mt-4">
                  <a
                    href="mailto:sales@insulationproducts.com?subject=Request for Quote&body=Hi, I would like to get a quote for..."
                    className="btn btn-primary"
                  >
                    Get a Quote{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </a>
                  <Link to="/product-catalog" className="btn btn-success">
                    Product Catalog{" "}
                    <i className="ri-eye-line align-middle ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="position-relative home-img text-center mt-5 mt-lg-0">
                <Card className="p-3 rounded shadow-lg inquiry-box">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0 me-3">
                      <div className="avatar-title bg-warning-subtle text-warning rounded fs-18">
                        <i className="ri-mail-send-line"></i>
                      </div>
                    </div>
                    <h5 className="fs-15 lh-base mb-0">
                      Email or Call for a quote today!
                    </h5>
                  </div>
                </Card>

                <Card className="p-3 rounded shadow-lg application-box">
                  <h5 className="fs-15 lh-base mb-3">Applications</h5>
                  <div className="avatar-group">
                    <Link to="#!" className="avatar-group-item" id="brent">
                      <UncontrolledTooltip placement="top" target="brent">
                        Brent Gonzalez
                      </UncontrolledTooltip>
                      <div className="avatar-xs">
                        <img
                          src={Avatar3}
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      </div>
                    </Link>
                    <Link to="#!" className="avatar-group-item " id="ellen">
                      <UncontrolledTooltip placement="top" target="ellen">
                        Ellen Smith
                      </UncontrolledTooltip>
                      <div className="avatar-xs">
                        <div className="avatar-title rounded-circle bg-danger">
                          S
                        </div>
                      </div>
                    </Link>
                    <Link to="#!" className="avatar-group-item" id="smith">
                      <UncontrolledTooltip placement="top" target="smith">
                        Ellen Smith
                      </UncontrolledTooltip>
                      <div className="avatar-xs">
                        <img
                          src={Avatar10}
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      </div>
                    </Link>
                    <NavLink
                      to="#!"
                      className="avatar-group-item"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                    >
                      <div className="avatar-xs">
                        <div className="avatar-title rounded-circle bg-success">
                          Z
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="#!"
                      className="avatar-group-item"
                      id="gonzalez"
                    >
                      <UncontrolledTooltip placement="top" target="gonzalez">
                        Brent Gonzalez
                      </UncontrolledTooltip>
                      <div className="avatar-xs">
                        <img
                          src={Avatar9}
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      </div>
                    </NavLink>
                    <Link to="#!" className="avatar-group-item" id="more">
                      <UncontrolledTooltip placement="top" target="more">
                        More Appliances
                      </UncontrolledTooltip>
                      <div className="avatar-xs">
                        <div className="avatar-title fs-13 rounded-circle bg-light border-dashed border text-primary">
                          2k+
                        </div>
                      </div>
                    </Link>
                  </div>
                </Card>
                <img src={JobProfile2} alt="" className="user-img" />

                <div className="circle-effect">
                  <div className="circle"></div>
                  <div className="circle2"></div>
                  <div className="circle3"></div>
                  <div className="circle4"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
