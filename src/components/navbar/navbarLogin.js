import React from 'react'
import logo from '../../assets/img/logo.png'
import cart from '../../assets/img/cart.png'
import bell from '../../assets/img/bell.png'
import mail from '../../assets/img/mail.png'
import profilePhoto from '../../assets/img/profile-photo.png'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Cookies from 'js-cookie';

const NavbarLogin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("token", {path: "/"})
        Cookies.remove("customer_id", {path: "/"})
        Cookies.remove("seller_id", {path: "/"})
        Cookies.remove("role", {path: "/"})
        navigate("/")
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-login">
            <div className="container">
                <Link to="/">
                    <div className="col p-0 logo-home d-flex align-items-center">
                        <img src={logo} alt="Blanja Logo" />
                        <h2 className="blanja-font">Blanja</h2>
                    </div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-menu">
                        <li className="nav-item profile-menu">
                            <Link className="menu-icon" style={{ marginRight: "2.5rem" }} to="#">
                                <img src={bell} alt="bell icon" width={24} height={24} />
                            </Link>
                        </li>
                        <li className="nav-item profile-menu">
                            <Link className="menu-icon" style={{ marginRight: "2.5rem" }} to="#">
                                <img src={mail} alt="mail icon" width={24} height={24} />
                            </Link>
                        </li>
                        <li className="nav-item profile-menu">
                            <Dropdown>
                                <Dropdown.Toggle
                                    style={{
                                        backgroundColor:
                                            "#fff",
                                        padding: "0",
                                        border: "none"
                                    }} id="dropdown-basic">
                                    <button
                                        className="menu-icon"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        style={{
                                            margin: "0", 
                                            backgroundColor: "#fff", 
                                            border: "none",
                                            padding: "0"
                                        }}
                                    >
                                        <img
                                            src={profilePhoto}
                                            alt="profile icon"
                                            width={32}
                                            height={32}
                                        />
                                    </button>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                        <Link to={"/profile"}>
                                            <button className="btn btn-primary mb-3" style={{ marginLeft: "1rem" }} >Lihat Profile</button>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                            <button className="btn btn-danger" type="button" onClick={handleLogout} style={{ marginLeft: "1rem" }} >Log Out</button>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarLogin