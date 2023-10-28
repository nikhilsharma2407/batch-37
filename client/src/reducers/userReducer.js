import {
    addToCartApi, decrementQtyApi, incrementQtyApi, loginApi,
    loginWithCookieApi, signupApi, logoutAPi, removeFromCartApi, clearCartApi, checkoutApi, resetPasswordApi
} from "../apiUtil";

const initialState = {
    name: '',
    username: '',
    success: '',
    message: '',
    cart: [],
    totalValue: 0,
    totalCount: 0,
    orders: [],
    data: null,
    loading: false
}


const ACTIONS = {
    USER: {
        LOGIN: 'LOGIN',
        SIGNUP: 'SIGNUP',
        RESET_PASSWORD: 'RESET_PASSWORD',
        LOGOUT: 'LOGOUT',
    },
    CART: {
        GET: 'GET',
        CLEAR: 'CLEAR',
        ADD: 'ADD',
        REMOVE: 'REMOVE',
        INCREMENT: 'INCREMENT',
        DECREMENT: 'DECREMENT',
        CHECKOUT: 'CHECKOUT',
    },
    LOADING: 'LOADING',
    MESSAGE: 'MESSAGE',
};

const loadingActionCreator = (payload = false) => {
    return { type: ACTIONS.LOADING, payload }
}

const messageActionCreator = (payload = '') => {
    return { type: ACTIONS.MESSAGE, payload }
}

const asyncActionCreator = (type, apiFn = () => { }, apiPayload) => {
    return async (dispatch) => {
        try {
            // startLoading
            dispatch(loadingActionCreator(true));
            dispatch(messageActionCreator());
            const { data } = await apiFn(apiPayload);
            console.log(data);
            dispatch({ type, payload: data })
        } catch (error) {
            dispatch(messageActionCreator(error.response.data))
            console.error(error.response.data.message)
            // upadte the message
        } finally {
            // stop loading
            dispatch(loadingActionCreator());
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

export const signupActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.USER.SIGNUP, signupApi, apiPayload);
}

export const addToCartActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.CART.ADD, addToCartApi, apiPayload);
}

export const incrementQtyActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.CART.INCREMENT, incrementQtyApi, apiPayload);
}

export const decrementQtyActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.CART.DECREMENT, decrementQtyApi, apiPayload);
}

export const removeFromCartActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.CART.REMOVE, removeFromCartApi, apiPayload);
}

export const logoutActionCreator = () => {
    return asyncActionCreator(ACTIONS.USER.LOGOUT, logoutAPi);
}

export const clearCartActionCreator = () => {
    return asyncActionCreator(ACTIONS.CART.CLEAR, clearCartApi);
}

export const checkoutActionCreator = () => {
    return asyncActionCreator(ACTIONS.CART.CHECKOUT, checkoutApi);
}

export const resetPasswordActionCreator = (apiPayload) => {
    return asyncActionCreator(ACTIONS.USER.RESET_PASSWORD, resetPasswordApi, apiPayload);
}


export const userReducer = (state = initialState, action) => {
    const { type, payload = {} } = action;
    const { data, success, message } = payload;
    switch (type) {
        case ACTIONS.USER.LOGIN:
        case ACTIONS.CART.ADD:
        case ACTIONS.CART.INCREMENT:
        case ACTIONS.CART.DECREMENT:
        case ACTIONS.CART.REMOVE:
        case ACTIONS.CART.CLEAR:
        case ACTIONS.CART.CHECKOUT:
            // { cart:data.cart, name:data.name, totalValue:data.totalValue + all the state props }
            return { ...state, ...data, message, success };

        case ACTIONS.USER.SIGNUP:
            return { ...state, data, message, success };

        case ACTIONS.MESSAGE:
        case ACTIONS.USER.RESET_PASSWORD:
            return { ...state, message, success }
        case ACTIONS.LOADING:
            return { ...state, loading: payload };

        case ACTIONS.USER.LOGOUT:
            return { ...initialState, message, success };
        default:
            return state
    }
}