import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const PrivacyPolicy = () => {
  document.title = "Privacy Policy | Insulation Products Corporation";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Privacy Policy" pageTitle="Pages" />
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card>
                <div className="bg-warning-subtle position-relative">
                  <CardBody className="p-5">
                    <div className="text-center">
                      <h3 className="fw-semibold">Privacy Policy</h3>
                      <p className="mb-0 text-muted">
                        Last update: 25 April, 2024
                      </p>
                    </div>
                  </CardBody>
                  <div className="shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      // xmlns:svgjs="http://svgjs.com/svgjs"
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
                      <h5 className="fw-semibold">Introduction</h5>
                      <p className="text-muted">
                        Welcome to the website of Insulation Products
                        Corporation (IPC). We are committed to protecting your
                        privacy and ensuring you have a positive experience on
                        our website. This Privacy Policy outlines our practices
                        concerning the collection, use, and disclosure of your
                        information through our website.
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
                      <h5 className="fw-semibold">Information Collection</h5>
                      <p className="text-muted">
                        IPC collects information to provide better services to
                        all our users. We collect information in the following
                        ways:
                      </p>
                      <ul className="text-muted">
                        <li>
                          <p>
                            <strong>Information you provide us:</strong> This
                            includes information you provide when you register
                            on our site, subscribe to our newsletter, fill out a
                            form, or enter information on our site.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>
                              Information we get from your use of our services:
                            </strong>{" "}
                            This includes details of how you use our site, such
                            as visit duration, pages viewed, and other
                            interaction data.
                          </p>
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
                      <h5 className="fw-semibold">Use of Information</h5>
                      <p className="text-muted">
                        The information we collect from you may be used in the
                        following ways:
                      </p>
                      <ul className="text-muted vstack gap-2">
                        <li>
                          To personalize your experience and to allow us to
                          deliver the type of content and product offerings in
                          which you are most interested.
                        </li>
                        <li>
                          To improve our website in order to better serve you.
                        </li>
                        <li>
                          To allow us to better respond to your customer service
                          requests.
                        </li>
                        <li>
                          To administer a contest, promotion, survey, or other
                          site feature.
                        </li>
                        <li>To quickly process your transactions.</li>
                        <li>
                          To send periodic emails regarding your order or other
                          products and services.
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
                      <h5 className="fw-semibold">Information Protection</h5>
                      <p className="text-muted">
                        We implement a variety of security measures to maintain
                        the safety of your personal information when you place
                        an order or enter, submit, or access your personal
                        information.
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
                      <h5 className="fw-semibold">Disclosure of Information</h5>
                      <div className="flex-grow-1">
                        <p className="text-muted">
                          IPC does not sell, trade, or otherwise transfer to
                          outside parties your personally identifiable
                          information. This does not include website hosting
                          partners and other parties who assist us in operating
                          our website, conducting our business, or serving our
                          users, so long as those parties agree to keep this
                          information confidential. We may also release
                          information when its release is appropriate to comply
                          with the law, enforce our site policies, or protect
                          ours or others' rights, property, or safety.
                        </p>
                      </div>
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
                      <h5 className="fw-semibold">Third-party Links</h5>
                      <div className="flex-grow-1">
                        <p className="text-muted">
                          Occasionally, at our discretion, we may include or
                          offer third-party products or services on our website.
                          These third-party sites have separate and independent
                          privacy policies. We, therefore, have no
                          responsibility or liability for the content and
                          activities of these linked sites.
                        </p>
                      </div>
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
                      <h5 className="fw-semibold">
                        Compliance with Legal Obligations
                      </h5>
                      <div className="flex-grow-1">
                        <p className="text-muted">
                          We will disclose personal information where required
                          by law or if we believe that such action is necessary
                          to comply with a current judicial proceeding, a court
                          order, or legal process served on our website.
                        </p>
                      </div>
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
                      <h5 className="fw-semibold">
                        Changes to Our Privacy Policy
                      </h5>
                      <div className="flex-grow-1">
                        <p className="text-muted">
                          We reserve the right to modify this privacy policy at
                          any time, so please review it frequently. Changes and
                          clarifications will take effect immediately upon their
                          posting on the website.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
