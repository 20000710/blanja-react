import axios from "axios";

const createProduct = (data, saveImage, token) =>  async (dispatch) => {
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
        const products = await axios.post(process.env.REACT_APP_API_BACKEND + "product", formData ,{
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        })
        console.log(products);
        alert("crate product successful");
        const result = products.data.data;
        dispatch({ type: "CREATE_PRODUCT", payload: result })
    } catch (err) {
        console.error(err.message);
        alert("crate product failed");
    }
}

export default createProduct; 