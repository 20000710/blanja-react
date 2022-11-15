import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import Logo from '../components/logo/logo'
import '../assets/style/auth.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCustomer, loginSeller } from '../redux/action/authAction';

const Login = () => {
    useEffect(() => {
        document.title = "Blanja Login"
    }, []);

    const [active, setActive] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        setActive('customer');
    }, []);

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [formSeller, setFormSeller] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        if (active === 'customer') {
            setForm({ ...form, [e.target.name]: e.target.value })
        } else {
            setFormSeller({ ...formSeller, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (active === 'customer') {
            dispatch(loginCustomer(form, navigate, setLoading, active))
        } else if (active === 'seller') {
            dispatch(loginSeller(formSeller, navigate, setLoading, active))
        }
    }

    console.log('active: ', active)
    console.log('form customer: ', form)
    console.log('form seller: ', formSeller)
    return (
        <Fragment>
            <div className="wrapper" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Logo />
                <div className="row">
                    <div className="col d-flex justify-content-center statement">
                        <p>Please login with your account</p>
                    </div>
                </div>
                <main>
                    <nav className="role">
                        {active === 'customer' ? (
                            <div className="row d-flex justify-content-center">
                                <button type="submit" id="customer" className="btn customer active" onClick={() => setActive('customer')}>
                                    Customer
                                </button>
                                <button type="submit" id="seller" className="btn seller deactive" onClick={() => setActive('seller')}>Seller</button>
                            </div>
                        ) : (
                            <div className="row d-flex justify-content-center">
                                <button type="submit" id="customer" className="btn customer deactive" onClick={() => setActive('customer')}>
                                    Customer
                                </button>
                                <button type="submit" id="seller" className="btn seller active" onClick={() => setActive('seller')}>Seller</button>
                            </div>
                        )
                        }
                    </nav>
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            {active === "customer" ?
                                <>
                                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                                        <div className="row">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Email"
                                                name="email"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="row">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="inputPassword"
                                                placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                                        <div className="row">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Email"
                                                name="email"
                                                onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="row">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="inputPassword"
                                                placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                            <div className="row">
                                <div className="col d-flex justify-content-end p-0">
                                    <a href="reset-password.html" className="text-right">Forgot password?</a>
                                </div>
                            </div>
                            <div className="row">
                                {loading ? (
                                    <div className="col p-0 d-flex justify-content-center">
                                        <button type="submit" className="btn-login" disabled>
                                            <span
                                                className='spinner-border spinner-border-sm'
                                                role='status'
                                                aria-hidden='true'
                                            />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="col p-0 d-flex justify-content-center">
                                        <button type="submit" className="btn-login">Login</button>
                                    </div>
                                )
                                }
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <p className="text-center">Don't have a Blanja account? <a href="/signup" className="register-link">Register</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </Fragment>
    )
}

export default Login