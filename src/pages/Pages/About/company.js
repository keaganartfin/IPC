import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

import classnames from "classnames";

// Import Images
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import LeftSideTables from "./LeftSideTables";
import Faqs from "./faq";

import { document } from "../../../common/data";
import Contact from "./contact";
import AboutUs from "./aboutus";
import ProductCatalog from "./ProductCatalog";
import CustomerSurvey from "./customersurvey";

const Company = () => {
  SwiperCore.use([Autoplay]);

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");
  const location = useLocation();

useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab');
  if (tab) {
    setActiveTab(tab);
  }
}, [location]);


  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.title = "FAQs | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid style={{maxWidth: "1800px"}}>
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
                    <div className="p-2">
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Row>
            <Col lg={12}>
              <div>
                <div className="d-flex">
                  <Nav
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        to="#about"
                        className={classnames(
                          { active: activeTab === "1" },
                          "fs-14"
                        )}
                        onClick={() => {
                          toggleTab("1");
                        }}
                      >
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#faqs"
                        className={classnames(
                          { active: activeTab === "2" },
                          "fs-14"
                        )}
                        onClick={() => {
                          toggleTab("2");
                        }}
                      >
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#contact"
                        className={classnames(
                          { active: activeTab === "3" },
                          "fs-14"
                        )}
                        onClick={() => {
                          toggleTab("3");
                        }}
                      >
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        to="#documents"
                        className={classnames(
                          { active: activeTab === "4" },
                          "fs-14"
                        )}
                        onClick={() => {
                          toggleTab("4");
                        }}
                      >
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent activeTab={activeTab} className="pt-4">
                  <TabPane tabId="1">
                    <Row>
                      <AboutUs />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Faqs />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Contact />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  <TabPane tabId="4">
                    <Row>
                      <ProductCatalog />
                    </Row>
                  </TabPane>
                  <TabPane tabId="5">
                    <Row>
                      <Contact />
                      <CustomerSurvey />
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Company;
