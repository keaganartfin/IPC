import React, { useState } from "react";
import { Col, Container, Row, Collapse } from "reactstrap";
import classnames from "classnames";

const Faqs = () => {
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);

  const [col9, setcol5] = useState(false);
  const [col10, setcol6] = useState(true);
  const [col11, setcol7] = useState(false);
  const [col12, setcol8] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
    setcol4(false);
  };

  const t_col4 = () => {
    setcol4(!col4);
    setcol1(false);
    setcol2(false);
    setcol3(false);
  };

  const t_col5 = () => {
    setcol5(!col9);
    setcol6(false);
    setcol7(false);
    setcol8(false);
  };

  const t_col6 = () => {
    setcol6(!col10);
    setcol7(false);
    setcol8(false);
    setcol5(false);
  };

  const t_col7 = () => {
    setcol7(!col11);
    setcol5(false);
    setcol6(false);
    setcol8(false);
  };

  const t_col8 = () => {
    setcol8(!col12);
    setcol5(false);
    setcol6(false);
    setcol7(false);
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">Frequently Asked Questions</h3>
                <p className="text-muted mb-4 ff-secondary">
                  If you can not find answer to your question in our FAQ, you
                  can always contact us or email us. We will answer you shortly!
                </p>

                <div className="hstack gap-2 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-label rounded-pill me-1"
                    href="mailto:sales@insulationproducts.com"
                  >
                    <i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                    Email Us
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-label rounded-pill"
                    href="tel:+16307710700"
                  >
                    <i className="ri-phone-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                    Give us a call
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="g-lg-5 g-4">
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0 me-1">
                  <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-semibold">General Questions</h5>
                </div>
              </div>
              <div
                className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                id="genques-accordion"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingOne">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col1,
                      })}
                      type="button"
                      onClick={t_col1}
                      style={{ cursor: "pointer" }}
                    >
                      What is your lead time?
                    </button>
                  </h2>
                  <Collapse isOpen={col1} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      For products in stock, we typically ship same day or next
                      day. For Value-added services (cutting to a length), we
                      typically ship within 24 – 48 hours. For Markers, Kitting,
                      Special Requests we typically ship in 1 – 2 weeks.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingTwo">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col2,
                      })}
                      type="button"
                      onClick={t_col2}
                      style={{ cursor: "pointer" }}
                    >
                      Do you have a minimum order?
                    </button>
                  </h2>
                  <Collapse isOpen={col2} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      Our minimum order is $50.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingThree">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col3,
                      })}
                      type="button"
                      onClick={t_col3}
                      style={{ cursor: "pointer" }}
                    >
                      Are you U/L Certified?
                    </button>
                  </h2>
                  <Collapse isOpen={col3} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      IPC is a U/L Certified Repackager and Printer.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingFour">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col4,
                      })}
                      type="button"
                      onClick={t_col4}
                      style={{ cursor: "pointer" }}
                    >
                      What is RoHS?
                    </button>
                  </h2>
                  <Collapse isOpen={col4} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      RoHS is a European Union directive that bans hazardous
                      substances. We carry many RoHS compliant products.
                    </div>
                  </Collapse>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0 me-1">
                  <i className="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-semibold">Privacy &amp; Security</h5>
                </div>
              </div>

              <div
                className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                id="privacy-accordion"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="privacy-headingOne">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col9,
                      })}
                      type="button"
                      onClick={t_col5}
                      style={{ cursor: "pointer" }}
                    >
                      Can you provide PPAP and IMDS reports?
                    </button>
                  </h2>
                  <Collapse isOpen={col9} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      IPC can provide both PPAP’s and IMDS submissions for many
                      of our products.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="privacy-headingTwo">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col10,
                      })}
                      type="button"
                      onClick={t_col6}
                      style={{ cursor: "pointer" }}
                    >
                      Do you offer Medical Grade products?
                    </button>
                  </h2>
                  <Collapse isOpen={col10} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      We can supply both Medical Grade tubing and Cyanoacrylate
                      Adhesives.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="privacy-headingThree">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col11,
                      })}
                      type="button"
                      onClick={t_col7}
                      style={{ cursor: "pointer" }}
                    >
                      Do you have the capability to Hot Stamp or mark on tubing?
                    </button>
                  </h2>
                  <Collapse isOpen={col11} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      Yes. IPC Markers are a low cost, simple, attractive and
                      completely dry process.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="privacy-headingFour">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: !col12,
                      })}
                      type="button"
                      onClick={t_col8}
                      style={{ cursor: "pointer" }}
                    >
                      Do you have someone who can visit my location?
                    </button>
                  </h2>
                  <Collapse isOpen={col12} className="accordion-collapse">
                    <div className="accordion-body ff-secondary">
                      IPC has a dedicated Sales Staff that can work with you
                      on-site to help with all of your requirements.
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* <!--end accordion--> */}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Faqs;
