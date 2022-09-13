import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import updateProduct from "../../redux/action/updateProductAction";

const ModalUpdate = ({
  children,
  id,
  name,
  brand,
  size,
  color,
  price,
  photo,
  description,
}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(photo);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name,
    brand,
    size,
    color,
    price,
    photo,
    description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(data,id,saveImage,setShow))
  };

  return (
    <Fragment>
      <button
        className="btn btn-secondary text-light"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        {children}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
        <input
              className="form-control mt-3"
              type="text"
              id={id}
              placeholder="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              id={id}
              placeholder="brand"
              name="brand"
              value={data.brand}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              id={id}
              placeholder="size"
              name="size"
              value={data.size}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              id={id}
              placeholder="color"
              name="color"
              value={data.color}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              id={id}
              placeholder="price"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="file"
              id={id}
              placeholder="photo"
              name="photo"
              onChange={handleUpload}
            />
            <input
              className="form-control mt-3"
              type="text"
              id={id}
              placeholder="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
        </Modal.Body>
        <div className="footer">
            <Button variant="danger" onClick={handleClose}>Close</Button>
            <Button variant="success " type="submit" id="button-addon2">Update</Button>
        </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalUpdate;