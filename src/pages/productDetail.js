import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import getProductDetail from '../redux/action/getDetailAction';
import '../assets/style/product-detail.css'
import stars from '../assets/img/rating-5-stars.png';
import rectangel from '../assets/img/rectangle-icon.png';
import plus from '../assets/img/plus.png';
// import NavbarHome from '../components/navbar/navbarHome'
import Cookies from 'js-cookie'
import { FormatRupiah } from "@arismun/format-rupiah";
import NavbarLogin from '../components/navbar/navbarLogin';

const ProductDetail = () => {
  const location = useLocation();
  const id_product = location.state?.id_product

  console.log('id: ', id_product);
  const { productDetail } = useSelector((state) => state.product)
  const [jumlah, setJumlah] = useState(0)
  const [ukuran, setUkuran] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const token = Cookies.get("token")
  const dispatch = useDispatch()
  const getFromChild = (q) => {
    setQuery(q)
  }
  const handleIncrement = () => {
    setJumlah(jumlah + 1)
  }

  const handleDecrement = () => {
    if(jumlah !== 0){
      setJumlah(jumlah - 1)
    }else{
      setJumlah(0)
    }
  }

  const handleIncrementSize = () => {
    if(ukuran === "S"){
      setUkuran("M")
    } else if(ukuran === "M"){
      setUkuran("L")
    } else if(ukuran === "L"){
      setUkuran("XL")
    } else if(ukuran === "XL"){
      setUkuran("XXL")
    }else if(ukuran === "XXL"){
      setUkuran("3XL")
    } else if(ukuran === "3XL"){
      setUkuran("4XL")
    }
  }

  const handleDecrementSize = () => {
    if(ukuran === "4XL"){
      setUkuran("3XL")
    } else if(ukuran === "3XL"){
      setUkuran("XXL")
    } else if(ukuran === "XXL"){
      setUkuran("XL")
    } else if(ukuran === "XL"){
      setUkuran("L")
    }else if(ukuran === "L"){
      setUkuran("M")
    } else if(ukuran === "M"){
      setUkuran("S")
    }
  }

  console.log('product_detail: ', productDetail)
  const qty = productDetail?.quantity !== undefined ? productDetail?.quantity : 0
  const size = productDetail?.size !== undefined ? productDetail?.size : "-"
  useEffect(() => {
    getFromChild()
    setJumlah(parseInt(qty))
    setUkuran(size)
    dispatch(getProductDetail(id_product, token))
  }, [])
  console.log('jumlah: ', jumlah);
  return (
    <div>

      <NavbarLogin/>
      <div className="image-gallery container">
        <div className="row">
          <div className="col pr-0 display-img">
            <img
              width={367}
              height={378}
              crossOrigin='anonymous'
              src={'http://localhost:3030/' + productDetail?.photo}
              id="main-img" className="main-img"
              alt="main"
            />
          </div>
          <div className="col desc-img">
            <aside>
              <div className="product-desc">
                <h1>{productDetail?.name}</h1>
                <p>{productDetail?.brand}</p>
                <img className="stars" src={stars} alt="stars" />
              </div>
              <div className="product-price">
                <p>Price</p>
                <h1>{<FormatRupiah value={productDetail?.price} />}</h1>
              </div>
              <div className="product-color">
                <p>Color</p>
                {productDetail?.color?.toLowerCase() === 'hitam' ? (
                  <button type="button" value="black"></button>
                ) : productDetail.color === 'red' ? (
                  <button type="button" value="merah"></button>
                ) : productDetail.color === 'biru' ? (
                  <button type="button" value="blue"></button>
                ) : productDetail.color === 'hijau' ? (
                  <button type="button" value="green"></button>
                ) : <p>color not available</p>
                }
              </div>
              <div className="product-amount">
                <div>
                  <p>Size</p>
                  <div className="d-flex">
                  <button onClick={handleDecrementSize} type="button" id="size-minus" className="btn btn-minus">
                    <img src={rectangel} alt="btn-minus" />
                  </button>
                  <div className="number" id="size-number">{ukuran}</div>
                  <button onClick={handleIncrementSize}  type="button" id="size-plus" className="btn btn-plus">
                    <img src={plus} alt="btn-plus" />
                  </button>
                  </div>
                </div>
                <div>
                  <p>Jumlah</p>
                  <div className="d-flex">
                  <button onClick={handleDecrement} type="button" id="amount-minus" className="btn btn-minus">
                    <img src={rectangel} alt="btn-minus"/>
                  </button>
                  <div className="number" id="amount-number">{jumlah}</div>
                  <button onClick={handleIncrement} type="button" id="amount-plus" className="btn btn-plus">
                    <img src={plus} alt="btn-plus" />
                  </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="row second-row">
          <div className="product-button">
            {/* <button type="submit" className="chat">Chat</button> */}
            <button type="submit" className="add-bag">Add bag</button>
            <Link
              to="/checkout"
              state={{ 
                id_product: productDetail?.id_product,
                size: ukuran,
                quantity: jumlah
              }}
            >
              <button disabled={jumlah === 0 ? true : false} type="submit" className="buy-now">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="product-information" style={{ paddingBottom: "2rem"}}>
          <h1>Informasi Produk</h1>
          <div className="condition">
            <h2>Condition</h2>
            <p>New</p>
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>
              {productDetail?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail