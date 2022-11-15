import React from 'react'

const MyOrder = () => {
    return (
        <div className="tab-pane fade show" id="v-pills-order" role="tabpanel"
            aria-labelledby="v-pills-order-tab" data-toggle="button">
            <row className="">
                <div className="container-fluid container-nav-pills">
                    <div className="col-12 justify-content-start">
                        <h4 className="modal-title fw-bold " id="modalProfileLabel">
                            My Order</h4>
                    </div>
                    <div className="nav d-flex-column nav-pills justify-content-start mt-2"
                        id="v-pills-tab" role="tablist" aria-orientation="horizontal">

                        <a className="nav-link active" id="v-pills-allitem-tab"
                            data-bs-toggle="pill" data-bs-target="#v-pills-allitem"
                            type="button" role="tab" aria-controls="v-pills-allitem"
                            aria-selected="true">
                            All items</a>

                        <a className="nav-link" id="v-pills-notpaid-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-notpaid" type="button" role="tab"
                            aria-controls="v-pills-notpaid" aria-selected="true"> Not paid
                            yet</a>

                        <a className="nav-link" id="v-pills-packed-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-packed" type="button" role="tab"
                            aria-controls="v-pills-packed" aria-selected="true"> Packed</a>

                        <a className="nav-link" id="v-pills-sent-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-sent" type="button" role="tab"
                            aria-controls="v-pills-sent" aria-selected="true"> Sent</a>

                        <a className="nav-link" id="v-pills-completed-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-completed" type="button" role="tab"
                            aria-controls="v-pills-completed" aria-selected="true">
                            Completed</a>

                        <a className="nav-link" id="v-pills-cancel-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-cancel" type="button" role="tab"
                            aria-controls="v-pills-cancel" aria-selected="true"> Order
                            Cancel</a>

                    </div>
                    <hr />
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-allitem"
                            role="tabpanel" aria-labelledby="v-pills-allitem-tab"
                            data-toggle="button">
                            <div className="vh-100">
                                tab all item
                            </div>
                        </div>

                        <div className="tab-pane fade show" id="v-pills-notpaid" role="tabpanel"
                            aria-labelledby="v-pills-notpaid-tab" data-toggle="button">
                            <div className="vh-100">
                                tab not paid
                            </div>
                        </div>

                        <div className="tab-pane fade show" id="v-pills-packed" role="tabpanel"
                            aria-labelledby="v-pills-packed-tab" data-toggle="button">
                            <div className="vh-100">
                                tab picked
                            </div>
                        </div>

                        <div className="tab-pane fade show" id="v-pills-sent" role="tabpanel"
                            aria-labelledby="v-pills-sent-tab" data-toggle="button">
                            <div className="vh-100">
                                tab sent
                            </div>
                        </div>

                        <div className="tab-pane fade show" id="v-pills-completed" role="tabpanel"
                            aria-labelledby="v-pills-completed-tab" data-toggle="button">
                            <div className="vh-100">
                                tab completed
                            </div>
                        </div>

                        <div className="tab-pane fade show" id="v-pills-cancel" role="tabpanel"
                            aria-labelledby="v-pills-cancel-tab" data-toggle="button">
                            <div className="vh-100">
                                tab order cancel
                            </div>
                        </div>
                    </div>
                </div>
            </row>
        </div>
    )
}

export default MyOrder