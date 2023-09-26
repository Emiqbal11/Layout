import React, { useState } from "react";
import { Modal } from "react-bootstrap";
const NewModal = ({ children, isModalOpen, isModalClose, size, title }) => {
  return (
    <Modal show={isModalOpen} onHide={isModalClose} centered size={size}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">{title && title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default NewModal;
