import React from "react";
import { Col, Container, Row, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6} style={{ color: "gray" }}>
              Insulation Products Corporation © {new Date().getFullYear()} - All
              Rights Reserved
            </Col>
            <Col sm={6}>
              <div className="text-sm-end mt-3 mt-sm-0">
                <ul
                  className="list-inline mb-0 gap-4 fs-14"
                  style={{ color: "black" }}
                >
                  <li className="list-inline-item">
                    <NavLink to="/pages-privacy-policy">Privacy Policy</NavLink>
                  </li>
                  <li className="list-inline-item">-</li>
                  <li className="list-inline-item">
                    <NavLink to="/pages-term-conditions">
                      Terms & Conditions
                    </NavLink>
                  </li>
                  <li className="list-inline-item">-</li>
                  <li className="list-inline-item">
                    <NavLink to="/pages-privacy-policy">Site Map</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
