import React, { Component } from 'react'

export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    // define initial state
    this.state = { value: 1, id: 1 }
  }

  render() {
    console.log(this.props);
    const { name } = this.props;
    const { value, id } = this.state;


    // const clickHandler = () => {
    function clickHandler(){

      // function decalaration have own value of this
      // this->calling object
      console.log(this);
      this.setState({ value: value + 10, xyz: 'xyz' });
      console.log(value);
    }

    return (
      <>
        <h1>Component A</h1>
        <h3>Hello {name}</h3>
        <h3>Current Value - {value}</h3>
        <h3>id - {id}</h3>
        <input type="number" min="1" max="10" value={id}
          onChange={e => this.setState({ id: parseInt(e.target.value) })} />

        <button onClick={clickHandler}>Click me</button>
        {/* <button onClick={() => this.setState({ value: value + id })}>Click me</button> */}
      </>
    )
  }
}
