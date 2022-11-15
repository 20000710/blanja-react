import React, { Fragment, useEffect, useState } from 'react'
import '../assets/style/home.css'
import formalSuit from '../assets/img/formal-suit.png'
import NavbarHome from '../components/navbar/navbarHome'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card/card'
import Item from 'antd/lib/list/Item'
import Category from '../components/category/category'
import CarouselHome from '../components/carousel/carousel'
import getAllProduct from '../redux/action/getAllproductAction'
// import Carousel from '../components/carousel/carousel'
// import ProductSearch from '../components/product-search/product-search'
// import navbarLogin from '../components/navbar/navbar-login'

const Home = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")
    const [sort, setSort] = useState("name")
    const { product } = useSelector(state => state.product)
    console.log('product: ', product);
    const getFromChild = (handleSearch) => {
        return handleSearch
    }

    console.log('query: ', query);
    useEffect(() => {
        getFromChild()
        const token = Cookies.get("token")
        dispatch(getAllProduct(query, sort, token))
    }, [])
    return (
        <Fragment>
            <NavbarHome getQuery={getFromChild} />
            <CarouselHome />
            <Category />
            <section className="container">
                <div className="row">
                    <div className="title">
                        <h1>New</h1>
                        <p>Find clothes that are trending recently</p>
                    </div>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
                        {product.map(res => (
                            <Card
                                src={res.photo}
                                to={`/product/${res.id_product}`}
                                id_product={res.id_product}
                                titleName={res.name}
                                price={res.price}
                                merk={res.brand}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home