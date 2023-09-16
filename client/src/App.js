import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import ComponentA from './ClassComponents/ComponentA';
import ComponentA from './FC/ComponentA';
import Flexbox from './Flexbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapDemo from './BootstrapDemo';


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
      <BootstrapDemo />
    </>
  );
}

export default App;