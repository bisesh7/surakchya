import React from "react";
import { Container } from "reactstrap";
import frontPicture from "../../Pictures/hotel.jpg";

const FrontPictureComponent = (props) => {
  return (
    <div>
      <Container
        className="d-flex justify-content-center front-picture-container"
        fluid={true}
      >
        <img
          src={frontPicture}
          alt="Front picture | Surakchya"
          className="front-picture"
        />
      </Container>
    </div>
  );
};

export default FrontPictureComponent;
