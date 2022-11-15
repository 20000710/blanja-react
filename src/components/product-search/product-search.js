import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../assets/style/product-search.css'

const ProductSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sort, setSort] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };

  const handleSortBy = (e) => {
    console.log('currentValue: ', e.currentTarget.value)
    setSortBy(e.currentTarget.value)
  };

  console.log('search: ', search)

  const getData = () => {
    axios.
      get(`${process.env.REACT_APP_API_BACKEND}product?search=${search}&sortby=${sortBy}&sort=${sort}&page=1&limit=10`)
      .then(res => {
        console.log('res: ', res)
        setProducts(res.data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleSearch = (e) => {
    e.preventDefault();
    getData();
    if (search !== "" && sort !== "" && sortBy !== "") {
      setSearchParams({
        search: search,
        sort: sort,
        sortby: sortBy
      });
    } else if (search !== "") {
      setSearchParams({
        search: search,
      });
    } else if (sort !== "") {
      setSearchParams({
        sort: sort,
      });
    } else if (sortBy !== ""){
      setSortBy({
        setSortBy: sortBy,
      })
    } else {
      setSearchParams({});
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <Fragment>
      <section>
        <div className="mt-5">
          <div className="row-new">
            <div className="row">
              <div className="col-md-12 justify-content-center">
                <div className="row">
                  <h1 className="fw-bold">New</h1>
                  <p className="fs-6 text-muted">You've never seen it before!</p>
                </div>
              </div>

              <form onSubmit={handleSearch}>
                <select onChange={handleSort}>
                  <option value="">Sort</option>
                  <option value="ASC">A-Z</option>
                  <option value="DESC">Z-A</option>
                </select>
                <select onChange={handleSortBy}>
                  <option value="">Sort By</option>
                  <option value="name">Name</option>
                  <option value="brand">Brand</option>
                  <option value="size">Size</option>
                </select>
                <input type="text" name="search" placeholder="search" onChange={(e) => {
                  setSearch(e.target.value)
                }} />
                <button type='submit' >cari</button>
              </form>
              <p hidden>{searchParams}</p>
              <div className="col-12 my-3">
                <div className="row d-flex">
                  {products.map((item, index) => (
                    <Link className="col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2 link-product " to={`../product/${item.id}`} key={item.id}>
                      <Card className="container border-rounded">
                        <div key={item.id}>
                          <div className="d-flex justify-content-center out-img-product">
                            <img className="img-product" crossOrigin="anonymous" src={item.photo} alt="" />{" "}
                          </div>
                          <h6 className="text-dark fw-bold title-product">{item.name}</h6>
                          <h6 className="text-danger">$ {item.price}</h6>
                          <p className="fs-6 text-muted">
                            <small>{item.brand}</small>
                          </p>
                          <img className="mb-3 stars-img" crossOrigin="anonymous" src={require("../../assets/img/rating-5-stars.png")} alt="" />
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ProductSearch