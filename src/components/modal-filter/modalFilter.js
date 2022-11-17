import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import getAllProduct from '../../redux/action/getAllproductAction';
import styles from './modalFilter.module.css'

const ModalFilter = ({children, filter }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [brand, setBrand] = useState("");
    const [sortby, setSortBy] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleColor = (e) => {
        setColor(e.target.value)
        setSortBy(e.target.id)
    }
    const handleSize = (e) => {
        setSize(e.target.value)
        setSortBy(e.target.id)
    }

    const handleBrand = (e) => {
        setBrand(e.target.value)
        setSortBy(e.target.id)
    }

    const handleFilter = (e) => {
        e.preventDefault();
        if(sortby === "color"){
            dispatch(getAllProduct(color, sortby))
        }else if(sortby === "size"){
            dispatch(getAllProduct(size, sortby))
        }else if(sortby === "brand"){
            dispatch(getAllProduct(brand.toLowerCase(), sortby))
        }
        handleClose()
    }

    const handleDiscard = () => {
        dispatch(getAllProduct("", ""))
        handleClose()
    }
    console.log('color: ', color);
    console.log('brand: ', brand);
    console.log('sort: ', sortby);
    return (
        <>
            <style jsx>{`
            .modal-payment .modal-content{
                height: 558px
            }
        `}</style>
            <button onClick={handleShow} type="button" className={styles["filter-btn"]}>
                <img src={filter} alt="filter icon" />
                {children}
            </button>

            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                className="modal-payment"
            >
                <Modal.Header>
                    <button onClick={handleClose} type="button" className="btn-close m-0" aria-label="Close"></button>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleFilter} >
                    <Modal.Body style={{ padding: "1.5rem" }}>
                        <div class="choose-color">
                            <p>Colors</p>
                            <div class="row m-0">
                                <button type="button" onClick={handleColor} id="color" className="black" value="hitam"></button>
                                <button type="button" onClick={handleColor} id="color" className="white" value="putih"></button>
                                <button type="button" onClick={handleColor} id="color" className="red" value="merah"></button>
                                <button type="button" onClick={handleColor} id="color" className="cream" value="silver pink"></button>
                                <button type="button" onClick={handleColor} id="color" className="yellow-cream" value="gold"></button>
                                <button type="button" onClick={handleColor} id="color" className="blue" value="biru"></button>
                            </div>
                        </div>
                        <hr />
                        <div class="sizes">
                            <p>Sizes</p>
                            <div class="row m-0">
                                <button onClick={handleSize} id="size" type="button" value="xs">XS</button>
                                <button onClick={handleSize} id="size" type="button" value="s">S</button>
                                <button onClick={handleSize} id="size" type="button" value="m">M</button>
                                <button onClick={handleSize} id="size" type="button" value="l">L</button>
                                <button onClick={handleSize} id="size" type="button" value="xl">XL</button>
                            </div>
                        </div>
                        <hr />
                        <div class="brand">
                            <p class="brand-text">Brand</p>
                            <div class="row m-0">
                                <input
                                    type="text"
                                    name='brand'
                                    id="brand"
                                    className="form-control"
                                    placeholder="Uniqlo"
                                    onChange={handleBrand}
                                    style={{
                                        marginTop: "1rem",
                                        marginLeft: "1.5rem",
                                        width: "80%"
                                    }}
                                    // onChange={handleChange} 
                                />
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer
                        style={{
                            justifyContent: "space-between",
                            padding: "1rem 2rem",
                            marginTop: "2rem"
                        }}>
                            <button onClick={handleDiscard} type="button" className={styles["btn-discard"]}>discard</button>
                            <button type="submit" className={styles["btn-apply"]}>apply</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalFilter