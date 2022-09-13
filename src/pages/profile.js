import React, { Fragment } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import TableProduct from '../components/table/table-product'

const Profile = () => {
    return (
        <Fragment>
            <Navbar/>
            <Sidebar/>
            <TableProduct/>
        </Fragment>
    )
}

export default Profile