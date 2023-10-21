import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
// import ComponentA from './ClassComponents/ComponentA';
import ComponentA from './FC/ComponentA';
import Flexbox from './Flexbox';
import BootstrapDemo from './BootstrapDemo';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import Counter from './Counter';
import Loader from './Loader';
import Toast from './Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginWithCookieActionCreator } from './reducers/userReducer';


function App() {

  const dispatch = useDispatch();

  const [name, setName] = useState('test');
  const [showComponent, setshowComponent] = useState(true);
  const prop1 = 'abcd';

  useEffect(() => {
    dispatch(loginWithCookieActionCreator());
  }, [])


  // const name = 'Nikhil';
  return (
    <>
      {/* <button onClick={() => setshowComponent(!showComponent)}>{showComponent ? 'unmount ' : 'mount '}component</button>
      <button onClick={() => setName('Nikhil')}>Update Name</button>
      {showComponent ? <ComponentA name={name} prop1={prop1} /> : null} */}
      {/* <Flexbox /> */}
      {/* <BootstrapDemo /> */}
      <BrowserRouter>
        <MyNavbar />
        <Loader />
        <Toast />
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='flex' element={<Flexbox />} />
          <Route path='bootstrap' element={<BootstrapDemo />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='counter' element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
