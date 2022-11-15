import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FormatRupiah } from "@arismun/format-rupiah";

const Card = ({ src, to, id_product, titleName, price, merk }) => {
    return (
        <div>
            <style jsx>{`
                .price{
                    color: #DB3022;
                }
            `}</style>
            <div className="card shadow-sm w-208 h-278" >
                <div>
                    <img style={{
                        height: "250px",
                        width: "100%"
                    }} crossOrigin='anonymous'
                        src={'http://localhost:3030/' + src}
                        className="img-fluid"
                        alt="..."
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link
                            to={to}
                            state={{id_product: id_product}}
                            style={{ color: "#000000" }}
                        >
                            {titleName}
                        </Link>
                    </h5>
                    <p className="price">
                        {<FormatRupiah value={price} />}
                    </p>
                    <p className="card-text merk">{merk}</p>
                    <div className="d-flex align-items-start text-warning start">
                        <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                        <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                        <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                        <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                        <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                        <p className="rating  mt-2 ms-1 text-dark">(10)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card