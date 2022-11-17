import React, { Fragment, useEffect } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import TableProduct from '../components/table/table-product'
import ProfileCustomer from '../components/profile-customer/profileCustomer'
import NavbarLogin from '../components/navbar/navbarLogin'

import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getDetailCustomer } from '../redux/action/customerAction'
import ProfileSeller from '../components/profile-seller/profileSeller'

const Profile = () => {
    const dispatch = useDispatch()
    const { customerDetail } = useSelector((state) => state.customer)
    const role = Cookies.get("role")
    console.log('customer: ', customerDetail);
    const name = customerDetail?.name
    const email = customerDetail?.email
    const phone = customerDetail?.phone
    const gender = customerDetail?.gender
    const date_of_birth = customerDetail?.date_of_birth
    const photo = customerDetail?.photo

    useEffect(() => {
        const token = Cookies.get("token")
        const customer_id = Cookies.get("customer_id")
        dispatch(getDetailCustomer(token, customer_id))
    }, [])
    return (
        <Fragment>
            <NavbarLogin />
            {role === "customer" ?
                <ProfileCustomer
                    name={name}
                    email={email}
                    phone={phone}
                    gender={gender}
                    date_of_birth={date_of_birth}
                    photo={photo}
                    customerDetail={customerDetail}
                /> :
                <ProfileSeller />
            }
            {/* <Sidebar/>
            <TableProduct/> */}
        </Fragment>
    )
}

export default Profile