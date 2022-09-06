import React from 'react'
import { Fragment } from 'react'
import '../../assets/style/auth.css'
import logoImg from '../../assets/img/logo.png'

const Logo = () => {
  return (
    <Fragment>
        <div className="row">
            <div className="col logo d-flex align-items-center justify-content-center">
                <img src={logoImg} alt="Blanja Logo" />
                <h2 className="blanja-font pt-2">Blanja</h2>
            </div>
        </div>
    </Fragment>
  )
}

export default Logo