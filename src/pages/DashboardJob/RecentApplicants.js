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
} from "reactstrap";
import { partData } from "../../common/data/IPC";

const RecentApplicants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(partData);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 25; // Items per page
  const [selectedItem, setSelectedItem] = useState(null); // New state for selected item

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = partData.filter(
      (item) =>
        (item.PartID && item.PartID.toLowerCase().includes(lowercasedQuery)) ||
        (item.PartType &&
          item.PartType.toLowerCase().includes(lowercasedQuery)) ||
        (item.Supplier &&
          item.Supplier.toLowerCase().includes(lowercasedQuery)) ||
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

  const [modal_standard, setmodal_standard] = useState(false);

  const tog_standard = (item = null) => {
    setSelectedItem(item); // Set the selected item when opening the modal, or null when closing
    setmodal_standard(!modal_standard);
  };

  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const displayText = `Showing ${startIndex + 1} to ${endIndex} of ${
    filteredData.length
  } results`;

  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader className="align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">Product Catalog</h4>
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
                    currentPage >= Math.ceil(filteredData.length / pageSize) - 1
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
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Spec Sheet</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.slice(startIndex, endIndex).map((item, key) => (
                    <tr key={key}>
                      <td>
                        <Link to="#!" className="fw-medium link-primary">
                          {item.PartID}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          {/* Optional: If you plan to reintroduce the image, you can conditionally render it like this
                          {item.SupplierImage && (
                            <div className="flex-shrink-0 me-2">
                              <img
                                src={item.SupplierImage}
                                alt=""
                                className="avatar-sm rounded-circle"
                              />
                            </div>
                          )}
                          */}
                          {item.Supplier && (
                            <Button
                              color={item.TypeColor}
                              className="btn-border"
                              outline
                            >
                              {item.Supplier}
                            </Button>
                          )}
                        </div>
                      </td>

                      <td>
                        <Link
                          to="#!"
                          className="fw-medium link-primary w-100 d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <button className="btn btn-sm btn-light w-50">
                            <i className="ri-external-link-fill align-middle fs-4"></i>
                          </button>
                        </Link>
                      </td>
                      <td>
                        {item.Description.length > 30
                          ? `${item.Description.substring(0, 30)}...`
                          : item.Description}
                      </td>
                      <td>
                        <Link
                          to="#!"
                          className="fw-medium link-primary w-100"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            type="button"
                            className="btn btn-md btn-light gap-2"
                            onClick={() => tog_standard(item)}
                          >
                            More Info{" "}
                            <i className="ri-arrow-right-line align-middle"></i>
                          </Button>
                        </Link>
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
                    currentPage >= Math.ceil(filteredData.length / pageSize) - 1
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
        <Modal
          id="myModal"
          isOpen={modal_standard}
          toggle={() => {
            tog_standard();
          }}
        >
          <ModalHeader toggle={() => tog_standard()}>
            {selectedItem?.PartID}
          </ModalHeader>
          <ModalBody>
            <p>{selectedItem?.Description}</p>
          </ModalBody>
          <div className="modal-footer">
            <Button
              color="primary"
              onClick={() => {
                tog_standard();
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      </Col>
    </React.Fragment>
  );
};

export default RecentApplicants;
