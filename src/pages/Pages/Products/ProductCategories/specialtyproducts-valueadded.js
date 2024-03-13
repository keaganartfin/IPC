import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  Offcanvas,
  OffcanvasBody,
  Row,
  UncontrolledDropdown,
  FormFeedback,
} from "reactstrap";
import profileBg from "../../../assets/images/profile-bg.jpg";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { ipcPages } from "../../../common/data";

//User Images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import userdummyimg from "../../../assets/images/users/user-dummy-img.jpg";

//Small Images
import smallImage9 from "../../../assets/images/small/img-9.jpg";
//redux
import { useSelector, useDispatch } from "react-redux";

//import action
import {
  getTeamData as onGetTeamData,
  deleteTeamData as onDeleteTeamData,
  addTeamData as onAddTeamData,
  updateTeamData as onUpdateTeamData,
} from "../../../slices/thunks";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";
import { createSelector } from "reselect";
import LeftSideTables from "../About/LeftSideTables";

const SpecialtyValueAdded = () => {
  document.title = "Team | Velzon - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const selectteamData = createSelector(
    (state) => state.Team,
    (teamData) => teamData.teamData
  );
  // Inside your component
  const teamData = useSelector(selectteamData);

  const [team, setTeam] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [teamList, setTeamlist] = useState([]);

  //Modal
  const [teamMem, setTeamMem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(onGetTeamData());
  }, [dispatch]);

  useEffect(() => {
    setTeam(teamData);
    setTeamlist(teamData);
  }, [teamData]);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setTeamMem(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  // Update To do
  const handleTeamClick = useCallback(
    (arg) => {
      const teamMem = arg;
      setTeamMem({
        id: teamMem.id,
        name: teamMem.name,
        designation: teamMem.designation,
        projectCount: teamMem.projectCount,
        taskCount: teamMem.taskCount,
      });

      setIsEdit(true);
      toggle();
    },
    [toggle]
  );

  // Add To do
  const handleTeamClicks = () => {
    setTeamMem("");
    setModal(!modal);
    setIsEdit(false);
    toggle();
  };

  // delete
  const onClickData = (team) => {
    setTeam(team);
    setDeleteModal(true);
  };

  const handleDeleteTeamData = () => {
    if (team) {
      dispatch(onDeleteTeamData(team.id));
      setDeleteModal(false);
    }
  };

  useEffect(() => {
    const list = document.querySelectorAll(".team-list");
    const buttonGroups = document.querySelectorAll(".filter-button");
    for (let i = 0; i < buttonGroups.length; i++) {
      buttonGroups[i].addEventListener("click", onButtonGroupClick);
    }

    function onButtonGroupClick(event) {
      if (
        event.target.id === "list-view-button" ||
        event.target.parentElement.id === "list-view-button"
      ) {
        document.getElementById("list-view-button").classList.add("active");
        document.getElementById("grid-view-button").classList.remove("active");
        list.forEach(function (el) {
          el.classList.add("list-view-filter");
          el.classList.remove("grid-view-filter");
        });
      } else {
        document.getElementById("grid-view-button").classList.add("active");
        document.getElementById("list-view-button").classList.remove("active");
        list.forEach(function (el) {
          el.classList.remove("list-view-filter");
          el.classList.add("grid-view-filter");
        });
      }
    }
  }, []);

  const favouriteBtn = (ele) => {
    if (ele.closest("button").classList.contains("active")) {
      ele.closest("button").classList.remove("active");
    } else {
      ele.closest("button").classList.add("active");
    }
  };

  const searchList = (e) => {
    let inputVal = e.toLowerCase();

    const filterItems = (arr, query) => {
      return arr.filter((el) => {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    };

    let filterData = filterItems(teamData, inputVal);
    setTeamlist(filterData);
    if (filterData.length === 0) {
      document.getElementById("noresult").style.display = "block";
      document.getElementById("teamlist").style.display = "none";
    } else {
      document.getElementById("noresult").style.display = "none";
      document.getElementById("teamlist").style.display = "block";
    }
  };

  //OffCanvas
  const [isOpen, setIsOpen] = useState(false);
  const [sideBar, setSideBar] = useState([]);

  //Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggledropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (teamMem && teamMem.name) || "",
      designation: (teamMem && teamMem.designation) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter team Name"),
      designation: Yup.string().required("Please Enter Your designation"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateTeamData = {
          id: teamMem ? teamMem.id : 0,
          name: values.name,
          designation: values.designation,
          projectCount: values.projectCount,
          taskCount: values.taskCount,
        };
        // save edit Team data
        dispatch(onUpdateTeamData(updateTeamData));
        validation.resetForm();
      } else {
        const newTeamData = {
          id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          name: values.name,
          designation: values.designation,
          projectCount: 0,
          taskCount: 0,
          backgroundImg: smallImage9,
        };
        // save new TeamData
        dispatch(onAddTeamData(newTeamData));
        validation.resetForm();
      }
      toggle();
    },
  });

  const truncateHtml = (html, maxLength) => {
    // Ensure html is treated as a string
    let htmlString = String(html);
    let strippedHtml = htmlString.replace(/<[^>]+>/g, ""); // Strip out HTML tags

    if (strippedHtml.length <= maxLength) {
      return htmlString; // Return original if within maxLength
    }

    let truncatedText = strippedHtml.substring(0, maxLength); // Truncate text
    let lastIndex = truncatedText.lastIndexOf(" "); // Find last space to avoid breaking words
    truncatedText = truncatedText.substring(0, lastIndex) + " ..."; // Add ellipsis

    return truncatedText;
  };

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
              <div>
                <Col xxl={9}>
                  <Card>
                    <CardBody>
                      <Card className="rounded-0 bg-secondary-subtle mx-n4 mt-n3 border-top pt-10">
                        <div className="px-4">
                          <Row>
                            <Col xxl={5} className="align-self-center">
                              <div className="py-4">
                                <h4 className="display-6 coming-soon-text3">
                                  PVC Heat Shrink Tubing
                                </h4>
                                <p className="text-secondary fs-15 mt-3">
                                  At Insulation Products Corporation, we offer a
                                  variety of PVC Heat Shrinkable tubing. Heat
                                  shrink PVC provides excellent electrical
                                  insulation and is available in many colors.
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
                                <img
                                  src={StaffPhoto}
                                  alt=""
                                  className="img-fluid"
                                  style={{ maxHeight: "100%" }}
                                />
                              </div>
                            </div>
                          </Row>
                        </div>
                      </Card>
                      <Row className="justify-content-evenly mb-4 about-content">
                        <h3 className="mb-3 card-header">
                          PVC Heat Shrink Tubing
                        </h3>
                        <p className="mt-3 mb-5 px-5 fs-5">
                          Heat Shrinkable PVC Tubing has one of the lowest
                          shrink temperatures of any electrical insulation
                          tubing. This tubing is the best alternative for
                          avoiding heat damage for enclosed or adjacent
                          components. PVC tubing shrinks a full 50% quickly at
                          200°F.
                          <br />
                          <br />
                          The approximate 20% of longitudinal shrinkage allows
                          ripple free conformance around sharp bends to form a
                          tight fitting insulation in most general applications
                          while retaining a high degree of flexibility. PVC Heat
                          Shrink Tubing resists most chemicals and oils as well
                          as sunlight, moisture and fungus. IP30HS meets the
                          requirements of AMS-DTL-23053/2 Class 2.
                          <br />
                          <br />
                          Heat Shrinkable PVC Tubing is also available in
                          irradiated (IP32IP below) and 1/32″ heavy wall.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Layflat PVC Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          Layflat PVC Heat Shrink Tubing is a thin-wall low cost
                          material offering good electrical and mechanical
                          characteristics. When exposed to heat in excess of
                          275°F for a few seconds, the specially formulated
                          polyvinyl chloride material will shrink rapidly and
                          uniformly conforming to the shape of the object to be
                          covered.
                          <br />
                          <br />
                          Layflat PVC is available in diameters from .250″ to 6″
                          and larger. The standard wall thickness is .004″-
                          .006″ but is also available as thin as .0015″ or as
                          thick as .012″ (for thicker walls, use product
                          IP30HS). Standard colors are white, black, and clear
                          but can be specially ordered in almost any color.
                          <br />
                          <br />
                          Applications include insulation and jacketing of
                          batteries, capacitors and production of industrial
                          equipment, toys, sporting goods, medical and consumer
                          products. A portable heat gun can be used for
                          shrinking in most applications of our low temperature
                          heat shrink tubing.
                        </p>
                        <h3
                          className="card-title mb-3 fs-4"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          Irradiated PVC Heat Shrink Tubing
                        </h3>

                        <p className="mt-3 mb-5 fs-5 px-5">
                          IP32IP provides excellent electrical insulation along
                          with the lowest shrink temperature of any of our
                          tubings. When high shrink temperatures can damage
                          enclosed or adjacent components this tubing is the
                          best choice. PVC tubing shrinks a full 50% quickly at
                          100°C.
                          <br />
                          <br />
                          Approximately 15% longitudinal shrinkage allows ripple
                          free conformance around sharp bends to form a tight
                          fitting insulation for most general applications with
                          a high degree of flexibility. Our Irradiated PVC Heat
                          Shrink tubing resists most chemicals and oils as well
                          as sunlight, moisture and fungus. IP32IP meet the
                          requirements of AMS-DTL-23053/2 Class 1 with the
                          exception of longitudinal shrinkage.
                          <br />
                          <br />
                          Improved solder iron cut-through and abrasion
                          resistance with outstanding dielectric and mechanical
                          protection.
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SpecialtyValueAdded;
