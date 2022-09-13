import React, { Fragment, useEffect, useState } from 'react'
import '../assets/style/auth.css'
import Logo from '../components/logo/logo'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toastr } from '../utils/toastr';

const SignUp = () => {

  useEffect(() => {
    document.title = "Blanja Sign Up"
  }, []);

  const [active, setActive] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    fullname: '',
    role: ''
  })

  const [formSeller, setFormSeller] = useState({
    name: '',
    email: '',
    phone: '',
    store_name: '',
    password: '',
    role: ''
  })

  useEffect(() => {
    setActive('customer')
    setForm({ ...form, role: 'customer' })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (active === 'customer') {
      axios
        .post(`${process.env.REACT_APP_API_BACKEND}user/register`, form)
        .then(res => {
          Swal.fire({
            title: 'Success!',
            text: res.data.message,
            icon: 'success'
          })
            .then(() => navigate('/login'))
        })
        .catch(err => {
          if (err.response.data.message === 'validation is failed') {
            const error = err.response.data.error;
            error.map(e => toastr(e, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            })
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_BACKEND}seller/register`, formSeller)
        .then(res => {
          Swal.fire({
            title: 'Success!',
            text: res.data.message,
            icon: 'success'
          })
            .then(() => {
              navigate('/login')
            })
        })
        .catch(err => {
          console.log('err: ', err)
          if (err.response.data.message === 'validation is failed') {
            const error = err.response.data.error;
            error.map(e => toastr(e, 'error'));
          } else {
            Swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error'
            })
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }
  console.log('active: ', active)
  // console.log('role: ', role)
  // console.log('form: ', form)
  console.log('formSeller: ', formSeller)
  return (
    <Fragment>
      <div className="container">
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
        <div className="signup-form d-flex justify-content-center">
          {active === 'customer' ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={e => {
                      setForm({ ...form, fullname: e.target.value })
                    }} />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row" style={{ marginBottom: '1rem' }}>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={e => {
                      setForm({ ...formSeller, email: e.target.value })
                    }} />
                </div>
              </div>
              <div className="form-group" hidden id="phone" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div className="form-group" hidden id="store_name" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Store name"
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => {
                      setForm({ ...form, password: e.target.value })
                    }} />
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
                    onChange={e => {
                      setFormSeller({ ...formSeller, name: e.target.value })
                    }}
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
                    onChange={e => {
                      setFormSeller({ ...formSeller, email: e.target.value })
                    }}
                  />
                </div>
              </div>
              <div className="form-group" id="phone" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone number"
                    onChange={e => {
                      setFormSeller({ ...formSeller, phone: e.target.value })
                    }}
                  />
                </div>
              </div>
              <div className="form-group" id="store_name" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Store name"
                    onChange={e => {
                      setFormSeller({ ...formSeller, store_name: e.target.value })
                    }}
                  />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <div className="row">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => {
                      setFormSeller({ ...formSeller, password: e.target.value })
                    }}
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
      </div>
    </Fragment>
  )
}

export default SignUp