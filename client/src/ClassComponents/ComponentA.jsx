import React, { Component } from 'react'
import axios from 'axios';
export default class ComponentA extends Component {
  constructor(props) {
    // initialisation phase
    console.log('initialisation')
    super(props);
    // define initial state
    this.state = { value: 1, id: 1 }
  }

  render() {
    console.log('render', this.props);
    const { name } = this.props;
    const { value, id } = this.state;

    // Dont do this, for learning only;
    // this.setState({ value: this.state.value + 10 })

    // function clickHandler(){
    //   // function decalaration have own value of this
    //   // this->calling object
    //   console.log(this);
    //   this.setState({ value: value + 10, xyz: 'xyz' });
    //   console.log(value);
    // }

    const clickHandler = () => {
      // function clickHandler(){

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

  componentDidMount() {
    console.log('componentDidMount');
    document.title = 'Component A'
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    // console.log('previousPros', this.props);
    // console.log('nextProps', nextProps);
    // console.log('prevState', this.state);
    // console.log('nextState', nextState);

    // dont update if prop name is changing
    // if(nextProps.name){
    //   return false
    // }
    return true
  }

  // componentWillUpdate(){

  // }

  componentWillUpdate() {
    // same as componentWillUpdate
    console.log('component will update');
  }


  async componentDidUpdate() {
    console.log('componentDidUpdate');
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.id);
    console.log(data);
  }

  componentWillUnmount() {
    // component is removed from DOM 
    // housekeeping -> cleanup
    // remove the eventlisteners
    // 
    console.log('componentWillUnmount')
  }

}
