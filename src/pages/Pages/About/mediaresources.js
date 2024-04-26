import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import { SPS } from "../Products/data/specialty-data";
import { NST } from "../Products/data/nonshrinktubing-data";
import { HST } from "../Products/data/heatshrinktubing-data";
import Masonry from "react-masonry-component";
import "yet-another-react-lightbox/styles.css";

const MediaResources = () => {
  const combinedData = [...HST, ...NST, ...SPS];

  return (
    <Col xxl={9}>
      <Card>
        <CardBody>
          <Row>
            <Col md={12}>
              <Masonry className="row gallery-wrapper">
                {combinedData.map((item, key) => (
                  <Col
                    sm={3}
                    className="element-item project designing development"
                    key={key}
                  >
                    <Card className="gallery-box">
                      <div className="gallery-container">
                        <Link
                          className="image-popup"
                          to="#"
                          title={item.title}
                          onClick={() => {
                            item.link;
                          }}
                        >
                          <img
                            className="gallery-img img-fluid mx-auto"
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="gallery-overlay d-flex">
                            <h5 className="overlay-caption">{item.title}</h5>
                          </div>
                        </Link>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Masonry>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MediaResources;
