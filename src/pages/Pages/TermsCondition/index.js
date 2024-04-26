import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const TermsCondition = () => {
  document.title = "Terms & Condition | Insulation Products Corporation";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Terms of Service" pageTitle="Pages" />
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card>
                <div className="bg-warning-subtle position-relative">
                  <CardBody className="p-5">
                    <div className="text-center">
                      <h3 className="fw-semibold">Terms of Service</h3>
                      <p className="mb-0 text-muted">Last updated: 25 April, 2024</p>
                    </div>
                  </CardBody>
                  <div className="shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="1440"
                      height="60"
                      preserveAspectRatio="none"
                      viewBox="0 0 1440 60"
                    >
                      <g mask='url("#SvgjsMask1001")' fill="none">
                        <path
                          d="M 0,4 C 144,13 432,48 720,49 C 1008,50 1296,17 1440,9L1440 60L0 60z"
                          style={{ fill: "var(--vz-secondary-bg)" }}
                        ></path>
                      </g>
                      <defs>
                        <mask id="SvgjsMask1001">
                          <rect width="1440" height="60" fill="#ffffff"></rect>
                        </mask>
                      </defs>
                    </svg>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Acceptance of Terms</h5>
                      <p className="text-muted">
                        Welcome to Insulation Products Corporation (IPC). By
                        accessing and using our website and services, you agree
                        to be bound by the following terms and conditions
                        ("Terms of Service"). If you do not agree to all of
                        these terms, please do not use our website or services.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Changes to Terms</h5>
                      <p className="text-muted">
                        IPC reserves the right to modify or replace these Terms
                        of Service at any time at our sole discretion. We will
                        provide notice of such changes by updating the "Last
                        Updated" date at the top of this page. Your continued
                        use of the website after any changes constitutes your
                        acceptance of the new Terms of Service.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Services Description</h5>
                      <p className="text-muted">
                        IPC provides detailed information and sales of
                        RoHS-compliant insulation products, including
                        heat-shrink tubing, extruded tubing, fiberglass
                        sleevings, spiral cable conduits, heat shrink tapes,
                        cable ties, and industrial adhesives. Our services are
                        subject to change without notice.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Registration and Account</h5>
                      <p className="text-muted">
                        Certain features or services offered on or through the
                        website may require you to open an account. You are
                        entirely responsible for maintaining the confidentiality
                        of your account information, including your password,
                        and for any and all activity that occurs under your
                        account.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Use Restrictions</h5>
                      <p className="text-muted">
                        You are prohibited from violating or attempting to
                        violate the security of the website, including, without
                        limitation:
                      </p>
                      <ul className="text-muted vstack gap-2">
                        <li>
                          Accessing data not intended for you or logging onto a
                          server or an account which you are not authorized to
                          access.
                        </li>
                        <li>
                          Attempting to probe, scan, or test the vulnerability
                          of a system or network or to breach security or
                          authentication measures without proper authorization.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Intellectual Property</h5>
                      <p className="text-muted">
                        All content on this website, including but not limited
                        to text, graphics, logos, images, and software, is the
                        property of IPC or its content suppliers and protected
                        by copyright and intellectual property laws. You may not
                        use any content from our website without the prior
                        written permission of IPC.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Disclaimer of Warranties</h5>
                      <p className="text-muted">
                        The website and its content are provided "as is". IPC
                        makes no warranties, expressed or implied, and hereby
                        disclaims and negates all other warranties, including
                        without limitation, implied warranties or conditions of
                        merchantability, fitness for a particular purpose, or
                        non-infringement of intellectual property or other
                        violation of rights.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Limitation of Liability</h5>
                      <p className="text-muted">
                        In no event shall IPC or its suppliers be liable for any
                        damages (including, without limitation, damages for loss
                        of data or profit, or due to business interruption)
                        arising out of the use or inability to use the materials
                        on IPC’s website, even if IPC or an IPC authorized
                        representative has been notified orally or in writing of
                        the possibility of such damage.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Indemnification</h5>
                      <p className="text-muted">
                        You agree to indemnify, defend, and hold harmless IPC,
                        its officers, directors, employees, agents, licensors,
                        suppliers, and any third-party information providers to
                        the website from and against all losses, expenses,
                        damages, and costs, including reasonable attorneys’
                        fees, resulting from any violation of these Terms of
                        Service or any activity related to your account
                        (including negligent or wrongful conduct) by you or any
                        other person accessing the website using your account.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Governing Law</h5>
                      <p className="text-muted">
                        Any claim relating to IPC’s website shall be governed by
                        the laws of the state in which IPC is headquartered
                        without regard to its conflict of law provisions.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-3 fs-14">
                    <div className="flex-shrink-0 me-3">
                      <FeatherIcon
                        className="text-success icon-dual-success icon-sm"
                        icon="check-circle"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-semibold">Contact Information</h5>
                      <p className="text-muted">
                        For any questions or concerns regarding these Terms of
                        Service, please contact us at{" "}
                        <NavLink to="/company?tab=contact">
                          [Contact Information]
                        </NavLink>
                        .
                      </p>
                    </div>
                  </div>
                  <p className="text-muted">
                    Thank you for choosing Insulation Products Corporation.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TermsCondition;
