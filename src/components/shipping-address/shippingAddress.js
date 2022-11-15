import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/style/checkout.module.css'
import { Modal } from 'react-bootstrap'

const ShippingAddress = ({ customerDetail }) => {
    console.log('shipping-detail: ', customerDetail);
    const [data, setData] = useState({
        address: customerDetail?.address,
        address2: customerDetail?.address2,
        address_label: customerDetail?.address_label,
        address_label2: customerDetail?.address_label2,
        name_address: customerDetail?.name_address,
        name_address2: customerDetail?.name_address2,
        phone_address: customerDetail?.phone_address,
        phone_address2: customerDetail?.phone_address2,
        postal_code: customerDetail?.postal_code,
        postal_code2: customerDetail?.postal_code2,
        city: customerDetail?.city,
        city2: customerDetail?.city2
    })
  
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false)
    const [changeAddress, setChangeAddress] = useState(false)
    const handleAddNew = () => {
        setActive(true)
        setShow(true);
    }
    const handleChangeAddress = () => {
        setChangeAddress(true)
        handleAddNew()
    }
    const handleCancel = () => {
        setActive(false)
        setChangeAddress(false)
    }
    const handleClose = () => {
        setShow(false)
        setActive(false)
        setChangeAddress(false)
    }

    console.log('data: ', data);
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

            <div className="tab-pane fade show" id="v-pills-address" role="tabpanel"
                aria-labelledby="v-pills-address-tab" data-toggle="button">

                <row className="my-5">
                    <div className="container-fluid">
                        <div className="col-12 justify-content-start ">
                            <h4 className="modal-title fw-bold" id="modalAddressLabel">
                                Choose another address</h4>
                            <h6 className="text-muted my-2" id="modalAddressLabel">
                                Manage your shipping address</h6>
                        </div>
                        <hr />
                        <div className="mx-5 mt-5 mb-4">
                            {customerDetail?.address !== undefined || customerDetail?.address !== "" &&
                            customerDetail?.address2 !== undefined || customerDetail.address2 !== ""
                            ? "" :
                                <div className="col-12 d-flex justify-content-center my-3 ">
                                    <button
                                        type="button"
                                        className={styles["btn-add-new"]}
                                        onClick={handleAddNew}
                                    >
                                        Add new address
                                    </button>
                                </div>
                            }
                            <div className="col-12 justify-content-start mb-4">
                                {active ?
                                    <>
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
                                                    {changeAddress ? "Change address" : "Add new address"}
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
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
                                                    <button onClick={handleCancel} type="button" className={styles["cancel-btn"]}>Cancel</button>
                                                    <button type="submit" className={styles["save-btn"]}>Save</button>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                    </>
                                    :
                                    <>
                                        <div className="list-group my-4">
                                            {customerDetail.address !== undefined || customerDetail.address !== "" ?
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
                                                    <Link onClick={handleChangeAddress} to="#" style={{ color: "#DB3022", fontWeight: "600" }}>
                                                        Change Address
                                                    </Link>
                                                </div>
                                            </div> : ""
                                            }
                                            {customerDetail.address2 !== undefined || customerDetail.address2 !== "" ?
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
                                                    <Link onClick={handleChangeAddress} to="#" style={{ color: "#DB3022", fontWeight: "600" }}>
                                                        Change Address
                                                    </Link>
                                                </div>
                                            </div> : ""
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </row>

                <div className="modal fade" id="modalNewAddress" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalNewAddressLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-end ">
                                            <button type="button" className="btn-close"
                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center my-2">
                                            <h4 className="modal-title fw-bold "
                                                id="modalNewAddressLabel">Add new address</h4>
                                        </div>
                                        <div className="col-12 justify-content-center my-2 ">
                                            <label for="exampleFormControlInput1"
                                                className="fs-6 text-muted form-label">Save address
                                                as (ex : home address, office address)</label>
                                            <input type="email" className="form-control"
                                                id="exampleFormControlInput1" placeholder="Rumah" />
                                        </div>
                                        <div className="col-12 d-flex justify-content-between my-2 ">
                                            <div className="col-6">
                                                <div className="col-11">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Recipient's
                                                        name</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>

                                            </div>
                                            <div className="col-6">
                                                <div className="col-12">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Recipient's
                                                        telephone number</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between  my-2 ">
                                            <div className="col-6">
                                                <div className="col-11">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Address
                                                    </label>
                                                    <input type="email" className="form-control "
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="col-12">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Postal
                                                        code</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between my-2 ">
                                            <div className="col-6">
                                                <div className="col-11">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">City
                                                        or
                                                        Subdistrict</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex my-2">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input"
                                                    id="customControlInline" />
                                                <label className="form-check-label mt-1 mb-1"
                                                    for="customControlInline">Remember my
                                                    preference</label>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end my-2">
                                            <div className="col-6 d-flex justify-content-center">
                                                <button
                                                    className="btn-cancel-address rounded-pill me-1 w-100"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalAddress"
                                                    data-bs-dismiss="modal" type="button">
                                                    Cancel
                                                </button>
                                                <button
                                                    className="btn-save-address rounded-pill ms-1 w-100"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalAddress"
                                                    data-bs-dismiss="modal" type="button">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalChangeAddress" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalChangeAddressLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">

                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-end ">
                                            <button type="button" className="btn-close"
                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center my-2">
                                            <h4 className="modal-title fw-bold "
                                                id="modalChangeAddressLabel">Change address</h4>
                                        </div>
                                        <div className="col-12 justify-content-center my-2 ">
                                            <label for="exampleFormControlInput1"
                                                className="fs-6 text-muted form-label">Save address
                                                as (ex : home address, office address)</label>
                                            <input type="email" className="form-control"
                                                id="exampleFormControlInput1" placeholder="Rumah" />
                                        </div>
                                        <div className="col-12 d-flex justify-content-between my-2 ">
                                            <div className="col-6">
                                                <div className="col-11">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Recipient's
                                                        name</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>

                                            </div>
                                            <div className="col-6">
                                                <div className="col-12">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Recipient's
                                                        telephone number</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between  my-2 ">
                                            <div className="col-6">
                                                <div className="col-11">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Address
                                                    </label>
                                                    <input type="email" className="form-control "
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="col-12">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">Postal
                                                        code</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between my-2 ">
                                            <div className="col-6">
                                                <div className="col-11">
                                                    <label for="exampleFormControlInput1"
                                                        className="fs-6 text-muted form-label">City
                                                        or
                                                        Subdistrict</label>
                                                    <input type="email" className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex my-2">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input"
                                                    id="customControlInline" />
                                                <label className="form-check-label mt-1 mb-1"
                                                    for="customControlInline">Remember my
                                                    preference</label>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end my-2">
                                            <div className="col-6 d-flex justify-content-center">
                                                <button
                                                    className="btn-cancel-address rounded-pill me-1 w-100"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalAddress"
                                                    data-bs-dismiss="modal" type="button">
                                                    Cancel
                                                </button>
                                                <button
                                                    className="btn-save-address rounded-pill ms-1 w-100"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalAddress"
                                                    data-bs-dismiss="modal" type="button">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingAddress