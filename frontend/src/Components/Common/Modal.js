import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CommonModal = ({ isOpen, toggle, content, heading, footer }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} backdrop="static" keyboard={false}>
      <ModalHeader toggle={toggle}>
        {heading}
      </ModalHeader>
      <ModalBody>{content}</ModalBody>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </Modal>
  );
};

export default CommonModal;
