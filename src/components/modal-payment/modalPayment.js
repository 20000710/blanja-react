import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from '../../assets/style/checkout.module.css'
import logoGopay from '../../assets/img/logo-gopay.png'
import logoPos from '../../assets/img/logo-pos.png'
import logoMastercard from '../../assets/img/logo-mastercard.png'
import { useDispatch, useSelector } from 'react-redux';
import createTransactions from '../../redux/action/transactionActions';
import Cookies from "js-cookie";

const ModalPayment = ({
    children,
    order,
    delivery,
    total,
    handleFormat,
    token,
    quantity,
    product_id,
    seller_id,
    title
}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const customer_id = Cookies.get("customer_id")
    console.log('customer_id: ',customer_id);
    const [form, setForm] = useState({
        product_id,
        quantity,
        payment_type: "",
        shipped_date: "19-10-2022",
        customer_id,
        seller_id
    })
    const [active, setActive] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChecklist = (val) => {
        setForm({ ...form, payment_type: val })
    }

    const handleCount = (val) => {
        if (count === 0) {
            setCount(1)
            setActive(val)
        } else {
            setCount(0)
            setActive("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTransactions(form, total, token))
        handleClose()
        setCount(0)
    }
    console.log(count);
    console.log('active: ', active);
    console.log('payment_type: ', form.payment_type);
    console.log('form: ', form);
    return (
        <>
            <style jsx>{`
            .modal-payment .modal-content{
                height: 675px
            }
        `}</style>
            <button onClick={handleShow} type="button" className={styles["btn-choose-payment"]}>
                {children}
                {title}
            </button>

            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                className="modal-payment"
            >
                <Modal.Header>
                    <button onClick={handleClose} type="button" className="btn-close m-0" aria-label="Close"></button>
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body style={{ padding: "1.5rem" }}>
                        <h5>Payment method</h5>
                        <div className="main-paymenr">
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className={styles["payment-type"]}>
                                    <img width={82} height={18} src={logoGopay} alt="icon gopay" />
                                    <span className={styles["payment-type-title"]}>Gopay</span>
                                </div>
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value="gopay"
                                    disabled={count > 0 && active !== "gopay" ? true : false}
                                    onClick={() => handleCount("gopay")}
                                    onChange={() => handleChecklist("gopay")}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        border: "1px solid #9B9B9B"
                                    }}
                                    aria-label="Checkbox for following text input">
                                </input>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className={styles["payment-type"]}>
                                    <img width={58} height={38} src={logoPos} alt="icon pos" />
                                    <span className={styles["payment-type-title"]}>Pos</span>
                                </div>
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value="pos"
                                    onClick={() => handleCount("pos")}
                                    onChange={() => handleChecklist("pos")}
                                    disabled={count > 0 && active !== "pos" ? true : false}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        border: "1px solid #9B9B9B"
                                    }}
                                    aria-label="Checkbox for following text input"></input>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className={styles["payment-type"]}>
                                    <img width={53} height={41} src={logoMastercard} alt="icon master card" />
                                    <span className={styles["payment-type-title"]}>Mastercard</span>
                                </div>
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    value="mastercard"
                                    disabled={count > 0 && active !== "mastercard" ? true : false}
                                    onClick={() => handleCount("mastercard")}
                                    onChange={() => handleChecklist("mastercard")}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        border: "1px solid #9B9B9B"
                                    }}
                                    aria-label="Checkbox for following text input"></input>
                            </div>
                            <hr style={{ border: "1px solid #9B9B9B", margin: "2rem -24px" }} />
                            <h5 className="card-title">Shopping summary</h5>
                            <div className="d-flex justify-content-between mt-3">
                                <span className={styles.cost}>order</span>
                                <span className={styles["total-amount"]}>{handleFormat(order?.toString())}</span>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span className={styles.cost}>delivery</span>
                                <span className={styles["total-amount"]}>{handleFormat(delivery?.toString())}</span>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer
                        style={{
                            justifyContent: "space-between",
                            padding: "1rem",
                            marginTop: "6rem"
                        }}>
                        <div className="summary">
                            <h5 className={styles["summary-title"]}>Shopping summary</h5>
                            <span className={styles["total-amount"]} style={{ color: "#DB3022" }}>{handleFormat(total?.toString())}</span>
                        </div>
                        <button className={styles["btn-buy"]} type="submit"> buy</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalPayment