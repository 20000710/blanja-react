import React from 'react'
import logo from '../../assets/img/logo.png'
import cart from  '../../assets/img/cart.png'
import filter from '../../assets/img/filter.png'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar-menu p-0">
            <div class="row">
                <div class="col p-0 logo-home d-flex align-items-center">
                    <img src={logo} alt="Blanja Logo" />
                    <h2 class="blanja-font">Blanja</h2>
                </div>
                <div class="col p-0 search-input">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                </div>
                <div class="col p-0">
                    <button type="button" class="filter-btn" data-toggle="modal" data-target="#filter-popup"><img src={filter} alt="filter icon" /></button>
                </div>
                <div class="col p-0">
                    <button type="button" class="cart-btn"><img src={cart} alt="cart icon" /></button>
                </div>
                <div class="col p-0 d-flex justify-content-center auth">
                    <button class="login-btn" type="submit"><a href="/login">Login</a></button>
                    <button class="signup-btn" type="submit"><a href="/signup"> Signup</a></button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar