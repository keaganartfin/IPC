import React, { useState } from "react";
import {
  Card,
  Col,
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import classnames from "classnames";

// Import Images
import faqImg from "../../../assets/images/faq-img.png";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const Faqs = () => {
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);

  const [col5, setcol5] = useState(false);
  const [col6, setcol6] = useState(false);
  const [col7, setcol7] = useState(false);
  const [col8, setcol8] = useState(false);

  const [col9, setcol9] = useState(true);
  const [col10, setcol10] = useState(false);
  const [col11, setcol11] = useState(false);
  const [col12, setcol12] = useState(false);

  const [col13, setCol13] = useState(false);
  const [col14, setCol14] = useState(false);
  const [col15, setCol15] = useState(false);
  const [col16, setCol16] = useState(false);
  const [col17, setCol17] = useState(true);
  const [col18, setCol18] = useState(false);

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
    setcol5(!col5);
    setcol6(false);
    setcol7(false);
    setcol8(false);
  };

  const t_col6 = () => {
    setcol6(!col6);
    setcol5(false);
    setcol7(false);
    setcol8(false);
  };

  const t_col7 = () => {
    setcol7(!col7);
    setcol6(false);
    setcol5(false);
    setcol8(false);
  };

  const t_col8 = () => {
    setcol8(!col8);
    setcol5(false);
    setcol6(false);
    setcol7(false);
  };

  const t_col9 = () => {
    setcol9(!col9);
    setcol10(false);
    setcol11(false);
    setcol12(false);
  };

  const t_col10 = () => {
    setcol10(!col10);
    setcol11(false);
    setcol12(false);
    setcol9(false);
  };

  const t_col11 = () => {
    setcol11(!col11);
    setcol9(false);
    setcol10(false);
    setcol12(false);
  };

  const t_col12 = () => {
    setcol12(!col12);
    setcol9(false);
    setcol10(false);
    setcol11(false);
  };

  const t_col13 = () => {
    setCol13(!col13);
    setCol14(false);
    setCol15(false);
    setCol16(false);
    setCol17(false);
    setCol18(false);
  };

  const t_col14 = () => {
    setCol14(!col14);
    setCol13(false);
    setCol15(false);
    setCol16(false);
    setCol17(false);
    setCol18(false);
  };

  const t_col15 = () => {
    setCol15(!col15);
    setCol13(false);
    setCol14(false);
    setCol16(false);
    setCol17(false);
    setCol18(false);
  };

  const t_col16 = () => {
    setCol16(!col16);
    setCol13(false);
    setCol14(false);
    setCol15(false);
    setCol17(false);
    setCol18(false);
  };

  const t_col17 = () => {
    setCol17(!col17);
    setCol13(false);
    setCol14(false);
    setCol15(false);
    setCol16(false);
    setCol18(false);
  };

  const t_col18 = () => {
    setCol18(!col18);
    setCol13(false);
    setCol14(false);
    setCol15(false);
    setCol16(false);
    setCol17(false);
  };

  const [activeFaqTab, setActiveFaqTab] = useState("1");
  const toggleFaqTab = (faqTab) => {
    if (activeFaqTab !== faqTab) {
      setActiveFaqTab(faqTab);
    }
  };

  document.title = "FAQs | Insulation Products Corporation";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xxl={9}>
              <Card className="rounded-0 bg-success-subtle mx-n4 mt-n4 border-top pt-10">
                <div className="px-4">
                  <Row>
                    <Col xxl={5} className="align-self-center">
                      <div className="py-4">
                        <h4 className="display-6 coming-soon-text">
                          Frequently asked questions
                        </h4>
                        <p className="text-success fs-15 mt-3">
                          If you can not find answer to your question in our
                          FAQ, you can always contact us or email us. We will
                          answer you shortly!
                        </p>
                        <div className="hstack gap-2">
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
                            className="btn btn-info btn-label rounded-pill"
                            href="tel:+16307710700"
                          >
                            <i className="ri-phone-line label-icon align-middle rounded-pill fs-16 me-2"></i>{" "}
                            Give us a call
                          </button>
                        </div>
                      </div>
                    </Col>
                    <div className="col-xxl-3 ms-auto">
                      <div className="mb-n5 pb-1 faq-img d-none d-xxl-block">
                        <img src={faqImg} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </Row>
                </div>
              </Card>
              <Row className="justify-content-evenly mb-4">
                <Col lg={4}>
                  <div className="mt-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="flex-shrink-0 me-1">
                        <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fs-16 mb-0 fw-semibold">
                          General Questions
                        </h5>
                      </div>
                    </div>

                    <div
                      className="accordion accordion-border-box"
                      id="genques-accordion"
                    >
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="genques-headingOne"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col1 }
                            )}
                            type="button"
                            onClick={t_col1}
                            style={{ cursor: "pointer" }}
                          >
                            What is your lead time?
                          </button>
                        </h2>
                        <Collapse isOpen={col1} className="accordion-collapse">
                          <div className="accordion-body">
                            For products in stock, we typically ship same day or
                            next day. For Value-added services (cutting to a
                            length), we typically ship within 24 – 48 hours. For
                            Markers, Kitting, Special Requests we typically ship
                            in 1 – 2 weeks.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="genques-headingTwo"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col2 }
                            )}
                            type="button"
                            onClick={t_col2}
                            style={{ cursor: "pointer" }}
                          >
                            Do you have a minimum order?
                          </button>
                        </h2>
                        <Collapse isOpen={col2} className="accordion-collapse">
                          <div className="accordion-body">
                            Our minimum order is $50.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="genques-headingThree"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col3 }
                            )}
                            type="button"
                            onClick={t_col3}
                            style={{ cursor: "pointer" }}
                          >
                            Are you U/L Certified?
                          </button>
                        </h2>
                        <Collapse isOpen={col3} className="accordion-collapse">
                          <div className="accordion-body">
                            IPC is a U/L Certified Repackager and Printer.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="genques-headingFour"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col4 }
                            )}
                            type="button"
                            onClick={t_col4}
                            style={{ cursor: "pointer" }}
                          >
                            What is RoHS?
                          </button>
                        </h2>
                        <Collapse isOpen={col4} className="accordion-collapse">
                          <div className="accordion-body">
                            RoHS is a European Union directive that bans
                            hazardous substances. We carry many RoHS compliant
                            products.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="manageaccount-headingOne"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col5 }
                            )}
                            type="button"
                            onClick={t_col5}
                            style={{ cursor: "pointer" }}
                          >
                            Can you provide PPAP and IMDS reports?
                          </button>
                        </h2>
                        <Collapse isOpen={col5} className="accordion-collapse">
                          <div className="accordion-body">
                            IPC can provide both PPAP’s and IMDS submissions for
                            many of our products.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="manageaccount-headingTwo"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col6 }
                            )}
                            type="button"
                            onClick={t_col6}
                            style={{ cursor: "pointer" }}
                          >
                            Do you offer Medical Grade products?
                          </button>
                        </h2>
                        <Collapse isOpen={col6} className="accordion-collapse">
                          <div className="accordion-body">
                            We can supply both Medical Grade tubing and
                            Cyanoacrylate Adhesives.
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="mt-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="flex-shrink-0 me-1">
                        <i className="ri-user-settings-line fs-24 align-middle text-success me-1"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fs-16 mb-0 fw-semibold">
                          Manage Account
                        </h5>
                      </div>
                    </div>
                    <div
                      className="accordion accordion-border-box"
                      id="manageaccount-accordion"
                    >
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingOne"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col7 }
                            )}
                            type="button"
                            onClick={t_col7}
                            style={{ cursor: "pointer" }}
                          >
                            Do you have the capability to Hot Stamp or mark on
                            tubing?
                          </button>
                        </h2>
                        <Collapse isOpen={col7} className="accordion-collapse">
                          <div className="accordion-body">
                            Yes. IPC Markers are a low cost, simple, attractive
                            and completely dry process.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="manageaccount-headingFour"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col8 }
                            )}
                            type="button"
                            onClick={t_col8}
                            style={{ cursor: "pointer" }}
                          >
                            Do you have someone who can visit my location?
                          </button>
                        </h2>
                        <Collapse isOpen={col8} className="accordion-collapse">
                          <div className="accordion-body">
                            IPC has a dedicated Sales Staff that can work with
                            you on-site to help with all of your requirements.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingOne"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col9 }
                            )}
                            type="button"
                            onClick={t_col9}
                            style={{ cursor: "pointer" }}
                          >
                            Do you have the capability to make custom logos for
                            marking the tubing?
                          </button>
                        </h2>
                        <Collapse isOpen={col9} className="accordion-collapse">
                          <div className="accordion-body">
                            IPC has the capability to create custom logos for a
                            minimal charge.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingTwo"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col10 }
                            )}
                            type="button"
                            onClick={t_col10}
                            style={{ cursor: "pointer" }}
                          >
                            Will you certify to MIL-SPECS?
                          </button>
                        </h2>
                        <Collapse isOpen={col10} className="accordion-collapse">
                          <div className="accordion-body">
                            Yes. We have the capability to send a Packing Slip
                            certification or a signed certification if
                            requested.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingThree"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col11 }
                            )}
                            type="button"
                            onClick={t_col11}
                            style={{ cursor: "pointer" }}
                          >
                            What MIL-SPEC can you certify your marking process
                            to?
                          </button>
                        </h2>
                        <Collapse isOpen={col11} className="accordion-collapse">
                          <div className="accordion-body">
                            We can certify our Hot Stamp Marking process to
                            MIL-STD-130, MIL-M-81531 (Permanency), MIL-M-60903
                            (Hot Stamp Only) and MIS-39598.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingFour"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col12 }
                            )}
                            type="button"
                            onClick={t_col12}
                            style={{ cursor: "pointer" }}
                          >
                            How much inventory do you have at any one time?
                          </button>
                        </h2>
                        <Collapse isOpen={col12} className="accordion-collapse">
                          <div className="accordion-body">
                            We stock over 25 million feet of tubing so we are
                            able to service our customers with quick deliveries.
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="mt-3">
                    <div className="d-flex align-items-center mb-2">
                      <div className="flex-shrink-0 me-1">
                        <i className="ri-shield-keyhole-line fs-24 align-middle text-success me-1"></i>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fs-16 mb-0 fw-semibold">
                          Privacy &amp; Security
                        </h5>
                      </div>
                    </div>

                    <div
                      className="accordion accordion-border-box"
                      id="privacy-accordion"
                    >
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingOne"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col13 }
                            )}
                            type="button"
                            onClick={t_col13}
                            style={{ cursor: "pointer" }}
                          >
                            What is the difference between Melt Wall Polyolefin
                            and Adhesive Lined Polyolefin?
                          </button>
                        </h2>
                        <Collapse isOpen={col13} className="accordion-collapse">
                          <div className="accordion-body">
                            Melt Wall Polyolefin has an inner melfaqTable wall that
                            flows and encapsulates. Adhesive Lined Polyolefin
                            has an inner melfaqTable wall that flows and adheres.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingTwo"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col14 }
                            )}
                            type="button"
                            onClick={t_col14}
                            style={{ cursor: "pointer" }}
                          >
                            How can I avoid splitting with Heat Shrink Tubing?
                          </button>
                        </h2>
                        <Collapse isOpen={col14} className="accordion-collapse">
                          <div className="accordion-body">
                            Allow shrinkable tubing to recover at least 20% to
                            avoid splitting. Be sure to use a heat-gun at the
                            proper suggested temperature and always use a
                            reflector on the heat-gun for even heat dispersion.
                            Either too much heat or improperly distributed heat
                            is usually the cause of split tubing, especially
                            PVC.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingThree"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col15 }
                            )}
                            type="button"
                            onClick={t_col15}
                            style={{ cursor: "pointer" }}
                          >
                            How do I keep HS-PVC from becoming undersized?
                          </button>
                        </h2>
                        <Collapse isOpen={col15} className="accordion-collapse">
                          <div className="accordion-body">
                            Shrinkable PVC needs to be stored below 70°F.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingFour"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col16 }
                            )}
                            type="button"
                            onClick={t_col16}
                            style={{ cursor: "pointer" }}
                          >
                            Why does my Marked image seem smaller after I shrink
                            the tubing?
                          </button>
                        </h2>
                        <Collapse isOpen={col16} className="accordion-collapse">
                          <div className="accordion-body">
                            The Marked image shrinks along with the tubing.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingFour"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col17 }
                            )}
                            type="button"
                            onClick={t_col17}
                            style={{ cursor: "pointer" }}
                          >
                            If I have a flat width in Inches, how do I figure
                            out the inner diameter?
                          </button>
                        </h2>
                        <Collapse isOpen={col17} className="accordion-collapse">
                          <div className="accordion-body">
                            Flat Width (IN) X 2 divided by 3.14159.
                          </div>
                        </Collapse>
                      </div>
                      <div className="accordion-item shadow">
                        <h2
                          className="accordion-header"
                          id="privacy-headingFour"
                        >
                          <button
                            className={classnames(
                              "accordion-button",
                              "fw-medium",
                              { collapsed: !col18 }
                            )}
                            type="button"
                            onClick={t_col18}
                            style={{ cursor: "pointer" }}
                          >
                            How is Layflat PVC measured?
                          </button>
                        </h2>
                        <Collapse isOpen={col18} className="accordion-collapse">
                          <div className="accordion-body">
                            Layflat PVC is measured by flat width in
                            millimeters.
                          </div>
                        </Collapse>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Faqs;
