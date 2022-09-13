import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import getProductDetail from '../redux/action/getDetailAction';

const ProductDetail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {productDetail} = useSelector((state) => state.product)
  console.log('product_detail: ', productDetail)
  useEffect(() => {
    dispatch(getProductDetail(id))
  },[])

  return (
    <div>
      <h1>Product Detail Page {id}</h1>
      <ul>
        <li>{productDetail.name}</li>
        <li>
          <img crossOrigin="anonymous" src={productDetail.photo} alt="" />
        </li>
        <li>{productDetail.price}</li>
        <li>{productDetail.brand}</li>
        <li>{productDetail.description}</li>
      </ul>
      <button onClick={()=>navigate('/')}>Kembali ke home</button>
    </div>
  )
}

export default ProductDetail