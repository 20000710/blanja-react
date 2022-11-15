import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const registerCustomer = (data, navigate, setLoading) => async (dispatch) => {
    try {
        const result = await axios.post(
            process.env.REACT_APP_API_BACKEND + "auth/customer/register",
            data
        );
        const user = result.data;
        toast.success(user.message, { toastId: "successSignUp" })
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
        navigate("/login");
        setLoading(false);
    } catch (error) {
        console.log('error: ', error);
        toast.warning(error, { toastId: "errorSignUp" })
        setLoading(false);
    }
};

export const registerSeller = (data, navigate, setLoading) => async (dispatch) => {
    try {
        const result = await axios.post(
            process.env.REACT_APP_API_BACKEND + "auth/seller/register",
            data
        );
        const user = result.data;
        toast.success(user.message, { toastId: "successSignUp" })
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
        navigate("/login");
        setLoading(false);
    } catch (error) {
        console.log('error: ', error);
        toast.warning(error, { toastId: "errorSignUp" })
        setLoading(false);
    }
};

export const loginCustomer = (data, navigate, setLoading, active) => async (dispatch) => {
    console.log('data', data);
    try {
        const result = await axios.post(
            process.env.REACT_APP_API_BACKEND + "auth/customer/login",
            data
        );
        const user = result.data;
        console.log('res: ', result);
        console.log('user: ', user)
        const { id } = jwtDecode(result.data.token)
        toast.success("Sign In Success. Welcome " + user.name, { toastId: "successSignIn" });
        Cookies.set("token", user.token)
        Cookies.set("role", active)
        Cookies.set("customer_id", id)
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: user })
        navigate("/")
    } catch (error) {
        console.log(error)
        toast.warning(error.response.data.message, { toastId: "errorSignIn" });
        setLoading(false)
    }
}

export const loginSeller = (data, navigate, setLoading, active) => async (dispatch) => {
    try {
        const result = await axios.post(
            process.env.REACT_APP_API_BACKEND + "auth/seller/login",
            data
        );
        const user = result.data;
        console.log('data-form: ', data);
        console.log('user: ', user)
        Cookies.set("token", user.token)
        Cookies.set("role", active)
        const { id } = jwtDecode(result.data.token)
        Cookies.set("seller_id", id)
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: user })
        toast.success("Sign In Success. Welcome " + user.name, { toastId: "successSignIn" });
        navigate("/")
    } catch (error) {
        console.log(error)
        toast.warning(error.response.data.message, { toastId: "errorSignIn" });
        setLoading(false)
    }
}