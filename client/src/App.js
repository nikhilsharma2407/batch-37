import logo from './logo.svg';
import ComponentA from './ClassComponents/ComponentA';
import './App.css';
import React from 'react';

function App() {
  const name = 'Nikhil';
  const prop1 = 'abcd';
  return (
    <>
      <ComponentA name={name} prop1={prop1} />
    </>
  );
}

export default App;
