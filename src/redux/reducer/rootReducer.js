import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import categoryReducer from "./categoryReducer";
import customerReducer from "./customerReducer";
import productReducer from "./productReducer";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    product: productReducer,
    users: userReducer,
    category: categoryReducer,
    transaction: transactionReducer,
    customer: customerReducer,
    address: addressReducer,
})

export default rootReducer;