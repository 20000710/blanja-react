import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/sidebar.css'
import profilePhoto from '../../assets/img/profile-photo.png'
import home from '../../assets/img/home.png'
import productImg from '../../assets/img/package.png'
import cart from '../../assets/img/shopping-cart.png'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <img src={profilePhoto} alt="profile avatar"/>
                    <Link className="linked" to="#">Ubah profile</Link>
                </li>
                <li>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={home} alt="home" />
                    </div>
                    <Link className="linked" to="#">Store</Link>
                </li>
                <li>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={productImg} alt="package" />
                    </div>
                    <Link className="linked" to="#">Product</Link>
                </li>
                <li>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={cart} alt="cart" />
                    </div>
                    <Link className="linked" to="#">Order</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar