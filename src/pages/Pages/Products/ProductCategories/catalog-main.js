import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import profileBg from "../../../../assets/images/profile-bg.jpg";
import * as Pdfs from "../../../../assets/images/pdfs";
import LeftSideTables from "../../About/LeftSideTables";

const CatalogMain = () => {
  document.title = "PDF Display | Velzon - React Admin & Dashboard Template";
  const { pdfName } = useParams();
  const pdfPath = Pdfs[pdfName];
  document.title = `${pdfName} | PDF Display`;

  console.log("PDF Name from URL:", pdfName);
  console.log("Available PDFs:", Object.keys(Pdfs));

  if (!pdfPath) {
    return <Navigate to="/404" />;
  }
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
                    <h5>{pdfName.replace(/-/g, ' ')}</h5>
                      <iframe
                        src={pdfPath}
                        style={{ width: "100%", height: "1150px" }}
                        frameBorder="0"
                        title={pdfName}
                      >
                        This browser does not support PDFs. Please download the
                        PDF to view it: <a href={pdfPath}>Download PDF</a>.
                      </iframe>
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

export default CatalogMain;
