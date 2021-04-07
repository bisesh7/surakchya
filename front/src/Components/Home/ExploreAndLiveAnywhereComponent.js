import React, { Fragment } from "react";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import kathmandu from "../../Pictures/kathmandu.jpeg";
import lalitpur from "../../Pictures/lalitpur.jpeg";
import pokhara from "../../Pictures/pokhara.jpeg";
import bhaktapur from "../../Pictures/bhaktapur.jpeg";
import entireHouse from "../../Pictures/entire-house.jpeg";
import homestay from "../../Pictures/homestay.jpeg";
import petsAllowed from "../../Pictures/pets-allowed.jpeg";

const ExploreAndLiveAnywhereComponent = () => {
  const getExploreCard = (city) => {
    let cardImg = null;

    switch (city) {
      case "kathmandu":
        cardImg = (
          <CardImg
            src={kathmandu}
            className="explore-card-image"
            alt="Kathmandu"
            width="100%"
          />
        );
        break;
      case "lalitpur":
        cardImg = (
          <CardImg
            src={lalitpur}
            className="explore-card-image"
            alt="Lalitpur"
            width="100%"
          />
        );
        break;
      case "pokhara":
        cardImg = (
          <CardImg
            src={pokhara}
            className="explore-card-image"
            alt="Pokhara"
            width="100%"
          />
        );
        break;
      case "bhaktapur":
        cardImg = (
          <CardImg
            src={bhaktapur}
            className="explore-card-image"
            alt="Bhaktapur"
            width="100%"
          />
        );
        break;
      default:
        break;
    }

    return (
      <Fragment>
        <Card>
          <CardBody>
            {cardImg}
            <CardTitle tag="h5">
              {city.charAt(0).toUpperCase() + city.substring(1, city.length)}
            </CardTitle>
          </CardBody>
        </Card>
      </Fragment>
    );
  };

  const getLiveAnywhereCard = (item) => {
    let cardImg = null;

    switch (item) {
      case "entireHouse":
        cardImg = (
          <CardImg
            src={entireHouse}
            className="live-anywhere-image"
            alt="Entire House"
            width="100%"
          />
        );
        break;
      case "homestay":
        cardImg = (
          <CardImg
            src={homestay}
            className="live-anywhere-image"
            alt="Homestay"
            width="100%"
          />
        );
        break;
      case "petsAllowed":
        cardImg = (
          <CardImg
            src={petsAllowed}
            className="live-anywhere-image"
            alt="Pets Allowed"
            width="100%"
          />
        );
        break;
      default:
        break;
    }

    return (
      <Fragment>
        <Card>
          <CardBody>
            {cardImg}
            <CardTitle tag="h5">
              {item.charAt(0).toUpperCase() + item.substring(1, item.length)}
            </CardTitle>
          </CardBody>
        </Card>
      </Fragment>
    );
  };

  return (
    <div>
      <Container className="mt-4">
        <h2>
          <strong>Explore</strong>
        </h2>
        <div className="explore-cities">
          <Row>
            <Col md="3">{getExploreCard("kathmandu")}</Col>
            <Col md="3">{getExploreCard("lalitpur")}</Col>
            <Col md="3">{getExploreCard("pokhara")}</Col>
            <Col md="3">{getExploreCard("bhaktapur")}</Col>
          </Row>
        </div>

        <h2>
          <strong>Live Anywhere</strong>
          <div className="live-anywhere">
            <Row>
              <Col md="4">{getLiveAnywhereCard("entireHouse")}</Col>
              <Col md="4">{getLiveAnywhereCard("homestay")}</Col>
              <Col md="4">{getLiveAnywhereCard("petsAllowed")}</Col>
            </Row>
          </div>
        </h2>
      </Container>
    </div>
  );
};

export default ExploreAndLiveAnywhereComponent;
