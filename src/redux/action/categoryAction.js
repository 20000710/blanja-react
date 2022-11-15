import axios from "axios";

const getAllCategory = (token) => async (dispatch) => {
    try{
        const category = await axios.get(process.env.REACT_APP_API_BACKEND + "/category", {
            headers: {
            Authorization: `Bearer ${token}`,
        }})
        const result = category.data.data
        console.log('result: ', result);
        dispatch({type: "GET_ALL_CATEGORY", payload: result})
    } catch (err){
        console.log(err.message)
    }
}

export default getAllCategory