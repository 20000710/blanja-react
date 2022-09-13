import axios from "axios";

const getProduct = async (dispatch) => {
    try{
        const products = await axios.get(
            process.env.REACT_APP_API_BACKEND + "product"
        )
        const result = products.data.data;
        dispatch({type: "GET_ALL_PRODUCT", payload: result})
    } catch (err){
        console.log(err.message)
    }
}

export default getProduct