const initialState = {
    user: {
        fullname: '',
        email: '',
        role: ''
    },
    isLoading: false
}

const userReducer = (state = initialState, action) => {
    if (action.type === "GET_LOGIN_PENDING") {
        return {
            ...state,
            isLoading: true
        }
    } else if(action.type === "USER_LOGIN_SUCCESS"){
        return{
            ...state,
            isLoading: false
        }
    } else if(action.type === "USER_REGISTER_SUCCESS"){
        return{
            ...state,
            isLoading: false
        }
    } else{
        return state
    }
}

export default userReducer