import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
    const { message, success } = useSelector(({ user }) => user);
    console.log({success});
    if(message){
        if(success){
            toast.success(message);
        } else{
            toast.error(message)
        }
    }


    return (
        <ToastContainer />
    )
}

export default Toast
