import { addToCartApi, loginApi, loginWithCookieApi, signupApi } from "../apiUtil";

const initialState = {
    name: '',
    username: '',
    success: '',
    message: '',
    cart: [],
    totalValue: 0,
    orders: [],
    data: null
}


const ACTIONS = {
    USER: {
        LOGIN: 'LOGIN',
        SIGNUP: 'SIGNUP',
        RESET_PASSWORD: 'RESET_PASSWORD',
    },
    CART: {
        GET: 'GET',
        CLEAR: 'CLEAR',
        ADD: 'ADD',
        REMOVE: 'REMOVE',
        INCREMENT: 'INCREMENT',
        DECREMENT: 'DECREMENT',
    }
};

const asyncActionCreator = (type, apiFn = () => { }, apiPayload) => {
    return async (dispatch) => {
        try {
            // startLoading
            const { data } = await apiFn(apiPayload);
            console.log(data);
            dispatch({ type, payload: data })
        } catch (error) {
            // console.error(error)
            // console.error(error.message)
            console.error(error.response.data.message)
            // upadte the message
        } finally{
            // stop loading
        }

    }
}

export const loginActionCreator = (apiPayload) => {
    // return async (dispatch) => {
    //     try {
    //         const { data } = await loginApi(apiPayload);
    //         console.log(data);
    //         dispatch({ type: ACTIONS.USER.LOGIN, payload: data })
    //     } catch (error) {
    //         // console.error(error)
    //         // console.error(error.message)
    //         console.error(error.response.data.message)
    //     }

    // }
    return asyncActionCreator(ACTIONS.USER.LOGIN, loginApi, apiPayload)
};

export const loginWithCookieActionCreator = () => {
    return asyncActionCreator(ACTIONS.USER.LOGIN, loginWithCookieApi)
};

export const singupActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.USER.SIGNUP, signupApi, apiPayload);
}

export const addToCartActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.CART.ADD, addToCartApi, apiPayload);
}


export const userReducer = (state = initialState, action) => {
    const { type, payload = {} } = action;
    const { data, success, message } = payload;
    switch (type) {
        case ACTIONS.USER.LOGIN:
        case ACTIONS.CART.ADD:
            return { ...state, ...data, message, success }

        case ACTIONS.USER.SIGNUP:
            return { ...state, data, message, success }

        default:
            return state
    }
}