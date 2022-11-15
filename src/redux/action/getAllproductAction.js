import axios from "axios";

const getAllProduct = (query, sort) => async (dispatch) => {
    try {
        const products = await axios.get(`
            ${process.env.REACT_APP_API_BACKEND}product?search=${query}&sort=${sort}
        `)
        const result = products.data.data;
        dispatch({ type: "GET_ALL_PRODUCT", payload: result })
    } catch (err) {
        console.log(err.message)
    }
}

export default getAllProduct