import React from 'react'
import logo from '../../assets/img/logo.png'
import cart from  '../../assets/img/cart.png'
import filter from '../../assets/img/filter.png'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar-menu p-0">
            <div className="row">
                <div className="col p-0 logo-home d-flex align-items-center">
                    <img src={logo} alt="Blanja Logo" />
                    <h2 className="blanja-font">Blanja</h2>
                </div>
                <div className="col p-0 search-input">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
                <div className="col p-0">
                    <button type="button" className="filter-btn" data-toggle="modal" data-target="#filter-popup"><img src={filter} alt="filter icon" /></button>
                </div>
                <div className="col p-0">
                    <button type="button" className="cart-btn"><img src={cart} alt="cart icon" /></button>
                </div>
                <div className="col p-0 d-flex justify-content-center auth">
                    <button className="login-btn" type="submit"><a href="/login">Login</a></button>
                    <button className="signup-btn" type="submit"><a href="/signup"> Signup</a></button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar