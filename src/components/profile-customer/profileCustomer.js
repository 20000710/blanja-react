import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import profilePhoto from '../../assets/img/profile-photo.png'
import { getDetailCustomer, updateCustomer, uploadImage } from '../../redux/action/customerAction';
import styles from './profileCustomer.module.css';
import Cookies from 'js-cookie'
import ShippingAddress from '../shipping-address/shippingAddress';
import MyOrder from '../my-order/myOrder';

const ProfileCustomer = ({ name, email, phone, gender, date_of_birth, photo }) => {
    console.log('photo: ', photo);
    const token = Cookies.get("token")
    const customer_id = Cookies.get("customer_id")
    const [active, setActive] = useState(false);
    const dispatch = useDispatch()
    const [previewImage, setPreviewImage] = useState()
    const [image, setImage] = useState(photo);
    const {customerDetail} = useSelector(state => state.customer)

    const [data, setData] = useState({
        name: name !== undefined || name !== null ? name : customerDetail.name,
        email: email !== undefined || email !== null ? email : customerDetail.email ,
        phone: phone !== undefined || phone !== null ? phone : customerDetail.phone,
        gender: gender !== undefined || gender !== null ? gender?.toLowerCase() : customerDetail.gender?.toLowerCase(),
        date_of_birth: date_of_birth !== undefined || date_of_birth !== null ? date_of_birth : customerDetail.date_of_birth
    })
    
    const handleImageUpload = (e) => {
        setActive(true)
        const file = e.target.files[0];
        setImage(file)
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
        console.log('file: ', file)
    };

    const handleCancelEditPhoto = () => {
        setActive(false)
        setPreviewImage()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(uploadImage(image, token, customer_id))
        setActive(false)
    }

    const handleRadioButton = (e) => {
        setData({
            ...data,
            gender: e.currentTarget.value
        })
    }

    const handleSubmitProfile = (e) => {
        e.preventDefault();
        dispatch(updateCustomer(data, token, customer_id))
        dispatch(getDetailCustomer(token, customer_id))
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    console.log('data: ', data);
    useEffect(() => {
        dispatch(getDetailCustomer(token, customer_id))
    }, [])

    console.log('customerDetail: ', customerDetail);
    return (
        <div className="container container-profile-customer">
            <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid">
                <div
                    className="col-xl-3 col-lg-3 col-md-12 col-sm-12 d-xl-grid d-lg-grid d-md-flex d-sm-flex my-xl-5 my-lg-5 mt-md-5 mt-sm-5">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 d-flex my-auto mx-auto">
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center align-items-center">
                            <img
                                crossOrigin="anonymous"
                                width={60}
                                height={60}
                                className="photo-profile-side"
                                src={previewImage === undefined || previewImage === "" ?
                                    (photo === undefined || photo === "" ?
                                        profilePhoto : photo) : previewImage
                                    }
                                alt="profile" />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 my-auto">
                            <p className="my-auto fw-bold">{name}</p>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 my-xl-5 my-lg-5 mb-md-5 mb-sm-5 ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 ">
                                    <div className="nav nav-pills d-grid" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <a className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile" type="button" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="true">
                                            {/* <img width={16} height={16} className="me-1" src={userIcon} alt="home icon" /> */}
                                            <span>My account</span>
                                        </a>
                                        <a className="nav-link" id="v-pills-address-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-address" type="button" role="tab"
                                            aria-controls="v-pills-address" aria-selected="true">
                                            <img className="me-1" src="./assets/images/icons/shipping.svg" alt="" />
                                            <span>Shipping Address</span>
                                        </a>
                                        <a className="nav-link" id="v-pills-order-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-order" type="button" role="tab"
                                            aria-controls="v-pills-order" aria-selected="true">
                                            <img className="me-1" src="./assets/images/icons/order.svg" alt="" />
                                            <span>My Order</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12  bg-light">
                    <div className="container">
                        <div className="col-12 w-auto bg-white mx-3 my-5 py-3 px-3">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab" data-toggle="button">
                                    <row className="">
                                        <div className="container-fluid">
                                            <div className="col-12 justify-content-start">
                                                <h4 className="modal-title fw-bold " id="modalProfileLabel">
                                                    My Profile</h4>
                                                <h6 className="text-muted my-2" id="modalProfileLabel">
                                                    Manage your profile information</h6>
                                            </div>
                                            <hr />
                                            <div
                                                className="col-12 d-xl-flex d-lg-flex flex-xl-row-reverse flex-lg-row-reverse d-md-grid d-sm-grid justify-content-start my-3">
                                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                    <div className="col-12 d-flex justify-content-center my-3">
                                                        <img
                                                            crossOrigin="anonymous"
                                                            className="photo-profile"
                                                            width={96}
                                                            height={96}
                                                            src={previewImage === undefined || previewImage === "" ?
                                                                (photo === undefined || photo === "" ?
                                                                    profilePhoto
                                                                    :
                                                                    photo) : previewImage
                                                            }
                                                            alt="profile" />
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-center">
                                                        <form onSubmit={handleSubmit}>
                                                            {active ?
                                                                <>
                                                                    <div className="d-flex mt-3">
                                                                        <button className={styles["btn-cancel"]} onClick={handleCancelEditPhoto} type="submit">Cancel</button>
                                                                        <button className={styles["btn-save"]} type="submit">Save</button>
                                                                    </div>
                                                                </> :
                                                                <div className="upload-photo">
                                                                    <label className={styles["btn-label"]} htmlFor={"upload-photo"}>
                                                                        Select Photo
                                                                    </label>
                                                                    <input
                                                                        name="image"
                                                                        type="file"
                                                                        id="upload-photo"
                                                                        className={styles["btn-upload"]}
                                                                        accept=".jpeg, .jpg, .png"
                                                                        onChange={(e) => handleImageUpload(e)}
                                                                    />
                                                                </div>
                                                            }
                                                        </form>
                                                    </div>
                                                </div>
                                                <form onSubmit={handleSubmitProfile} className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                                    <div className="col-12 d-flex justify-content-start my-3">
                                                        <div className="col-5 d-flex justify-content-end ">
                                                            <label for="exampleFormControlInput1"
                                                                className="fs-6 text-muted form-label my-auto mx-5">Name</label>
                                                        </div>
                                                        <input
                                                            type="name"
                                                            name="name"
                                                            onChange={handleChange}
                                                            value={data.name}
                                                            className="form-control"
                                                            id="exampleFormControlInput1"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-start my-3">
                                                        <div className="col-5 d-flex justify-content-end ">
                                                            <label for="exampleFormControlInput1"
                                                                className="fs-6 text-muted form-label my-auto mx-5">Email</label>
                                                        </div>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            onChange={handleChange}
                                                            value={data.email}
                                                            className="form-control"
                                                            id="exampleFormControlInput1"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-start my-3">
                                                        <div className="col-5 d-flex justify-content-end ">
                                                            <label
                                                                for="exampleFormControlInput1"
                                                                className="fs-6 text-muted form-label my-auto mx-5">
                                                                Phone Number
                                                            </label>
                                                        </div>
                                                        <input
                                                            type="phone"
                                                            name="phone"
                                                            onChange={handleChange}
                                                            value={data.phone}
                                                            className="form-control"
                                                            id="exampleFormControlInput1"
                                                            placeholder=""
                                                        />
                                                    </div>

                                                    <div className="col-12 d-flex justify-content-start my-3">
                                                        <div className="col-5 d-flex justify-content-end ">
                                                            <label
                                                                for="exampleFormControlInput1"
                                                                className="fs-6 text-muted form-label my-auto mx-5"
                                                            >
                                                                Gender
                                                            </label>
                                                        </div>
                                                        <div className="col-6 d-flex justify-content-between">
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="inlineRadioOptions"
                                                                    id="male"
                                                                    checked={data.gender === "male"}
                                                                    value={data.gender !== "male" ? "male" : data.gender}
                                                                    onChange={handleRadioButton}
                                                                />
                                                                <label className="form-check-label my-auto"
                                                                    for="male">Laki - laki</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="inlineRadioOptions"
                                                                    id="female"
                                                                    checked={data.gender === "female"}
                                                                    value={data.gender !== "female" ? "female" : data.gender}
                                                                    onChange={handleRadioButton}
                                                                />
                                                                <label className="form-check-label my-auto"
                                                                    for="female">Perempuan</label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-12 d-flex justify-content-start my-3">
                                                        <div className="col-5 d-flex justify-content-end ">
                                                            <label
                                                                for="exampleFormControlInput1"
                                                                className="fs-6 text-muted form-label my-auto mx-5">
                                                                Date of Birth
                                                            </label>
                                                        </div>
                                                        <input
                                                            value={data.date_of_birth}
                                                            name="date_of_birth"
                                                            type="date_of_birth"
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            id="exampleFormControlInput1"
                                                            placeholder="dd-mm-yyyy" />
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-center my-4">
                                                        <button
                                                            type="submit"
                                                            className={styles["btn-save-profile"]}
                                                        > Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </row>
                                </div>
                                <ShippingAddress customerDetail={customerDetail} />
                                <MyOrder />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCustomer