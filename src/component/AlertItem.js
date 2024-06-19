import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AlertItem(props) {
  const closeAlert = (e) => {
    e.preventDefault();
    props.setModal(!props.isOpen);
  };

  return (
    <div>
      <Modal isOpen={props.isOpen}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>{props.content}</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={(e) => {
              closeAlert(e);
            }}
          >
            {props.btnText}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AlertItem;
