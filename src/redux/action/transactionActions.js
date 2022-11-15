import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const createTransactions = (form, total, token) =>  async (dispatch) => {
    try {
        const data = {
            product_id: form.product_id,
            quantity: form.quantity,
            total_amount: total,
            payment_type: form.payment_type,
            payment_status: "paid",
            shipped_date: form.shipped_date,
            transaction_status: "success",
            customer_id: form.customer_id,
            seller_id: form.seller_id
        }
        const products = await axios.post(process.env.REACT_APP_API_BACKEND + "transactions", data ,{
           headers: {
            Authorization: `Bearer ${token}`
           }
        });
        console.log(products);
        const result = products.data.data;
        toast.success(products.data.message, { toastId: "successCreateTransaction" });
        dispatch({ type: "CREATE_TRANSACTION", status: "success", payload: result });
    } catch (err) {
        toast.warning(err.data.message, { toastId: "errorCreateTransaction" });
    }
}

export default createTransactions; 