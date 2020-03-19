import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Explanation (nasaData) {

  const {
    buttonLabel,
    className
  } = nasaData;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="explanation">
      <Button color="danger" onClick={toggle}>Click For Details</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
  <ModalHeader toggle={toggle}>{nasaData.title}</ModalHeader>
        <ModalBody>
          {nasaData.expl}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );

}



export default Explanation;