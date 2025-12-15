import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

const SiteMap = () => {
  document.title = "SiteMap | Insulation Products Corporation";
  return (
    <div>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="SiteMap" pageTitle="Pages" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">IPC Site Map</h4>
                </CardHeader>
                <CardBody>
                  <div className="hori-sitemap">
                    <ul className="list-unstyled row mb-0">
                      <li className="p-0 parent-title">
                        <Link to="#" className="fw-semibold fs-14">
                          Insulation Products Corporation Inc
                        </Link>
                      </li>
                      <ul className="list-unstyled row g-0">
                        <li className="col-sm-4">
                          <Link to="#" className="fw-semibold sub-title">
                            Company Resources
                          </Link>
                          <ul className="list-unstyled row g-0 second-list">
                            <li className="col-sm-6">
                              <Link to="#">Support</Link>
                              <ul className="list-unstyled second-list pt-0">
                                <li>
                                  <div> 
                                    <Link to="#">Contact Us</Link>
                                    <Link to="#">
                                      Frquently Asked Questions
                                    </Link>
                                    <Link to="#">Customer Survey</Link>
                                    <Link to="#">Product Specifications</Link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="col-sm-6">
                              <Link to="#">About Us</Link>
                              <ul className="list-unstyled second-list pt-0">
                                <li>
                                  <div>
                                    <Link to="#">Company Profile</Link>
                                    <Link to="#">Media Resources</Link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="col-sm-8">
                          <Link to="#" className="fw-semibold sub-title">
                            Our Products
                          </Link>
                          <ul className="list-unstyled row g-0 second-list">
                            <li className="col-sm-3">
                              <Link to="#">Heat Shrink Tubing</Link>
                              <ul className="list-unstyled second-list pt-0">
                                <li>
                                  <div>
                                    <Link to="#">PVC</Link>
                                    <Link to="#">Polyolefin</Link>
                                    <Link to="#">
                                      Adhesive Lined Polyolefin
                                    </Link>
                                    <Link to="#">End Caps</Link>
                                    <Link to="#">Medical Grade Polyolefin</Link>
                                    <Link to="#">
                                      Neoprene & Fluoroelastomer
                                    </Link>
                                    <Link to="#">Kynar (PVDF)</Link>
                                    <Link to="#">Modified Fluoropolymer</Link>
                                    <Link to="#">Mylar</Link>
                                    <Link to="#">High-Temperature</Link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="col-sm-3">
                              <Link to="#">Non-Shrink Tubing</Link>
                              <ul className="list-unstyled second-list pt-0">
                                <li>
                                  <div>
                                    <Link to="#">PVC</Link>
                                    <Link to="#">PTFE Spaghetti Tubing</Link>
                                    <Link to="#">Sleeving</Link>
                                    <Link to="#">Spiral Wrap</Link>
                                    <Link to="#">Slit Conduit</Link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="col-sm-3">
                              <Link to="#">Specialty Products</Link>
                              <ul className="list-unstyled second-list pt-0">
                                <li>
                                  <div>
                                    <Link to="#">
                                      Non-Metallic Conduit Tubing
                                    </Link>
                                    <Link to="#">
                                      Non-Metallic Conduit Connectors
                                    </Link>
                                    <Link to="#">
                                      Non-Metallic Conduit Couplings
                                    </Link>
                                    <Link to="#">Adhesives</Link>
                                    <Link to="#">Heat Shrink Tape</Link>
                                    <Link to="#">Heat Gun</Link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li className="col-sm-3">
                              <Link to="#">Services</Link>
                              <ul className="list-unstyled second-list pt-0">
                                <li>
                                  <div>
                                    <Link to="#">Value Added</Link>
                                    <Link to="#">Hot Stamp Marking</Link>
                                    <Link to="#">Tubing Kits</Link>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SiteMap;
