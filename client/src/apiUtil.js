import axios from "axios";

const instance = axios.create({ baseURL: 'http://localhost:4000/',withCredentials:true });

const ENDPOINTS = {
    LOGIN: 'user/login',
    SIGNUP: 'user/signup',
    RESET_PASSWORD: 'user/resetPassword',
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
