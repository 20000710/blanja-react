import axios from "axios";
const deleteProduct = (id, token) => async (dispatch) => {
  console.log('id: ', id)
  try {
    const products = await axios.delete(
      process.env.REACT_APP_API_BACKEND + "product/" + id,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(products);
    alert("delete success");
    const result = products.data.data;
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("delete failed");
  }
};

export default deleteProduct;