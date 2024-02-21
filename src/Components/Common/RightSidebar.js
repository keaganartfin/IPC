import React, { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Collapse,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//redux
import {
  changeLayout,
  changeSidebarTheme,
  changeLayoutMode,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarTheme,
  changeLeftsidebarSizeType,
  changeLeftsidebarViewType,
  changeSidebarImageType,
  changePreLoader,
  changeSidebarVisibility,
  // resetValue
} from "../../slices/thunks";
import { useSelector, useDispatch } from "react-redux";

//import Constant
import {
  layoutTypes,
  leftSidebarTypes,
  layoutModeTypes,
  layoutWidthTypes,
  layoutPositionTypes,
  topbarThemeTypes,
  leftsidbarSizeTypes,
  leftSidebarViewTypes,
  leftSidebarImageTypes,
  preloaderTypes,
  sidebarVisibilitytypes,
} from "../constants/layout";

//SimpleBar
import SimpleBar from "simplebar-react";
import classnames from "classnames";

//import Images
import img01 from "../../assets/images/sidebar/img-1.jpg";
import img02 from "../../assets/images/sidebar/img-2.jpg";
import img03 from "../../assets/images/sidebar/img-3.jpg";
import img04 from "../../assets/images/sidebar/img-4.jpg";
import usFlag from "../../assets/images/flags/us.svg";
import { country } from "../../common/data";
import { createSelector } from "reselect";

const RightSidebar = () => {
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const toggle4 = () => setDropdownOpen4((prevState) => !prevState);

  const [seletedCountry3, setseletedCountry3] = useState({
    id: 240,
    flagImg: usFlag,
    countryName: "United States of America",
    countryCode: "+1",
  });
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  function tog_show() {
    setShow(!show);
    dispatch(changeSidebarTheme("gradient"));
  }

  useEffect(() => {
    if (
      show &&
      document.getElementById("sidebar-color-dark") &&
      document.getElementById("sidebar-color-light")
    ) {
      document.getElementById("sidebar-color-dark").checked = false;
      document.getElementById("sidebar-color-light").checked = false;
    }
  });

  const selectLayoutState = (state) => state.Layout;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (layout) => ({
      layoutType: layout.layoutType,
      leftSidebarType: layout.leftSidebarType,
      layoutModeType: layout.layoutModeType,
      layoutWidthType: layout.layoutWidthType,
      layoutPositionType: layout.layoutPositionType,
      topbarThemeType: layout.topbarThemeType,
      leftsidbarSizeType: layout.leftsidbarSizeType,
      leftSidebarViewType: layout.leftSidebarViewType,
      leftSidebarImageType: layout.leftSidebarImageType,
      preloader: layout.preloader,
      sidebarVisibilitytype: layout.sidebarVisibilitytype,
    })
  );
  // Inside your component
  const {
    layoutType,
    leftSidebarType,
    layoutModeType,
    layoutWidthType,
    layoutPositionType,
    topbarThemeType,
    leftsidbarSizeType,
    leftSidebarViewType,
    leftSidebarImageType,
    preloader,
    sidebarVisibilitytype,
  } = useSelector(selectLayoutProperties);

  // open offcanvas
  const [open, setOpen] = useState(false);
  const toggleLeftCanvas = () => {
    setOpen(!open);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    const element = document.getElementById("back-to-top");
    if (element) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  };

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const pathName = window.location.pathname;

  useEffect(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      document.getElementById("preloader").style.opacity = "1";
      document.getElementById("preloader").style.visibility = "visible";
      setTimeout(function () {
        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("preloader").style.visibility = "hidden";
      }, 1000);
    }
  }, [preloader, pathName]);

  return (
    <React.Fragment>
      <button
        onClick={() => toTop()}
        className="btn btn-danger btn-icon"
        id="back-to-top"
      >
        <i className="ri-arrow-up-line"></i>
      </button>

      {preloader === "enable" && (
        <div id="preloader">
          <div id="status">
            <div
              className="spinner-border text-primary avatar-sm"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="customizer-setting d-none d-md-block">
          <div
            onClick={toggleLeftCanvas}
            className="btn-info rounded-pill shadow-lg btn btn-icon btn-lg p-2"
          >
            <i className="ri ri-chat-1-line fs-24"></i>
          </div>
        </div>
        <Offcanvas
          isOpen={open}
          toggle={toggleLeftCanvas}
          direction="end"
          className="offcanvas-end border-0 mb-3 mx-3"
          style={{ top: "auto" }}
        >
          <OffcanvasHeader
            className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header-dark"
            toggle={toggleLeftCanvas}
          >
            <span className="m-0 me-2 text-white">Contact Form</span>
          </OffcanvasHeader>
          <OffcanvasBody className="p-0">
            <div>
              <Container fluid>
                <Row className="justify-content-center mt-4">
                  <Col>
                    <div className="mb-3">
                      <Label htmlFor="name" className="form-label">
                        Name
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="companyName" className="form-label">
                        Company Name
                      </Label>
                      <Input
                        type="url"
                        className="form-control"
                        id="companyName"
                        placeholder="Enter Company Name"
                      />
                    </div>

                    <div className="mb-3">
                      <Label htmlFor="emailAddress" className="form-label">
                        Email Address
                      </Label>
                      <Input
                        type="url"
                        className="form-control"
                        id="emailAddress"
                        placeholder="Email@Company.com"
                      />
                    </div>
                    <div className="mb-3">
                      <Label>Phone Number</Label>
                      <Dropdown
                        className="input-group"
                        isOpen={dropdownOpen4}
                        toggle={toggle4}
                      >
                        <DropdownToggle
                          as="button"
                          className="btn btn-light border arrow-none"
                        >
                          <img
                            src={seletedCountry3.flagImg}
                            alt="country flag"
                            className="options-flagimg"
                            height="20"
                          />
                          <span className="countrylist-codeno text-muted">
                            {seletedCountry3.countryCode}
                          </span>
                        </DropdownToggle>
                        <input
                          type="number"
                          className="form-control rounded-end flag-input"
                          placeholder="000-000-0000"
                        />
                        <DropdownMenu
                          as="ul"
                          className="list-unstyled w-100 dropdown-menu-list mb-0"
                        >
                          <SimpleBar
                            style={{ maxHeight: "220px" }}
                            className="px-3"
                          >
                            {(country || []).map((item, key) => (
                              <DropdownItem
                                as="li"
                                onClick={() => setseletedCountry3(item)}
                                key={key}
                                className="dropdown-item d-flex"
                              >
                                <div className="flex-shrink-0 me-2">
                                  <img
                                    src={item.flagImg}
                                    alt="country flag"
                                    className="options-flagimg"
                                    height="20"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex">
                                    <div className="country-name me-1">
                                      {item.countryName}
                                    </div>
                                    <span className="countrylist-codeno text-muted">
                                      {item.countryCode}
                                    </span>
                                  </div>
                                </div>
                              </DropdownItem>
                            ))}
                          </SimpleBar>
                        </DropdownMenu>
                      </Dropdown>
                      <div className="dropdown-menu w-100">
                        <div className="p-2 px-3 pt-1 searchlist-input">
                          <label
                            type="text"
                            className="form-control-sm border search-countryList"
                            placeholder="Search country name or country code..."
                          />
                        </div>
                        <ul className="list-unstyled dropdown-menu-list mb-0"></ul>
                      </div>
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="callbackTime" className="form-label">
                        Best Time To Call (CST)
                      </Label>
                      <Input
                        type="time"
                        className="form-control"
                        id="callBackTime"
                      />
                    </div>
                    <div className="mb-3">
                      <Label
                        htmlFor="VertimeassageInput"
                        className="form-label"
                      >
                        Message
                      </Label>
                      <textarea
                        className="form-control"
                        id="VertimeassageInput"
                        rows="3"
                        placeholder="Give a brief description of what we can help you with."
                      ></textarea>
                    </div>
                    <div className="text-end mb-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </React.Fragment>
  );
};

export default RightSidebar;
