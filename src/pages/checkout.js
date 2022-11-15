import React, { Fragment, useEffect, useState } from 'react'
import styles from '../assets/style/checkout.module.css'
import ModalAddAddress from '../components/modal-add-address/modalAddAddress'
import ModalPayment from '../components/modal-payment/modalPayment'
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import getProductDetail from '../redux/action/getDetailAction'
import TransactionSuccess from '../components/transaction-success/transactionSuccess'
import NavbarLogin from '../components/navbar/navbarLogin'
import { getDetailCustomer } from '../redux/action/customerAction';

const Checkout = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const token = Cookies.get("token");
    const customer_id = Cookies.get("customer_id");
    const id_product = location.state?.id_product;
    const qty = location.state?.quantity;
    const size = location.state?.size;
    console.log('id_product: ', id_product);
    console.log('state: ', location.state);

    const { status } = useSelector(state => state.transaction)
    console.log('status: ', status);
    const { productDetail } = useSelector((state) => state.product)
    const {customerDetail} = useSelector((state) => state.customer)
    console.log('customer-detail: ', customerDetail);
    const deliveryCost = 5000
    let order = qty > 1 ? parseInt(productDetail?.price) * qty : parseInt(productDetail?.price)
    let totalAmount = order + + deliveryCost
    const formatCustom = (val) => {
        const substring = val?.substr(val.length - 3, val.length)
        console.log('substring: ', substring);
        const match = val?.replace(substring, "")
        return `Rp ${match}K`
    }
    useEffect(() => {
        dispatch(getDetailCustomer(customer_id, token))
        dispatch(getProductDetail(id_product, token))
    }, [])
    return (
        <Fragment>
            <NavbarLogin />
            {status === "success" ?
                <>
                    <TransactionSuccess />
                </> :
                <>
                    <div className="container checkout mt-5">
                        <h2>Checkout</h2>
                        <div className="d-flex justify-content-between second-row">
                            <div className={styles["left-card"]}>
                                <p>Shipping Address</p>
                                {customerDetail.address !== undefined || customerDetail.address !== "" ?
                                <div className="card"
                                    style={{
                                        boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
                                        borderRadius: "4px"
                                    }}>
                                    
                                    <div className="card-body" style={{ padding: "1.5rem" }}>
                                        <h5 class="card-title">{customerDetail?.name_address}</h5>
                                        <p className="card-text">
                                            {customerDetail?.address}
                                        </p>
                                        {customerDetail.address2 === undefined || customerDetail?.address2 === "" ?
                                            <ModalAddAddress title="Choose another address" /> : ""
                                        }
                                    </div> 
                                
                                    
                                </div> : ""
                                }   
                                {customerDetail.address2 !== undefined || customerDetail.address2 !== "" ?
                                <div className="card mt-3"
                                    style={{
                                        boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
                                        borderRadius: "4px"
                                    }}>
                                    
                                    <div className="card-body" style={{ padding: "1.5rem" }}>
                                        <h5 class="card-title">{customerDetail?.name_address2}</h5>
                                        <p className="card-text">
                                            {customerDetail?.address2}
                                        </p>
                                    </div>  
                                </div> : ""
                                }   
                            </div>
                            <div className="card col-lg-4 col-4 p-4 mt-4"
                                style={{
                                    boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
                                    borderRadius: "4px"
                                }}>
                                <h5 className="card-title">Shopping summary</h5>
                                <div className="d-flex justify-content-between">
                                    <span className={styles.cost}>order</span>
                                    <span className={styles["total-amount"]}>{formatCustom(order.toString())}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className={styles.cost}>delivery</span>
                                    <span className={styles["total-amount"]}>{formatCustom(deliveryCost.toString())}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">Shopping summary</h5>
                                    <span className={styles["total-amount"]} style={{ color: "#DB3022" }}>{formatCustom(totalAmount.toString())}</span>
                                </div>
                                <ModalPayment
                                    order={order}
                                    delivery={deliveryCost}
                                    total={totalAmount}
                                    handleFormat={formatCustom}
                                    token={token}
                                    quantity={qty}
                                    product_id={productDetail?.id_product}
                                    seller_id={productDetail?.seller_id}
                                    title="Select payment"
                                />
                            </div>
                        </div>
                        <div className={styles["left-card"]}>
                            <div className="card flex-row mt-3" style={{
                                padding: "1.5rem",
                                height: "126px",
                                boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
                                borderRadius: "4px"
                            }}>
                                <img crossOrigin="anonymous" src={"http://localhost:3030/" + productDetail?.photo} alt="item" />
                                <div className={styles["item-section"]}>
                                    <div>
                                        <h5 className={styles["item-name"]}>{productDetail?.name}</h5>
                                        <span>{productDetail?.brand}</span>
                                    </div>
                                    <span>{formatCustom(order.toString())}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </Fragment>
    )
}

export default Checkout