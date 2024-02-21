{/* <Card>
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
                  {filteredData.slice(startIndex, endIndex).map((item, key) => (
                    <tr key={key}>
                      <td>
                        <Link to="#!" className="fw-medium link-primary">
                          {item.PartID}
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
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
        </Modal> */}