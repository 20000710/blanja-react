import React, { Fragment, useEffect, useState } from 'react'
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
    const token = Cookies.get("token")
    const customer_id = Cookies.get("customer_id")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    console.log('customer: ', customerDetail);
    
    const photo = customerDetail?.photo

    useEffect(() => {
        dispatch(getDetailCustomer(token, customer_id))
        setName(customerDetail.name)
        setEmail(customerDetail.email)
        setPhone(customerDetail.phone)
        setGender(customerDetail.gender)
        setDateOfBirth(customerDetail.date_of_birth)
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
                    date_of_birth={dateOfBirth}
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