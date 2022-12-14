import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import "../../assets/style/modal.css";
import createProduct from "../../redux/action/createProductAction";
import Cookies from 'js-cookie';

const ModalCreate = ({children}) => {
  const token = Cookies.get("token")
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(null);

  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    console.log('uploader: ', uploader)
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name:"",
    brand:"",
    category_id: "a67694eb-b306-4c4e-bfd6-69f5a04af328",
    size: "",
    color: "",
    price:"",
    photo:"",
    description:"",
    quantity: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(data,saveImage,token))
    handleClose()
  };

  console.log('data: ', data);
  return (
    <Fragment>
      <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="brand"
              name="brand"
              value={data.brand}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="size"
              name="size"
              value={data.size}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="color"
              name="color"
              value={data.color}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              placeholder="photo"
              name="photo"
              onChange={(e) => handleUpload(e)}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="quantity"
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
            />
        </Modal.Body>
        <div className="footer">
            <Button variant="danger" onClick={handleClose}>Close</Button>
            <Button variant="success " type="submit" id="button-addon2">Create</Button>
        </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalCreate;