import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllAddress = (token) => async (dispatch) => {
    try{
        const address = await axios.get(process.env.REACT_APP_API_BACKEND + "/address", {
            headers: {
            Authorization: `Bearer ${token}`,
        }})
        const result = address.data.data
        console.log('result: ', result);
        dispatch({type: "GET_ALL_ADDRESS", payload: result})
    } catch (err){
        console.log(err.message)
    }
}

export const createAddress = (data, token) => async (dispatch) => {    
    try {
        const result = await axios.post(process.env.REACT_APP_API_BACKEND + "customer", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success(result.data.message, { toastId: "successCreateAddress" })
        dispatch({ type: "CREATE_ADDRESS", payload: result.data.data });
    } catch (error) {
        console.log(error);
        toast.warning(error.data.message, { toastId: "errorCreateAddress" })
    }
}

export const updateAddress = (data, token, address_id) => async (dispatch) => {    
    try {
        
        const result = await axios.put(process.env.REACT_APP_API_BACKEND + "customer/" + address_id, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success(result.data.message, { toastId: "successUpdateAddress" })
        dispatch({ type: "UPDATE_ADDRESS", payload: result.data.data });
    } catch (error) {
        console.log(error);
        toast.warning(error.data.message, { toastId: "errorUpdateAddress" })
    }
}