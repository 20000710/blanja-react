import React from 'react'
import TableProduct from '../table/table-product'

const ProductSeller = () => {
    return (
        <div className="tab-pane fade show" id="v-pills-address" role="tabpanel"
            aria-labelledby="v-pills-address-tab" data-toggle="button">

            <row className="my-5">
                <div className="container-fluid">
                    <div className="col-12 justify-content-start ">
                        <h4 className="modal-title fw-bold" id="modalAddressLabel">
                            Choose another address</h4>
                        <h6 className="text-muted my-2" id="modalAddressLabel">
                            Manage your shipping address</h6>
                    </div>
                    <hr />
                    <TableProduct />
                </div>
            </row>
        </div>

    )
}

export default ProductSeller