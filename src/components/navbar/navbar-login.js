import React from 'react'
import logo from '../../assets/img/logo.png'
import cart from '../../assets/img/cart.png'
import bell from '../../assets/img/bell.png'
import mail from '../../assets/img/mail.png'
import profilePhoto from '../../assets/img/profile-photo.png'

const navbarLogin = () => {
  return (
    <nav class="navbar-menu p-0">
        <div class="row">
            <div class="col-lg-3 col-sm-6 col-3 p-0 logo d-flex align-items-center">
                <img src={logo} alt="Blanja Logo" />
                <h2 class="blanja-font pt-2">Blanja</h2>
            </div>
            <div class="col-5 p-0 search-input d-flex flex-row">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
                <button type="button" class="filter-btn" data-toggle="modal" data-target="#filter-popup"><img src="../assets/img/filter.png" alt="filter icon" /></button>
            </div>
            <div class="col-3 p-0 d-flex flex-row">
                <button type="button" class="cart-btn"><img src={cart} alt="cart icon"/></button>
                <button type="button" class="bell-btn"><img src={bell} alt="bell icon"/></button>
                <button type="button" class="mail-btn"><img src={mail} alt="mail icon"/></button>
                <a href="#" class="profile"><img src={profilePhoto} alt="Profile"/></a>
            </div>
        </div>
    </nav>
  )
}

export default navbarLogin