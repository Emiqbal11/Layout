import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "../components/newsCard/NewsCard";
const Overview = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NewsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
