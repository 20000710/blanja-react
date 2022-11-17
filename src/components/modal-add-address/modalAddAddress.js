import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import styles from '../../assets/style/checkout.module.css'

const ModalAddAddress = ({ children, title, customerDetail }) => {
    console.log('customerDetail: ', customerDetail);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleActive = () => setActive(true);
    const handleCandel = () => setActive(false);
    console.log(active);
    return (
        <>
            <style jsx>{`
                .main-modal .modal-content{
                    width: 810px;
                    height: 675px;
                }
                .main-modal .modal-header{
                    border: 0;
                }

                .main-modal .modal-body{
                    padding: 2.5rem;
                }
            `}</style>

            <button onClick={handleShow} type="button" className={styles["btn-add-address"]}>
                {children}
                {title}
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="main-modal"
                centered={true}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        className={styles["add-address-title"]}
                    >
                        {active ? "Add new address" : "Choose another address"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {active ?
                        <>
                            <div className="save-address">
                                <label htmlFor="save-address" className="form-label wb">
                                    Save address as (ex : home address, office address)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="save-address"
                                    required
                                    placeholder="Rumah"
                                    name="save address"
                                    style={{ border: "1px solid #9B9B9B", height: "48px" }}
                                // onChange={handleChange}
                                />
                            </div>
                            <div className="d-flex">
                                <div className="recipient-name mt-3">
                                    <label htmlFor="recipient-name" className="form-label wb">
                                        Recipient's name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        id="recipient-name"
                                        style={{
                                            width: "345px",
                                            marginRight: "2rem",
                                            border: "1px solid #9B9B9B",
                                            height: "48px"
                                        }}
                                        name="recipient-name"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="recipient-name mt-3">
                                    <label htmlFor="recipient-name" className="form-label wb">
                                        Recipient's telephone number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        id="recipient-name"
                                        style={{
                                            width: "345px",
                                            border: "1px solid #9B9B9B",
                                            height: "48px"
                                        }}
                                        name="recipient-name"
                                    // onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="address mt-3">
                                    <label htmlFor="address" className="form-label wb">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        id="address"
                                        style={{
                                            width: "345px",
                                            marginRight: "2rem",
                                            border: "1px solid #9B9B9B",
                                            height: "48px"
                                        }}
                                        name="address"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="postal_code mt-3">
                                    <label htmlFor="postal_code" className="form-label wb">
                                        Postal code
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        id="postal_code"
                                        style={{
                                            width: "345px",
                                            border: "1px solid #9B9B9B",
                                            height: "48px"
                                        }}
                                        name="postal_code"
                                    // onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="city mt-3">
                                <label htmlFor="city" className="form-label wb">
                                    City or Subdistrict
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    id="city"
                                    style={{
                                        width: "345px",
                                        border: "1px solid #9B9B9B",
                                        height: "48px"
                                    }}
                                    name="city"
                                // onChange={handleChange}
                                />
                            </div>
                            <div className={styles["select-primary"]}>
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "0.7rem",
                                        border: "1px solid #9B9B9B"
                                    }}
                                    aria-label="Checkbox for following text input">
                                </input>
                                <label className="checkbox-title">
                                    Make it the primary address
                                </label>
                            </div>
                            <div className={styles["btn-footer"]}>
                                <button onClick={handleCandel} type="button" className={styles["cancel-btn"]}>Cancel</button>
                                <button type="submit" className={styles["save-btn"]}>Save</button>
                            </div>
                        </> :
                        <>  
                            <button
                                type="button"
                                className={styles["btn-add-new"]}
                                onClick={handleActive}
                                disabled={customerDetail.address2 === null || customerDetail.address2 === "" || customerDetail.address2 === undefined ? false : true}
                            >
                                Add new address
                            </button>
                            
                            {customerDetail.address === null || customerDetail.address === "" || customerDetail.address === undefined ? "" :
                                <div className="card"
                                    style={{
                                        border: "1px solid #DB3022",
                                        borderRadius: "4px",
                                        height: "170px",
                                        marginTop: "2rem"
                                    }}>
                                    <div className="card-body" style={{ padding: "1.5rem" }}>
                                        <h5 class="card-title">{customerDetail?.name_address}</h5>
                                        <p className="card-text mx-0 my-3" style={{ lineHeight: "24px" }}>
                                            {customerDetail?.address}
                                        </p>
                                        <Link to="#" style={{ color: "#DB3022", fontWeight: "600" }}>
                                            Change Address
                                        </Link>
                                    </div>
                                </div>
                            }
                            {customerDetail.address2 === null || customerDetail.address2 === "" || customerDetail.address2 === undefined ? "" :
                                <div className="card"
                                    style={{
                                        border: "1px solid #DB3022",
                                        borderRadius: "4px",
                                        height: "170px",
                                        marginTop: "2rem"
                                    }}>
                                    <div className="card-body" style={{ padding: "1.5rem" }}>
                                        <h5 class="card-title">{customerDetail?.name_address2}</h5>
                                        <p className="card-text mx-0 my-3" style={{ lineHeight: "24px" }}>
                                            {customerDetail?.address2}
                                        </p>
                                        <Link to="#" style={{ color: "#DB3022", fontWeight: "600" }}>
                                            Change Address
                                        </Link>
                                    </div>
                                </div>
                            }
                            
                        </>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalAddAddress