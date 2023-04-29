import { Button, Modal } from "react-bootstrap";

const ConfirmDeleteModal = ({show, onHide, deletePost, setShowingDeletePostModal, onClick}) => {
    return(
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered scrollable onClick={onClick}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   delete post
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this post?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => deletePost()}>Eliminate</Button>
                <Button variant="primary" onClick={() => setShowingDeletePostModal(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmDeleteModal;