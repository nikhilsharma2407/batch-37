import axios from "axios";

const instance = axios.create({ baseURL: '',withCredentials:true });

const ENDPOINTS = {
    LOGIN: 'user/login',
    SIGNUP: 'user/signup',
    LOGOUT: 'user/logout',
    RESET_PASSWORD: 'user/resetPassword',

    ADD_TO_CART:'cart/addToCart',
    INCREMENT: 'cart/increment',
    DECREMENT: 'cart/decrement',
    CLEAR_CART: 'cart/clearCart',
    REMOVE_FROM_CART: 'cart/removeFromCart',
    CHECKOUT: 'cart/checkout',
}

export const loginApi = (payload) => {
    return instance.post(ENDPOINTS.LOGIN, payload);
}

export const loginWithCookieApi = () => {
    return instance.get(ENDPOINTS.LOGIN);
}

export const signupApi = (payload) => {
    return instance.post(ENDPOINTS.SIGNUP, payload);
}

export const resetPasswordApi = (payload) => {
    return instance.patch(ENDPOINTS.RESET_PASSWORD, payload);
}

export const addToCartApi = (payload)=>{
    return instance.post(ENDPOINTS.ADD_TO_CART, payload);
} 

export const incrementQtyApi = (payload)=>{
    return instance.patch(ENDPOINTS.INCREMENT, payload);
} 

export const decrementQtyApi = (payload)=>{
    return instance.patch(ENDPOINTS.DECREMENT, payload);
}

export const clearCartApi = (payload)=>{
    return instance.post(ENDPOINTS.CLEAR_CART, payload);
}

export const removeFromCartApi = (payload)=>{
    return instance.post(ENDPOINTS.REMOVE_FROM_CART, payload);
}

export const logoutAPi = ()=>{
    return instance.get(ENDPOINTS.LOGOUT);
}

export const checkoutApi = ()=>{
    return instance.post(ENDPOINTS.CHECKOUT);
}