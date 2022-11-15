import React, { Fragment, useEffect, useState } from 'react'
import '../assets/style/auth.css'
import Logo from '../components/logo/logo'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toastr } from '../utils/toastr';
import { useDispatch } from 'react-redux';
import { registerCustomer, registerSeller } from '../redux/action/authAction';

const SignUp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    document.title = "Blanja Sign Up"
  }, []);

  const [active, setActive] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: ''
  })

  const [formSeller, setFormSeller] = useState({
    name: '',
    email: '',
    phone: '',
    store_name: '',
    password: ''
  })


  const handleChange = (e) => {
    if(active === 'customer'){
        setForm({ ...form, [e.target.name]: e.target.value })
    } else{
        setFormSeller({ ...formSeller, [e.target.name]: e.target.value })
    }
}

  useEffect(() => {
    setActive('customer')
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(active === "customer"){
      dispatch(registerCustomer(form, navigate, setLoading))
    }else{
      dispatch(registerSeller(formSeller, navigate, setLoading))
    }
  }
  console.log('active: ', active)
  // console.log('role: ', role)
  // console.log('form: ', form)
  console.log('formCustomer: ', form);
  console.log('formSeller: ', formSeller)
  return (
    <Fragment>
        <Logo />
        <div className="row">
          <div className="col d-flex justify-content-center statement">
            <p>Please sign up with your account</p>
          </div>
        </div>
        <nav className="role">
          {active === 'customer' ? (
            <div className="row d-flex justify-content-center">
              <button
                type="submit"
                id="customer"
                className="btn customer active"
                onClick={() => {
                  setActive('customer')
                  setForm({ ...form, role: 'customer' })
                }}>
                Customer
              </button>
              <button
                type="submit"
                id="seller"
                className="btn seller deactive"
                onClick={() => {
                  setActive('seller')
                  setFormSeller({ ...formSeller, role: 'seller' })
                }}>Seller</button>
            </div>
          ) : (
            <div className="row d-flex justify-content-center">
              <button
                type="submit"
                id="customer"
                className="btn customer deactive"
                onClick={() => {
                  setActive('customer')
                  setForm({ ...form, role: 'customer' })
                }}> Customer</button>
              <button
                type="submit"
                id="seller"
                className="btn seller active"
                onClick={() => {
                  setActive('seller')
                  setFormSeller({ ...formSeller, role: 'seller' })
                }}>
                Seller
              </button>
            </div>
          )
          }
        </nav>
        <div className="signup-form">
          {active === 'customer' ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="text"
                    name='name'
                    className="form-control"
                    placeholder="Name"
                    onChange={handleChange} />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row" style={{ marginBottom: '1rem' }}>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={handleChange} />
                </div>
              </div>
              <div className="form-group" hidden id="phone" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                {loading ? (
                  <div className="col p-0">
                    <button type="submit" className="btn-signup" disabled>
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                ) : (
                  <div className="col p-0">
                    <button type="submit" className="btn-signup">Sign Up</button>
                  </div>
                )}
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row" style={{ marginBottom: '1rem' }}>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group" id="phone" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone number"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group" id="store_name" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Store name"
                    name="store_name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                {loading ? (
                  <div className="col p-0">
                    <button type="submit" className="btn-signup" disabled>
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                ) : (
                  <div className="col p-0">
                    <button type="submit" className="btn-signup">Sign Up</button>
                  </div>
                )}
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center mb-5">
                  <p className="text-center signup-text">Already have a Blanja account?<Link to="/login">Login</Link></p>
                </div>
              </div>
            </form>
          )}
        </div>
      
    </Fragment>
  )
}

export default SignUp