import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Row, UncontrolledCollapse } from "reactstrap";
import { topCategories, suppliers } from "../../common/data";

const RecentActivity = (props) => {
  const [cate, setCate] = useState("all");
  return (
    <React.Fragment>
      <div
        className={
          props.rightColumn
            ? "col-auto layout-rightside-col d-block"
            : "col-auto layout-rightside-col d-none"
        }
        id="layout-rightside-coll"
      >
        <div className="overlay" onClick={props.hideRightColumn}></div>
        <div className="layout-rightside">
          <Card className="rounded-0">
            <CardBody className="p-0">
              <div className="accordion accordion-flush">
                <div className="card-body border-bottom">
                  <div>
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-2">
                      Product Categories
                    </p>
                    <ul className="list-unstyled mb-0 filter-list">
                      <li>
                        <Link
                          to="#"
                          className={
                            cate === "Kitchen Storage & Containers"
                              ? "active d-flex py-1 align-items-center"
                              : "d-flex py-1 align-items-center"
                          }
                          onClick={() =>
                            categories("Kitchen Storage & Containers")
                          }
                        >
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">
                              Heat Shrink Tubing
                            </h5>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className={
                            cate === "Clothes"
                              ? "active d-flex py-1 align-items-center"
                              : "d-flex py-1 align-items-center"
                          }
                          onClick={() => categories("Clothes")}
                        >
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">
                              Non-Shrink Tubing
                            </h5>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className={
                            cate === "Watches"
                              ? "active d-flex py-1 align-items-center"
                              : "d-flex py-1 align-items-center"
                          }
                          onClick={() => categories("Watches")}
                        >
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">
                              Specialty Products & Services
                            </h5>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent shadow-none collapsed show"
                      type="button"
                      id="flush-headingDiscount"
                    >
                      <span className="text-muted text-uppercase fs-12 fw-medium">
                        Product Subcategories
                      </span>
                    </button>
                  </h2>
                  <UncontrolledCollapse
                    toggler="#flush-headingDiscount"
                    defaultOpen
                  >
                    <div
                      id="flush-collapseDiscount"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body text-body pt-1">
                        <ul className="list-unstyled mb-0 filter-list">
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Kitchen Storage & Containers"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() =>
                                categories("Kitchen Storage & Containers")
                              }
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">PVC</h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Polyolefin
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Watches"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Watches")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Adhesive Lined Polyolefin
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  End Caps
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Medical Grade Polyolefin
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Neoprene & Fluoroelastomer
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Kynar (PVDF)
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Modified Fluoropolymer
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">Mylar</h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Heigh-Tempeture
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  PTFE Spaghetti Tubing
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Sleeving
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Spiral Wrap
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Slit Conduit
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Non-Metallic Conduit Tubing
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Non-Metallic Conduit Connectors & Couplings
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Adhesives
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Heat Shrink Tape
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Heat Gun
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Value Added
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                              onClick={() => categories("Clothes")}
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Hot Stamp Marking
                                </h5>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className={
                                cate === "Clothes"
                                  ? "active d-flex py-1 align-items-center"
                                  : "d-flex py-1 align-items-center"
                              }
                            >
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-0 listname">
                                  Tubing Kits
                                </h5>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent shadow-none"
                      type="button"
                      id="flush-headingBrands"
                    >
                      <span className="text-muted text-uppercase fs-12 fw-medium">
                        Manufacturers
                      </span>
                    </button>
                  </h2>
                  <UncontrolledCollapse
                    toggler="#flush-headingBrands"
                    defaultOpen
                  >
                    <div
                      id="flush-collapseBrands"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingBrands"
                    >
                      <div className="accordion-body text-body pt-0">
                        <div className="search-box search-box-sm">
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            placeholder="Search Brands..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                        <div className="d-flex flex-column gap-2 mt-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio5"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio5"
                            >
                              Boat
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio4"
                            >
                              OnePlus
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio3"
                            >
                              Realme
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio2"
                            >
                              Sony
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio1"
                            >
                              JBL
                            </label>
                          </div>

                          <div>
                            <button
                              type="button"
                              className="btn btn-link text-decoration-none text-uppercase fw-medium p-0"
                            >
                              1,235 More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent shadow-none collapsed"
                      type="button"
                      id="flush-headingRating"
                    >
                      <span className="text-muted text-uppercase fs-12 fw-medium">
                        Rating
                      </span>{" "}
                      <span className="badge bg-success rounded-pill align-middle ms-1">
                        1
                      </span>
                    </button>
                  </h2>

                  <UncontrolledCollapse toggler="#flush-headingRating">
                    <div
                      id="flush-collapseRating"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingRating"
                    >
                      <div className="accordion-body text-body">
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio4"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  onChangeRating(4);
                                } else {
                                  onUncheckMark(4);
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio4"
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              4 & Above
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio3"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  onChangeRating(3);
                                } else {
                                  onUncheckMark(3);
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio3"
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              3 & Above
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio2"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  onChangeRating(2);
                                } else {
                                  onUncheckMark(2);
                                }
                              }}
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              2 & Above
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  onChangeRating(1);
                                } else {
                                  onUncheckMark(1);
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio1"
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentActivity;
