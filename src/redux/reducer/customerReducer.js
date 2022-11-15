const initialState = {
    customer: [],
    customerDetail: []
}

const customerReducer = (state = initialState, action) => {
    console.log('action: ', action)
    if (action.type === "GET_ALL_CUSTOMER") {
        return {
            ...state,
            customer: action.payload,
        }
    } else if (action.type === "GET_DETAIL_CUSTOMER") {
        return {
            ...state,
            customerDetail: action.payload,
        }
    } else if(action.type  === "UPDATE_CUSTOMER"){
        return state;
    } else if(action.type  === "UPDATE_PHOTO_CUSTOMER"){
        return state;
    } else if(action.type  === "DELETE_CUSTOMER"){
        return state;
    } else {
        return state;
    }
}

export default customerReducer;