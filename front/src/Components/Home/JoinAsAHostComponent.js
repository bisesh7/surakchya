import React from "react";
import { Button, Container } from "reactstrap";
import JoinAsAHostImage from "../../Pictures/join.jpg";

const JoinAsAHostComponent = () => {
  return (
    <Container className="join-as-host-image-container mb-5">
      <img
        src={JoinAsAHostImage}
        alt="Join As a host"
        style={{ width: "100%" }}
      />
      <div className="join-as-host-info">
        <h1>
          <strong>Your world is</strong>
        </h1>
        <h1>
          <strong>worth sharing</strong>
        </h1>{" "}
        <strong>
          Turn your extra space into your next <br /> oppurtunity
        </strong>
        <br />
        <Button color="secondary" className="mt-4">
          Join as host
        </Button>
      </div>
    </Container>
  );
};

export default JoinAsAHostComponent;
