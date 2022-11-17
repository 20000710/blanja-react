import Cookies from "js-cookie";
import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import deleteProduct from "../../redux/action/deleteProductAction";
import getAllProduct from "../../redux/action/getAllproductAction";

const ModalDelete = ({ children, id, name }) => {
    const token = Cookies.get("token")
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        window.location.reload();
        dispatch(deleteProduct(id, token))
        handleClose();
    };
    return (
        <Fragment>
            <button
                className="btn btn-danger text-light"
                style={{ marginRight: "10px" }}
                onClick={handleShow}
            >
                {children}
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are sure want to delete product {name}?</Modal.Body>
                <div className="footer-delete">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </div>
            </Modal>
        </Fragment>
    );
};

export default ModalDelete;