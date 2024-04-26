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
import bgImg from "../../../assets/images/background-image.png";

import LeftSideTables from "./LeftSideTables";
import Faqs from "./faq";

import { document } from "../../../common/data";
import Contact from "./contact";
import AboutUs from "./aboutus";
import ProductCatalog from "./ProductCatalog";
import CustomerSurvey from "./customersurvey";
import Partners from "./partners";
import Awards from "./awards";
import MediaResources from "./mediaresources";
import WhereToBuy from "./wheretobuy";

const Company = () => {
  SwiperCore.use([Autoplay]);

  const [activeTab, setActiveTab] = useState("aboutus");
  const [activityTab, setActivityTab] = useState("aboutus");
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  // document.title = "FAQs | Insulation Products Corporation";

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
              <div>
                <TabContent activeTab={activeTab} className="pt-4">
                  <TabPane tabId="aboutus">
                    <Row>
                      <AboutUs />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  <TabPane tabId="faqs">
                    <Row>
                      <Faqs />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  <TabPane tabId="contact">
                    <Row>
                      <Contact />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  <TabPane tabId="catalog">
                    <Row>
                      <ProductCatalog />
                    </Row>
                  </TabPane>
                  <TabPane tabId="survey">
                    <Row>
                      <CustomerSurvey />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  {/* <TabPane tabId="6">
                    <Row>
                      <Partners />
                      <LeftSideTables />
                    </Row>
                  </TabPane> */}
                  {/* <TabPane tabId="7">
                    <Row>
                      <Awards />
                      <LeftSideTables />
                    </Row>
                  </TabPane> */}
                  <TabPane tabId="resources">
                    <Row>
                      <MediaResources />
                      <LeftSideTables />
                    </Row>
                  </TabPane>
                  {/* <TabPane tabId="9">
                    <Row>
                      <WhereToBuy />
                      <LeftSideTables />
                    </Row>
                  </TabPane> */}
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
