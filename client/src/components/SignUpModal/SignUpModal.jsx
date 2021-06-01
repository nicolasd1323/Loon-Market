import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

function SignUpModal(props) {
  const { modalShow, setModalShow } = props;
  
  return (
    <>
      <Modal
        className="modal-container"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setModalShow(null)}
      >
        <ModalHeader closeButton className="modal-header">
          <ModalTitle>Sign Up</ModalTitle>
        </ModalHeader>
        <ModalBody className="modal-body">
       <h1>TEST!!</h1>
        </ModalBody>
      </Modal>
    </>
  );
}

export default SignUpModal;