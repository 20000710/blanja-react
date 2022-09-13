import axios from "axios";

const getProductDetail = (id) => async (dispatch) => {
    try {
        const product = await axios.get(
            process.env.REACT_APP_API_BACKEND + "product/" + id
        )
        console.log('result: ', product.data.data)
        const result = product.data.data[0];
        dispatch({ type: "GET_DETAIL_PRODUCT", payload: result})
    } catch (err) {
        console.log(err.message)
    }
}

export default getProductDetail