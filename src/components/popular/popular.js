import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getAllProduct from '../../redux/action/getAllproductAction'
import Cookies from 'js-cookie'
import Card from '../card/card'
import { FormatRupiah } from '@arismun/format-rupiah'

const Popular = () => {
    const dispatch = useDispatch()
    const [sort, setSort] = useState("")
    const [search, setSearch] = useState("")
    const { product } = useSelector(state => state.product)
    console.log('product: ', product);
    useEffect(() => {
        const token = Cookies.get("token")
        dispatch(getAllProduct(search, sort, token))
    }, [])
    return (
        <div className="container" style={{marginBottom: "5rem"}}>
            <div className="row">
                <div className="products">
                    <h3 className="products mt-5 mb-2 title">Popular</h3>
                    <p>Find clothes that are trending recently</p>
                </div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
                    {product.map((item) => (
                        <div className="col" key={item.id_product}>
                            <Card
                                src={item.photo}
                                to={`/product/${item.id_product}`}
                                titleName={item.name}
                                price={item.price}
                                merk={item.brand}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular