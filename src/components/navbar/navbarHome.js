import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import cart from '../../assets/img/cart.png'
import bell from '../../assets/img/bell.png'
import mail from '../../assets/img/mail.png'
import filter from '../../assets/img/filter.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navbar.module.css'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import getAllProduct from '../../redux/action/getAllproductAction';
import profilePhoto from '../../assets/img/profile-photo.png'
import Dropdown from 'react-bootstrap/Dropdown';
import ModalFilter from '../modal-filter/modalFilter'

const NavbarHome = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = Cookies.get("token")
    console.log(token);
    const customer_id = Cookies.get("customer_id");
    const [query, setQuery] = useState("")
    const [sort, setSort] = useState("name")
    //   const [sortby, setSortBy] = useState("")

    const handleKeyword = (e) => {
        setQuery(e.target.value)
    }

    const handleSearch = () => {
        const search = query.toLowerCase()
        dispatch(getAllProduct(search, sort, token))
    }

    props.getQuery(handleSearch);

    const handleLogout = () => {
        Cookies.remove("token", { path: "/" })
        Cookies.remove("customer_id", { path: "/" })
        Cookies.remove("seller_id", {path: "/"})
        Cookies.remove("role", { path: "/" })
        navigate("/")
    }

    return (
        <div>
            <Navbar className="navbar-home" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">
                        <div className="col p-0 logo-home d-flex align-items-center">
                            <img src={logo} alt="Blanja Logo" />
                            <h2 className="blanja-font">Blanja</h2>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" id={styles["item-menu"]}>
                            <div className="col p-0 search-input d-flex">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        onChange={handleKeyword}
                                        className="form-control"
                                        placeholder="Search"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                </div>
                                <button
                                    onClick={handleSearch}
                                    style={{
                                        border: "none",
                                        borderRadius: " 0px 23px 23px 0px",
                                        backgroundColor: "#DB3022",
                                        margin: "1.9rem 1.5rem 1.9rem 0",
                                        width: "50px",
                                        height: "39px",
                                    }}
                                    type="button">
                                    <FontAwesomeIcon icon={faSearch} color="#fff" />
                                </button>
                            </div>
                            <div className="col p-0">
                                <ModalFilter filter={filter}/>
                            </div>
                            {token === undefined || token == null ?
                                <div className="col p-0 d-flex justify-content-center auth">
                                    <Link to="/login"><button className="login-btn" type="submit">Login</button></Link>
                                    <Link to="/signup"><button className="signup-btn" type="submit">Signup</button></Link>
                                </div> :
                                <ul
                                    className="navbar-nav me-auto mb-2 mb-lg-0 navbar-menu"
                                    style={{
                                        margin: "2.5rem 0"
                                    }}
                                >
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
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHome