import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import StaffPhoto from "../../../assets/images/ipc/staff.jpg";

const AboutUs = () => {
  return (
    <Col xxl={9}>
      <Card>
        <CardBody>
          <Card className="rounded-0 bg-secondary-subtle mx-n4 mt-n3 border-top pt-10">
            <div className="px-4">
              <Row>
                <Col xxl={5} className="align-self-center">
                  <div className="py-4">
                    <h4 className="display-6 coming-soon-text3">
                      Want to learn more about us?
                    </h4>
                    <p className="text-secondary fs-15 mt-3">
                      Welcome to our story, where innovation and dedication
                      converge. Our mission is to empower and inspire with
                      top-notch services.
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
                <div
                  className="col-xxl-3 ms-auto mr-3 faq-img"
                  style={{ width: "32rem" }}
                >
                  <div className="h-100 mb-n5 pb-1 d-none d-lg-flex align-items-center">
                    <img src={StaffPhoto} alt="" className="img-fluid" style={{maxHeight: "100%"}} />
                  </div>
                </div>
              </Row>
            </div>
          </Card>
          <Row className="justify-content-evenly mb-4 about-content">
            <h3 className="mb-3 card-header">
              About Insulation Products Corporation
            </h3>
            <p className="mt-3 mb-5 px-5 fs-5">
              For over four decades, Insulation Products Corporation (IPC) has
              been a beacon of innovation and quality in the insulation
              industry. Our journey began with a commitment to not just meet but
              exceed the expectations of our clients by providing exceptional
              products and services. <br />
              <br />
              As a premier supplier, IPC has meticulously crafted a portfolio
              that represents the pinnacle of RoHS-compliant insulation
              solutions. This includes an extensive selection of heat-shrink and
              extruded tubing, fiberglass sleevings, spiral cable conduits, heat
              shrink tapes, cable ties, and industrial adhesives.
              <br />
              <br />
              Each product in our lineup is designed with precision and care,
              ensuring that we cater to the intricate needs of diverse
              industries, from electronics to automotive, and beyond. Our
              enduring success stems from our relentless pursuit of excellence
              and innovation, driving us to continuously refine our offerings
              and processes.
            </p>
            <h3
              className="card-title mb-3 fs-4"
              style={{ paddingLeft: "1.5rem" }}
            >
              Our Commitment to Excellence
            </h3>

            <p className="mt-3 mb-5 fs-5 px-5" >
              At the core of IPC's ethos is an unwavering dedication to customer
              satisfaction. We understand that our clients are the heartbeat of
              our business, which is why we place unparalleled emphasis on
              processing every request with the utmost efficiency and precision.
              <br />
              <br />
              Our goal is to cultivate strong, enduring relationships with our
              clientele, serving not just as a supplier but as a trusted partner
              in their success. Our extensive inventory and flexible shipping
              options, including same or next-day dispatch, are testament to our
              commitment to meet client needs promptly.
              <br />
              <br />
              For those requiring customized solutions, we offer a range of
              value-added services such as markers, cutting-to-length, and
              bespoke fabrications, typically delivered within a week. Our
              manufacturing processes are a blend of art and science, adhering
              to the strictest tolerances and conducted in meticulously
              controlled environments to ensure the highest quality of finished
              products.
              <br />
              <br />
              The recent modernization of our facilities and the strategic
              upgrade of our manufacturing equipment are reflective of our
              ongoing commitment to stay at the forefront of technological
              advancements, thereby ensuring we maintain our competitive edge
              and continue to deliver products of exceptional quality.
            </p>
            <h3
              className="card-title mb-3 fs-4"
              style={{ paddingLeft: "1.5rem" }}
            >
              Engage with Us
            </h3>

            <p className="mt-3 mb-5 fs-5 px-5" >
              We invite you to engage with us and explore the diverse range of
              products and services that IPC offers. Our team is on standby to
              address any inquiries or concerns you may have, from quote
              requests and sample provisions to detailed product literature.
              <br />
              <br />
              Our aim is to showcase why IPC stands out as your preferred
              supplier for heat shrink tubing, extruded tubing, industrial
              adhesives, and a host of other products. Our commitment to
              excellence, combined with our extensive product knowledge and
              customer-centric approach, ensures that we provide not just
              products but solutions that are tailored to your specific needs.
              <br />
              <br />
              Discover the IPC difference today and let us contribute to your
              success with our industry-leading solutions and unmatched customer
              service.
            </p>
            <h3
              className="card-title mb-3 fs-4"
              style={{ paddingLeft: "1.5rem" }}
            >
              Get In Touch
            </h3>

            <p className="mt-3 mb-5 fs-5 px-5" >
              Experience the IPC difference firsthand. Reach out to us at{" "}
              <a href="tel:6307710700">(630) 771-0700</a> or via email at{" "}
              <a href="mailto:sales@insulationproducts.com">
                Sales@InsulationProducts.com
              </a>{" "}
              for any queries, further information, or to start your journey
              with us.
              <br />
              <br />
              Our team is eager to demonstrate the value we can bring to your
              projects and operations with our high-quality products, customized
              solutions, and exceptional service. Whether you're embarking on a
              new project or seeking innovative solutions for ongoing needs, IPC
              is here to support you every step of the way.
            </p>
            <Row>
              <Col xs={6} md={4}>
                <div className="d-flex mt-4">
                  <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                      <i className="ri-user-2-fill"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <p className="mb-1">Designation :</p>
                    <h6 className="text-truncate mb-0">
                      Lead Designer / Developer
                    </h6>
                  </div>
                </div>
              </Col>

              <Col xs={6} md={4}>
                <div className="d-flex mt-4">
                  <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                    <div className="avatar-title bg-light rounded-circle fs-16 text-primary">
                      <i className="ri-global-line"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <p className="mb-1">Website :</p>
                    <Link to="#" className="fw-semibold">
                      www.velzon.com
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AboutUs;
