const initialState = {
    transaction: [],
    transactionDetail: [],
    status: "waiting"
}

const transactionReducer = (state = initialState, action) => {
    console.log('action: ', action)
    if (action.type === "GET_ALL_TRANSACTION") {
        return {
            ...state,
            transaction: action.payload,
        }
    } else if (action.type === "GET_DETAIL_TRANSACTION") {
        return {
            ...state,
            transactionDetail: action.payload,
        }
    } else if(action.type  === "CREATE_TRANSACTION"){
        return {
            ...state,
            status: action.status
        };
    } else if(action.type  === "UPDATE_TRANSACTION"){
        return state;
    } else {
        return state;
    }
}

export default transactionReducer;