import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import ComponentA from './ClassComponents/ComponentA';
import ComponentA from './FC/ComponentA';
import Flexbox from './Flexbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapDemo from './BootstrapDemo';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import Counter from './Counter';


function App() {
  const [name, setName] = useState('test');
  const [showComponent, setshowComponent] = useState(true);
  const prop1 = 'abcd';

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
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='flex' element={<Flexbox />} />
          <Route path='bootstrap' element={<BootstrapDemo />} />
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='counter' element={<Counter />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
