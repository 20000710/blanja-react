import axios from "axios";

const createProduct = (data, saveImage, setShow) =>  async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("brand", data.brand);
        formData.append("size", data.size);
        formData.append("color", data.color);
        formData.append("price", data.price);
        formData.append("photo", saveImage);
        formData.append("description", data.description);
        const products = await axios.post(process.env.REACT_APP_API_BACKEND + "product", formData ,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(products);
        alert("crate product successful");
        setShow(false);
        const result = products.data.data;
        dispatch({ type: "CREATE_PRODUCT", payload: result });
    } catch (err) {
        console.error(err.message);
        alert("crate product failed");
        setShow(false);
    }
}

export default createProduct; 