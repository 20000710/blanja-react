import axios from "axios";
import Swal from "sweetalert2";

// export const loginSeller = (data, navigate, setLoading) => async (dispatch) => {
//     try {
//         const result = await axios.post(
//             process.env.REACT_APP_API_BACKEND + "seller/login",
//             data
//         );
//         const user = result.data.data;
//         console.log('user: ', user)
//         localStorage.setItem("token", user.token);
//         localStorage.setItem("refreshToken", user.refreshToken)
//         dispatch({ type: "USER_LOGIN_SUCCESS", payload: user })
//         Swal.fire({
//             text: result.data.message,
//             icon: "success",
//         });
//         navigate("/profile")
//     } catch (error) {
//         console.log(error)
//         if(error.response.data.message === 'Email is invalid'){
//             Swal.fire({
//                 title: error.response.data.message,
//                 text: error.response.data.error,
//                 icon: "error",
//             });
//             setLoading(false)
//         } else if(error.response.data.message === 'Password is invalid'){
//             Swal.fire({
//                 title: error.response.data.message,
//                 text: error.response.data.error,
//                 icon: "error",
//             });
//             setLoading(false)
//         }
//     }
// }