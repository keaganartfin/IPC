import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Table } from "reactstrap";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const LeftSideTables = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Col xxl={3}>
      <Card>
        <CardBody>
          <h3 className="card-title mb-4">Helpful Links</h3>
          <div className="verti-sitemap">
            <ul className="mb-0 list-unstyled">
              <li className="p-0 parent-title">
                <Link to="/home" className="fw-medium fs-14">
                  Home
                </Link>
              </li>
              <li>
                <div className="first-list">
                  <div className="list-wrap">
                    <Link to="#" className="fw-medium text-primary">
                      <i className="ri-airplay-line me-1 align-bottom"></i>{" "}
                      Company
                    </Link>
                  </div>
                  <ul className="second-list list-unstyled">
                    <li>
                      <Link to="/company?tab=aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/company?tab=faqs">FAQs</Link>
                    </li>
                    <li>
                      <Link to="/company?tab=contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="first-list">
                  <div className="list-wrap">
                    <Link to="#" className="fw-medium text-primary">
                      <i className="ri-stack-line me-1 align-bottom"></i>{" "}
                      Products
                    </Link>
                  </div>
                  <ul className="second-list list-unstyled">
                    <li>
                      <Link to="/products/heat-shrink-tubing">
                        Heat Shrink Tubing
                      </Link>
                      <ul className="third-list list-unstyled">
                        <li>
                          <Link to="/products/heat-shrink-tubing/pvc">PVC</Link>
                        </li>
                        <li>
                          <Link to="/products/heat-shrink-tubing/polyolefin">
                            Polyolefin
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/heat-shrink-tubing/neoprene-and-fluoroelastomer">
                            Neoprene/Fluoroelastomer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/products/non-shrink-tubing">
                        Non-Shrink Tubing
                      </Link>
                      <ul className="third-list list-unstyled">
                        <li>
                          <Link to="/products/non-shrink-tubing/sleeving">
                            Sleeving
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/non-shrink-tubing/spiral-wrap">
                            Spiral Wrap
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/non-shrink-tubing/slit-conduit">
                            Slit Conduit
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/products/specialty-products-services">
                        Speciality Products & Services
                      </Link>
                      <ul className="third-list list-unstyled">
                        <li>
                          <Link to="/products/specialty-products-services/adhesives">
                            Adhesives
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/specialty-products-services/value-added">
                            Value Added Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/specialty-products-services/identification-markers">
                            Identification Markers
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h3 className="card-title mb-3">Contact Card</h3>
          <div className="table-responsive">
            <Table className="table-borderless mb-0">
              <tbody>
                <tr>
                  <th className="ps-0" scope="row">
                    Phone Number:
                  </th>
                  <td className="text-muted">
                    <a href="tel:6307710700">+1 (630) 771-0700</a>
                  </td>
                </tr>
                <tr>
                  <th className="ps-0" scope="row">
                    E-mail :
                  </th>
                  <td className="text-muted">
                    <a href="mailto:sales@insulationproducts.com">
                      Sales@InsulationProducts.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="ps-0" scope="row">
                    Location :
                  </th>
                  <td className="text-muted">
                    <a
                      href="https://maps.google.com/?q=250+Gibraltar+Dr+Bolingbrook,+IL+60440"
                      target="_blank"
                    >
                      250 Gibraltar Dr, <br /> Bolingbrook, IL 60440
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 className="card-title mb-4">Social Media</h3>
          <div className="d-flex flex-wrap gap-2">
            <div>
              <Link to="#" className="avatar-xs d-block">
                <span className="avatar-title rounded-circle fs-16 bg-body text-body">
                  <i className="ri-github-fill"></i>
                </span>
              </Link>
            </div>
            <div>
              <Link to="#" className="avatar-xs d-block">
                <span className="avatar-title rounded-circle fs-16 bg-primary">
                  <i className="ri-global-fill"></i>
                </span>
              </Link>
            </div>
            <div>
              <Link to="#" className="avatar-xs d-block">
                <span className="avatar-title rounded-circle fs-16 bg-success">
                  <i className="ri-dribbble-fill"></i>
                </span>
              </Link>
            </div>
            <div>
              <Link to="#" className="avatar-xs d-block">
                <span className="avatar-title rounded-circle fs-16 bg-danger">
                  <i className="ri-pinterest-fill"></i>
                </span>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftSideTables;
