import React from 'react'
import yellowStars from '../../assets/img/yellow-stars.png'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductReview = () => {
    return (
        <>
            <style jsx>{`
            .product-review{
                display: flex;
                flex-direction: column;
            }
            
            .product-review h1{
                font-style: normal;
                font-weight: 600;
                font-size: 28px;
                line-height: 28px;
                color: #222222;
            }

            .progress-bar{
                width: 100%;
            }
        `}</style>
            <div className="product-review">
                <h1>Product Review</h1>
                <div className="review-number">
                    <h1>5.0</h1>
                    <p>/10</p>
                    <div className="user-rating">
                        <div className="stars">
                            <img width={16} height={16} src={yellowStars} alt="rating user 1" />
                            <img width={16} height={16} src={yellowStars} alt="rating user 2" />
                            <img width={16} height={16} src={yellowStars} alt="rating user 3" />
                            <img width={16} height={16} src={yellowStars} alt="rating user 4" />
                            <img width={16} height={16} src={yellowStars} alt="rating user 5" />
                        </div>
                        <div className="number">
                            <p>5</p>
                            <p>4</p>
                            <p>3</p>
                            <p>2</p>
                            <p>1</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="total-number">
                            <p>4</p>
                            <p>0</p>
                            <p>0</p>
                            <p>0</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                    <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                    <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                    <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                    <FontAwesomeIcon style={{ paddingTop: "0.6rem" }} icon={faStar} color="orange" />
                </div>
            </div>
        </>
    )
}

export default ProductReview