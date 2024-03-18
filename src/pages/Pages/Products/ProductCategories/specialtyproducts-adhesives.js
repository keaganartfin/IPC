import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import StaffPhoto from "../../../../assets/images/ipc/staff.jpg";
import LeftSideTables from "../../About/LeftSideTables";


const SpecialtyAdhesives = () => {
  document.title = "Team | Velzon - React Admin & Dashboard Template";


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid style={{ maxWidth: "1800px" }}>
          <div className="profile-foreground position-relative mx-n4 mt-n4">
            <div className="profile-wid-bg">
              <img src={profileBg} alt="" className="profile-wid-img" />
            </div>
          </div>
          <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
            <Row className="g-4">
              <Col xs={12} className="col-lg-auto order-last order-lg-0">
                <Row className="text text-white-50 text-center">
                  <Col lg={6} xs={4}>
                    <div className="p-2"></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={12}>
              <Row>
                <Col xxl={9}>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3 className="mb-3 card-header">
                          Adhesive Solutions at Insulation Products Corporation
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          At Insulation Products Corporation, we pride ourselves
                          on offering a comprehensive lineup of adhesive
                          products tailored to meet a variety of application
                          needs. Our selection ranges from Instant Adhesives
                          (Cyanoacrylates) and Threadlockers (Anaerobic) to
                          Structural Adhesives (Methacrylates) and
                          state-of-the-art Dispensing Equipment.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Instant Adhesives (Cyanoacrylates)
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          For the ultimate in convenience, ease of use,
                          dependability, and bonding strength across a variety
                          of surfaces like rubber, plastic, metal, and wood, our
                          Cyanoacrylate Instant Adhesives are unmatched. Ideal
                          for applications requiring fast fixture speed and
                          minimal spacing.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Threadlockers and Sealants (Anaerobic)
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Our Anaerobic Adhesives serve as perfect solutions for
                          locking and sealing threaded fasteners, cylindrical
                          assemblies like bearings, gears, shafts, and pulleys,
                          or for creating form-in-place gaskets. These adhesives
                          are designed to offer consistent fixture and cure
                          times, with domestic production ensuring fresher,
                          faster-performing materials.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Structural Adhesives
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Our extensive range includes 1-part and 2-part
                          epoxies, acrylics, and methacrylates, suitable for
                          bonding, encapsulating, and potting across various
                          industries. Our 2-part methacrylates, in particular,
                          are ideal for structural bonding of metals,
                          thermoplastics, and composites, offering excellent
                          solutions for marine, automotive, and industrial
                          applications.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Sealants
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Our sealants are designed for a wide range of bonding
                          and sealing applications, providing strong adhesion
                          and sealing properties on glass, ceramics, masonry,
                          wood, painted surfaces, metals, and plastics.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Application Systems
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          We provide reliable and consistent dispensing
                          equipment, from handheld applicators to fully
                          automated systems, featuring microprocessor
                          controllers, precision dispensing valves, and a
                          comprehensive suite of accessories.
                          <br />
                          <br />
                          With our in-house engineering expertise, we are
                          equipped to develop customized solutions for any
                          adhesive requirement. Contact us for personalized
                          support and guidance on selecting the right adhesive
                          products for your needs.
                          <br />
                          <br />
                          Explore our adhesive solutions further by contacting
                          our specialists at{" "}
                          <a href="tel:1.630.771.0700">1.630.771.0700</a> or via
                          email at{" "}
                          <a href="mailto:sales@insulationproducts.com">
                            sales@insulationproducts.com
                          </a>
                          .
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
                <LeftSideTables />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SpecialtyAdhesives;
