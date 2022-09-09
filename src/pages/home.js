import React, { Fragment } from 'react'
import '../assets/style/home.css'
import formalSuit from '../assets/img/formal-suit.png'
import ratingStars from '../assets/img/rating-5-stars.png'
import category1 from '../assets/img/category-1.png'
import category2 from '../assets/img/category-2.png'
import category3 from '../assets/img/category-3.png'
import category4 from '../assets/img/category-4.png'
import category5 from '../assets/img/category-5.png'
import Navbar from '../components/navbar/navbar'
import Carousel from '../components/carousel/carousel'
import ProductSearch from '../components/product-search/product-search'

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <Navbar/>
        <Carousel/>
        <section className="category">
          <div className="col-lg-12 col-md-6 col-12">
            <h1 className="category-title">Category</h1>
            <p className="category-desc">What are you currently looking for</p>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6 col-2">
              <img src={category1} alt="category 1" />
            </div>
            <div className="col-lg-2 col-md-6 col-2">
              <img src={category2} alt="category 2" />
            </div>
            <div className="col-lg-2 col-md-6 col-2">
              <img src={category3} alt="category 3" />
            </div>
            <div className="col-lg-2 col-md-6 col-2">
              <img src={category4} alt="category 4" />
            </div>
            <div className="col-lg-2 col-md-6 col-2">
              <img src={category5} alt="category 5" />
            </div>   
          </div>
      </section>
      <ProductSearch/>
      {/* <section className="new">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-12 p-0 title">
              <h1>New</h1>
              <p>You’ve never seen it before!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-2 p-0">
            <div className="card w-208 h-278">
              <img src={formalSuit} className="card-img-top" alt="card 1" />
              <div className="card-body">
                <p className="card-text">Men's formal suit - Black & White</p>
                <p className="card-text">$ 40.0</p>
                <p className="card-text m-0">Zalora Cloth</p>
                <img className="stars" src={ratingStars} alt="card 2"/>
              </div>
            </div>
          </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                <img src={formalSuit} className="card-img-top" alt="card 1" />
                <div className="card-body">
                  <p className="card-text">Men's formal suit - Black & White</p>
                  <p className="card-text">$ 40.0</p>
                  <p className="card-text m-0">Zalora Cloth</p>
                  <img className="stars" src={ratingStars} alt="card 2" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                <img src={formalSuit} className="card-img-top" alt="card 1" />
                <div className="card-body">
                    <p className="card-text">Men's formal suit - Black & White</p>
                    <p className="card-text">$ 40.0</p>
                    <p className="card-text m-0">Zalora Cloth</p>
                    <img className="stars" src={ratingStars} alt="card 2" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                <img src={formalSuit} className="card-img-top" alt="card 1" />
                <div className="card-body">
                    <p className="card-text">Men's formal suit - Black & White</p>
                    <p className="card-text">$ 40.0</p>
                    <p className="card-text m-0">Zalora Cloth</p>
                    <img className="stars" src={ratingStars} alt="card 2" />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                <img src={formalSuit} className="card-img-top" alt="card 1" />
                <div className="card-body">
                    <p className="card-text">Men's formal suit - Black & White</p>
                    <p className="card-text">$ 40.0</p>
                    <p className="card-text m-0">Zalora Cloth</p>
                    <img className="stars" src={ratingStars} alt="card 2" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
                <div className="card w-208 h-278">
                    <img src={formalSuit} className="card-img-top" alt="card 1" />
                    <div className="card-body">
                        <p className="card-text">Men's formal suit - Black & White</p>
                        <p className="card-text">$ 40.0</p>
                        <p className="card-text m-0">Zalora Cloth</p>
                        <img className="stars" src={ratingStars} alt="card 2" />
                    </div>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
            </div>
          </div>
      </section> */}
      <section className="popular">
        <div className="row">
            <div className="col-lg-12 col-md-6 col-12 p-0 title">
                <h1>Popular</h1>
                <p>Find clothes that are trending recently</p>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-6 col-2 p-0">
              <div className="card w-208 h-278">
                  <img src={formalSuit} className="card-img-top" alt="card 1" />
                  <div className="card-body">
                      <p className="card-text">Men's formal suit - Black & White</p>
                      <p className="card-text">$ 40.0</p>
                      <p className="card-text m-0">Zalora Cloth</p>
                      <img className="stars" src={ratingStars} alt="card 2" />
                  </div>
              </div>
          </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
                <div className="card w-208 h-278">
                    <img src={formalSuit} className="card-img-top" alt="card 1" />
                    <div className="card-body">
                        <p className="card-text">Men's formal suit - Black & White</p>
                        <p className="card-text">$ 40.0</p>
                        <p className="card-text m-0">Zalora Cloth</p>
                        <img className="stars" src={ratingStars} alt="card 2" />
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
                <div className="card w-208 h-278">
                    <img src={formalSuit} className="card-img-top" alt="card 1" />
                    <div className="card-body">
                        <p className="card-text">Men's formal suit - Black & White</p>
                        <p className="card-text">$ 40.0</p>
                        <p className="card-text m-0">Zalora Cloth</p>
                        <img className="stars" src={ratingStars} alt="card 2" />
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
                <div className="card w-208 h-278">
                    <img src={formalSuit} className="card-img-top" alt="card 1" />
                    <div className="card-body">
                        <p className="card-text">Men's formal suit - Black & White</p>
                        <p className="card-text">$ 40.0</p>
                        <p className="card-text m-0">Zalora Cloth</p>
                        <img className="stars" src={ratingStars} alt="card 2" />
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-2 p-0">
                <div className="card w-208 h-278">
                    <img src={formalSuit} className="card-img-top" alt="card 1" />
                    <div className="card-body">
                        <p className="card-text">Men's formal suit - Black & White</p>
                        <p className="card-text">$ 40.0</p>
                        <p className="card-text m-0">Zalora Cloth</p>
                        <img className="stars" src={ratingStars} alt="card 2" />
                    </div>
                </div>
            </div>
        </div>
          <div className="row">
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card w-208 h-278">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card w-208 h-278">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card w-208 h-278">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card w-208 h-278">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-2 col-md-6 col-2 p-0">
                  <div className="card">
                      <img src={formalSuit} className="card-img-top" alt="card 1" />
                      <div className="card-body">
                          <p className="card-text">Men's formal suit - Black & White</p>
                          <p className="card-text">$ 40.0</p>
                          <p className="card-text m-0">Zalora Cloth</p>
                          <img className="stars" src={ratingStars} alt="card 2" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    </Fragment>
  )
}

export default Home