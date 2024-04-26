import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
//Small Images
import picture0 from "../../../../assets/images/ipc/IP42MW.png";
import picture1 from "../../../../assets/images/ipc/IP42MW.png";
import picture2 from "../../../../assets/images/ipc/IP44A2-IP45A3.png";
import picture3 from "../../../../assets/images/ipc/IP46MD.png";
import picture4 from "../../../../assets/images/ipc/adhesiveLined.webp";
import picture5 from "../../../../assets/images/ipc/ip52ec.png";
import LeftSideTables from "../../About/LeftSideTables";
import bgImg from "../../../../assets/images/background-image.png";

const HeatShrinkAdhesiveLinedPoly = () => {
  document.title = "Team | Insulation Products Corporation";

  return (
    <React.Fragment>
      <img
        src={bgImg}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          maxWidth: "100vw",
          height: "100%",
        }}
      />
      <div className="page-content">
        <Container fluid style={{ maxWidth: "2800px" }}>
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
                          Adhesive-Lined Polyolefin Tubing
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 px-5 fs-5">
                            At IPC, we specialize in providing top-quality
                            adhesive-lined polyolefin tubing, designed to offer
                            a reliable solution for cable insulation,
                            protection, and sealing. Our premium-grade
                            polyolefin tubing is engineered with an inner
                            adhesive layer, ensuring a secure, watertight seal
                            upon application. This makes it an ideal choice for
                            a wide range of industries, including automotive,
                            telecommunications, and electrical engineering,
                            where durability and performance are paramount.
                            <br />
                            <br />
                            Our adhesive-lined polyolefin tubing is available in
                            a variety of sizes and specifications to meet the
                            unique needs of our clients. With excellent
                            environmental and chemical resistance, our tubing
                            provides long-lasting protection against abrasion,
                            moisture, and other harsh conditions. Whether you're
                            looking to enhance the insulation of electrical
                            wiring or need a robust sealing solution, IPC's
                            adhesive-lined polyolefin tubing offers the perfect
                            blend of flexibility, strength, and reliability.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture4}
                              alt=""
                            />
                          </div>
                        </Col>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Discover how IPC's adhesive-lined polyolefin tubing
                          can elevate your project's standards by ensuring
                          unparalleled protection and efficiency. Contact us
                          today to learn more about our products and how we can
                          assist you in finding the ideal solution for your
                          specific requirements
                        </p>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Melt Wall Polyolefin Tubing
                          <span className="fs-5 float float-end">
                            Part Number:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/IP42MW"
                            >
                              IP42MW <i className="bx bx-link-external"></i>
                            </a>
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            Melt Wall Polyolefin Tubing from IPC stands as a
                            pinnacle of thermal insulation technology.
                            Engineered for high-stress electrical applications,
                            this tubing features a unique melt wall design that
                            ensures excellent adherence to both wire and
                            substrate. Upon heating, it creates a protective
                            barrier resistant to fluids, solvents, and minor
                            abrasions, thereby extending the life of cable
                            assemblies.
                            <br />
                            <br />
                            Perfect for applications requiring robust
                            environmental protection, our Melt Wall Polyolefin
                            Tubing is your go-to choice for ensuring operational
                            reliability and efficiency.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture1}
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Thin Wall Adhesive Heat Shrink Tubing
                          <span className="fs-5 float float-end">
                            Part Number:{" "}
                            <a
                              className="badge bg-secondary-subtle text-secondary badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/IP44A2"
                            >
                              IP44A2 <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-info-subtle text-info badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/IP44A2IP45A3"
                            >
                              IP45A3 <i className="bx bx-link-external"></i>
                            </a>
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            IPC's Thin Wall Adhesive Heat Shrink Tubing offers a
                            lightweight yet durable solution for insulating and
                            sealing wire connections and joints. The thin wall
                            design allows for precision application in tight
                            spaces without compromising on protection. When heat
                            is applied, the outer tubing shrinks while the inner
                            adhesive layer melts, encapsulating the component in
                            a protective, moisture-proof seal.
                            <br />
                            <br />
                            This tubing is ideal for applications where space is
                            at a premium and protection from environmental
                            factors is required. It ensures a strong, secure fit
                            and provides excellent chemical and abrasion
                            resistance.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture2}
                              alt=""
                            />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Medium Wall Adhesive Heat Shrink Tubing
                          <span className="fs-5 float float-end">
                            Part Number:{" "}
                            <a
                              className="badge bg-success-subtle text-success badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/IP46MD"
                            >
                              IP46MD <i className="bx bx-link-external"></i>
                            </a>{" "}
                            <a
                              className="badge bg-dark-subtle text-dark badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/IP47HV"
                            >
                              IP47HV <i className="bx bx-link-external"></i>
                            </a>
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            Designed to offer a perfect balance between
                            thickness and flexibility, IPC's Medium Wall
                            Adhesive Heat Shrink Tubing is suitable for a wide
                            range of sealing and insulation tasks. The medium
                            wall thickness provides enhanced protection against
                            mechanical damage and environmental effects, while
                            the adhesive lining ensures a watertight seal upon
                            heating.
                            <br />
                            <br />
                            This tubing is an excellent choice for applications
                            requiring both durability and flexibility, offering
                            superior electrical insulation and resistance to UV
                            light, chemicals, and abrasion. Ensure the longevity
                            and reliability of your electrical connections with
                            our Medium Wall Tubing.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture3}
                              alt=""
                            />
                          </div>
                        </Col>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Heavy Wall Adhesive Heat Shrink Tubing
                        </h3>
                        <p className="mt-3 mb-5 fs-5 px-5">
                          IPC's Heavy Wall Adhesive Heat Shrink Tubing is
                          engineered for the toughest environments and
                          applications. Offering maximum protection against
                          severe mechanical stresses, this tubing is ideal for
                          outdoor, underground, and industrial environments. The
                          thick wall construction paired with an adhesive lining
                          provides a rugged barrier against moisture, chemicals,
                          and physical damage, ensuring a secure, long-lasting
                          seal.
                          <br />
                          <br />
                          Tailored for high-demand applications, our Heavy Wall
                          Tubing guarantees peace of mind by safeguarding
                          critical connections against the harshest conditions.
                        </p>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3
                          className="card-title mb-3 fs-4 card-header"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Heat Shrinkable End Caps
                          <span className="fs-5 float float-end">
                            Part Number:{" "}
                            <a
                              className="badge bg-primary-subtle text-primary badge-border"
                              target="_blank"
                              href="/IPC/product-catalog/IP52EC"
                            >
                              IP52EC <i className="bx bx-link-external"></i>
                            </a>
                          </span>
                        </h3>
                        <Col md={8}>
                          <p className="mt-3 mb-5 fs-5 px-5">
                            Protect the end points of cables and wires with
                            IPC's Heat Shrinkable End Caps. These caps offer a
                            secure way to seal off wire ends, preventing
                            moisture ingress and mechanical damage. Upon
                            application of heat, they conform snugly to the
                            cable, creating a durable, weatherproof seal that
                            guards against corrosion and electrical shorts.
                            <br />
                            <br />
                            Ideal for cable repair and maintenance, our Heat
                            Shrinkable End Caps are an essential component in
                            preserving the integrity and performance of your
                            electrical systems. Their easy application and
                            reliable performance make them a trusted solution
                            for professionals.
                          </p>
                        </Col>
                        <Col
                          md={4}
                          className="d-flex justify-content-center align-items-center w-full "
                        >
                          <div>
                            <img
                              className="img-fluid rounded img-thumbnail"
                              src={picture5}
                              alt=""
                            />
                          </div>
                        </Col>
                        <Row>
                          
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

export default HeatShrinkAdhesiveLinedPoly;
