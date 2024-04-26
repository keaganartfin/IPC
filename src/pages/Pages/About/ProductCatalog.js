import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
  Container,
} from "reactstrap";
import { partDataOld } from "../../../common/data";
import bgImg from "../../../assets/images/background-image.png";

const ProductCatalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(partDataOld);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 25;
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal_loginModals, setModalLoginModals] = useState(false);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = partDataOld.filter(
      (item) =>
        (item.PartID && item.PartID.toLowerCase().includes(lowercasedQuery)) ||
        (item.PartType &&
          item.PartType.toLowerCase().includes(lowercasedQuery)) ||
        (item.Description &&
          item.Description.toLowerCase().includes(lowercasedQuery)) ||
        (item.Description &&
          item.Description.toLowerCase().includes(lowercasedQuery))
    );
    setFilteredData(filtered);
    setCurrentPage(0);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e, newIndex) => {
    e.preventDefault();
    setCurrentPage(newIndex);
  };

  const [modalKey, setModalKey] = useState(0); // Add a key state for the modal

  const tog_loginModals = (item = null) => {
    setSelectedItem(item);
    setModalLoginModals(!modal_loginModals);
    setModalKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  const getPdfFilePath = (fileName) => {
    return `/pdfs/${fileName}`;
  };

  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const displayText = `Showing ${startIndex + 1} to ${endIndex} of ${
    filteredData.length
  } results`;

  return (
    <React.Fragment>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">
                    Product Catalog
                  </h4>
                  <div className="search-box ms-3">
                    <input
                      type="text"
                      className="form-control"
                      id="searchResultList"
                      placeholder="Search"
                      onChange={handleSearchChange}
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                  <div className="pagination-wrapper d-flex align-items-center ms-3">
                    <Pagination
                      aria-label="Page navigation example"
                      style={{ margin: "auto" }}
                    >
                      <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink
                          onClick={(e) => handleClick(e, currentPage - 1)}
                          previous
                          href="#"
                        />
                      </PaginationItem>
                      <PaginationItem
                        disabled={
                          currentPage >=
                          Math.ceil(filteredData.length / pageSize) - 1
                        }
                      >
                        <PaginationLink
                          onClick={(e) => handleClick(e, currentPage + 1)}
                          next
                          href="#"
                        />
                      </PaginationItem>
                    </Pagination>
                  </div>
                </CardHeader>

                <CardBody>
                  <div className="table-responsive table-card">
                    <Table className="table table-striped table-bordered table-centered align-middle table-nowrap mb-0">
                      <thead className="text-muted table-light">
                        <tr>
                          <th scope="col">Part ID</th>
                          <th scope="col">Part Type</th>
                          <th scope="col">Description</th>
                          <th scope="col">Operating Temperature</th>
                          <th scope="col">AMS/ASTM</th>
                          <th scope="col">MIL-Spec</th>
                          <th scope="col">U/L CSA</th>
                          <th scope="col">Spec Sheet</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData
                          .slice(startIndex, endIndex)
                          .map((item, key) => (
                            <tr key={key}>
                              <td>{item.PartID}</td>
                              <td>{item.PartType}</td>
                              <td>{item.Description}</td>
                              <td>{item.OperatingTemp}</td>
                              <td>{item.AMS}</td>
                              <td>
                                {item.MIL}
                                {item.QPL && (
                                  <div style={{ color: "#999999" }}>
                                    (QPL product upon request)
                                  </div>
                                )}
                              </td>
                              <td>{item.UL}</td>
                              <td>
                                <div
                                  className="fw-medium link-primary w-100"
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Button
                                    type="button"
                                    className="btn btn-md btn-light gap-2"
                                    color="primary"
                                    onClick={() =>
                                      window.open(
                                        getPdfFilePath(item.SpecSheet),
                                        "_blank"
                                      )
                                    }
                                  >
                                    More Info{" "}
                                    <i className="ri-arrow-right-line align-middle"></i>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                    <div className="mt-3 mx-3">{displayText}</div>
                  </div>
                  <div className="pagination-wrapper">
                    <Pagination
                      aria-label="Page navigation example"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <PaginationItem disabled={currentPage <= 0}>
                        <PaginationLink
                          onClick={(e) => handleClick(e, currentPage - 1)}
                          previous
                          href="#"
                        >
                          Previous
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem
                        disabled={
                          currentPage >=
                          Math.ceil(filteredData.length / pageSize) - 1
                        }
                      >
                        <PaginationLink
                          onClick={(e) => handleClick(e, currentPage + 1)}
                          next
                          href="#"
                        >
                          Next
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        key={modalKey} // Use the key here to force re-render
        id="loginModals"
        tabIndex="-1"
        isOpen={modal_loginModals}
        toggle={() => tog_loginModals()}
        centered
      >
        <ModalHeader toggle={() => tog_loginModals()}>Spec Sheet</ModalHeader>
        <ModalBody style={{ minHeight: "600px", width: "100%" }}>
          {selectedItem && (
            <>
              <p>Your browser does not support embedded PDFs.</p>
              <a
                href={getPdfFilePath(selectedItem.SpecSheet)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to download/view the spec sheet.
              </a>
            </>
          )}
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default ProductCatalog;
