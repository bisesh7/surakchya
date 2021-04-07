import React from "react";
import { Button, Col, Input, Row } from "reactstrap";

const SearchBarComponent = () => {
  return (
    <div className="mt-3 d-flex justify-content-center">
      <div className="search-bar">
        <Row className="search-bar-row">
          <Col md="5">
            <Input type="text" placeholder="Location" />
          </Col>
          <Col>
            <Input type="text" placeholder="Check in" />
          </Col>
          <Col>
            <Input type="text" placeholder="Check out" />
          </Col>
          <Col>
            <Input type="text" placeholder="Guests" />
          </Col>
          <Col className="text-center">
            <Button color="primary">Search</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchBarComponent;
