import axios from "axios";
const updateProduct = (data, id, saveImage, token) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("category_id", data.category_id);
    formData.append("size", data.size);
    formData.append("color", data.color);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    const products = await axios.put(process.env.REACT_APP_API_BACKEND + "product/" + id, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(products);
    alert("update product successful");
    const result = products.data.data;
    dispatch({ type: "UPDATE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("update product failed");
  }
};

export default updateProduct;