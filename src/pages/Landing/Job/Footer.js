import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LogoLight from "../../../assets/images/logo.png";
import SmallFooter from "../../../Layouts/Footer";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="custom-footer bg-dark py-5 position-relative">
        <Container>
          <Row className="mb-4">
            <Col lg={4} className="mt-4">
              <div>
                <div>
                  <img src={LogoLight} alt="logo light" height="55" />
                </div>
                <div className="mt-4 fs-15">
                  <ul className="list-unstyled ff-secondary footer-list fs-14">
                    <li>
                      <a
                        href="https://maps.google.com/?q=250+Gibraltar+Dr+Bolingbrook,+IL+60440"
                        target="_blank"
                      >
                        Address: 250 Gibraltar Dr, <br /> Bolingbrook, IL 60440
                      </a>
                    </li>
                    <li>
                      <a href="tel:6307710700">Phone: (630) 771-0700</a>
                    </li>
                    <li>Fax: (630) 771-0701</li>
                    <li>
                      <a href="mailto:sales@insulationproducts.com">
                        Email: Sales@InsulationProducts.com
                      </a>
                    </li>
                  </ul>
                  <ul className="list-inline mb-0 footer-social-link">
                    <li className="list-inline-item">
                      <Link to="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-facebook-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-github-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-linkedin-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-google-fill"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#!" className="avatar-xs d-block">
                        <div className="avatar-title rounded-circle">
                          <i className="ri-dribbble-line"></i>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col className="ms-lg-auto">
              <Row>
                <Col sm={3} className="mt-4">
                  <h5 className="text-white mb-0">Company</h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                      <li>
                        <NavLink to="/company?tab=contact">Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/company?tab=aboutus">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/company?tab=survey">Customer Survey</NavLink>
                      </li>
                      <li>
                        <NavLink to="/company?tab=faqs">
                          Frequently Asked Questions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/product-specs">
                          Product Specifications
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/product-specs">Product Catalog</NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={3} className="mt-4">
                  <h5 className="text-white mb-0">Heat Shrink Tubing</h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/pvc">
                          PVC
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/polyolefin">
                          Polyolefin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/adhesive-lined-polyolefin">
                          Adhesive Lined Polyolefin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/end-caps">
                          End Caps
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/medical-grade-polyolefin">
                          Medical Grade Polyolefin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/neoprene-and-fluoroelastomer">
                          Neoprene & Fluoroelastomer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/kynar">
                          Kynar (PVDF)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/modified-fluoropolymer">
                          Modified Fluoropolymer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/mylar">
                          Mylar
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/heat-shrink-tubing/high-tempeture">
                          High-Tempeture
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={3} className="mt-4">
                  <h5 className="text-white mb-0">Non-Shrink Tubing</h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                      <li>
                        <NavLink to="/products/non-shrink-tubing/pvc">
                          PVC
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/non-shrink-tubing/ptfe-spaghetti-tubing">
                          PTFE Spaghetti Tubing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/non-shrink-tubing/sleeving">
                          Sleeving
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/non-shrink-tubing/spiral-wrap">
                          Spiral Wrap
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/non-shrink-tubing/slit-conduit">
                          Slit Conduit
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={3} className="mt-4">
                  <h5 className="text-white mb-0">
                    Specialty Products & Services
                  </h5>
                  <div className="text-muted mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-14">
                      <li>
                        <NavLink to="/products/specialty-products-services/non-metallic-conduit-tubing">
                          Non-Metallic Conduit Tubing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/non-metallic-conduit-connectors-and-couplings">
                          Non-Metallic Conduit Connectors & Couplings
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/adhesives">
                          Adhesives
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/heat-shrink-tape">
                          Heat Shrink Tape
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/heat-gun">
                          Heat Gun
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/value-added">
                          Value Added
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/identification-markers">
                          Hot Stamp Marking
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/specialty-products-services/tubing-kits">
                          Tubing Kits
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <SmallFooter />
    </React.Fragment>
  );
};

export default Footer;
