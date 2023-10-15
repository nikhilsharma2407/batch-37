import axios from "axios";

const instance = axios.create({ baseURL: 'http://localhost:4000/',withCredentials:true });

const ENDPOINTS = {
    LOGIN: 'user/login',
    SIGNUP: 'user/signup',
    RESET_PASSWORD: 'user/resetPassword',
    ADD_TO_CART:'cart/addToCart',
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