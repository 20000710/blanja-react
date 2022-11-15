import React from 'react'
import category1 from '../../assets/img/category-1.png'
import category2 from '../../assets/img/category-2.png'
import category3 from '../../assets/img/category-3.png'
import category4 from '../../assets/img/category-4.png'
import category5 from '../../assets/img/category-5.png'

const Category = () => {
    return (
        <div className="container">
            <div className=" py-5" id="custom-cards">
                <h2 className="title mt-2">Category</h2>
                <p className="sub-category">What are you currently looking for</p>
                <div className="row row-cols-2 row-cols-lg-5 align-items-center g-5">
                    <div className="col categories">
                        <div className="card card-1 text-center d-flex flex-colum">
                            <div className="card-body m-0 p-0">
                                <img src={category1} alt="Bootstrap" className="img-fluid" />
                                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                                    <a href="/category/{category[0].id}" >
                                        <p className="font-category"></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col categories">
                        <div className="card card-2">
                            <div className="card-body m-0 p-0">
                                <img src={category2} alt="Bootstrap" className="img-fluid" />
                                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                                    <p className="font-category"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col categories">
                        <div className="card card-3">
                            <div className="card-body m-0 p-0">
                                <img src={category3} alt="Bootstrap" className="img-fluid" />
                                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                                    <p className="font-category"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col categories">
                        <div className="card card-4">
                            <div className="card-body m-0 p-0">
                                <img src={category4} alt="Bootstrap" className="img-fluid" />
                                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                                    <p className="font-category"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col categories">
                        <div className="card card-5">
                            <div className="card-body m-0 p-0">
                                <img src={category5} alt="Bootstrap" className="img-fluid" />
                                <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                                    <p className="font-category"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category