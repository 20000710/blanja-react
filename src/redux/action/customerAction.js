import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllCustomer = (token) => async (dispatch) => {
    try{
        const category = await axios.get(process.env.REACT_APP_API_BACKEND + "/customer", {
            headers: {
            Authorization: `Bearer ${token}`,
        }})
        const result = category.data.data
        console.log('result: ', result);
        dispatch({type: "GET_ALL_CUSTOMER", payload: result})
    } catch (err){
        console.log(err.message)
    }
}

export const getDetailCustomer = (token, id) => async (dispatch) => {
    try{
        const customer = await axios.get(process.env.REACT_APP_API_BACKEND + "customer/" +id, {
            headers: {
            Authorization: `Bearer ${token}`,
        }})
        const result = customer.data.data
        console.log('result: ', result);
        dispatch({type: "GET_DETAIL_CUSTOMER", payload: result})
    } catch (err){
        console.log(err.message)
    }
}

export const updateCustomer = (data, token, customer_id) => async (dispatch) => {    
    try {
        const allData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            date_of_birth: data.date_of_birth 
        }
        const result = await axios.put(process.env.REACT_APP_API_BACKEND + "customer/" + customer_id, allData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success(result.data.message, { toastId: "successUpdateCustomer" })
        dispatch({ type: "UPDATE_CUSTOMER", payload: result.data.data });
    } catch (error) {
        console.log(error);
        toast.warning(error.data.message, { toastId: "errorUpdateCustomer" })
    }
}

export const uploadImage = (image, token, customer_id) => async (dispatch) => {
    console.log('image: ', image);
    try {
        const form = new FormData();
        form.append("photo", image)
        const result = await axios.put(process.env.REACT_APP_API_BACKEND + "customer/upload/" + customer_id, form, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        toast.success(result.data.message, { toastId: "successUpload" })
        dispatch({ type: "UPDATE_PHOTO_CUSTOMER", payload: result.data.data });
    } catch (error) {
        console.log(error);
    }
}