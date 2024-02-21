import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Section from "../../DashboardEcommerce/Section";
import RecentActivity from "../../DashboardEcommerce/RecentActivity";
import RecentApplicants from "../../DashboardJob/RecentApplicants";
import ProductCatalog from "../Products/ProductCatalog/ProductCatalog";

const Starter = () => {
  const [rightColumn, setRightColumn] = useState(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  document.title = "Product Catalog | Insulation Products Corporation";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Product Catalog" pageTitle="Catalogs" />
          <Row>
            <Col>
              <div className="h-100">
                <Section rightClickBtn={toggleRightColumn} />
                <Row>
                  <ProductCatalog />
                </Row>
              </div>
            </Col>
            {/* <RecentActivity
              rightColumn={rightColumn}
              hideRightColumn={toggleRightColumn}
            /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Starter;
