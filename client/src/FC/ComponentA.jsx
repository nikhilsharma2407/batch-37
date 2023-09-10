import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ComponentA({ name }) {
  // defined the initial state;
  const [value, setValue] = useState(1);
  const [id, setId] = useState(1);
  const [userData, setUserdata] = useState([]);

  const URL = 'https://jsonplaceholder.typicode.com/users/';
  // used to run side-effects
  // never use like this
  // useEffect(()=>{
  //   console.log('without dependency array');
  // })

  useEffect(() => {
    console.log('with empty dependency array similar to ComponentDidMount');
    //  fetch all user details.

    (async () => {
      const { data } = await axios.get(URL);
      console.log(data);
      setUserdata(data)
    })()

    return () => {
      console.log('this function will run when component is unmounted');
    }

  }, [])

  useEffect(() => {
    (async () => {
      console.log('running useEffect with dep array [id]', id);
      const { data } = await axios.get(URL + id);
      console.log(data);
    })()
  }, [id])

  // console.log('render', props);
  // const { name } = props;

  const clickHandler = () => {
    setValue(value + 10);
    console.log(value);
  }

  return (
    <>
      <h1>Component A</h1>
      <h3>Hello {name}</h3>
      <h3>Current Value - {value}</h3>
      <h3>id - {id}</h3>
      <input type="number" min="1" max="10" value={id}
        onChange={e => setId(parseInt(e.target.value))} />

      <button onClick={clickHandler}>Click me</button>
      {/* <button onClick={() => this.setState({ value: value + id })}>Click me</button> */}
      {userData.map(user => <h1 key={user.id}>{user.name}</h1>)}
    </>
  )
}

export default ComponentA