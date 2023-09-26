import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "../components/newsCard/NewsCard";
import NewModal from "../components/modal/NewModal";
import useToggle from "../hooks/useToggle";
const Overview = () => {
  // for modal use customhook
  const { isOpen, openModal, closeModal } = useToggle();
  return (
    <Container fluid>
      <Row>
        <Col>
          <NewsCard openModal={openModal} />
        </Col>
      </Row>
      {/* Modal addded here */}
      <NewModal
        isModalOpen={isOpen}
        isModalClose={closeModal}
        title="Add to Folder"
      >
        <div>
          <span>Nur Sanga e!</span>
        </div>
      </NewModal>
    </Container>
  );
};

export default Overview;
