import React, { Component } from 'react'

let reasonWhy = [
    "She just is",
    "She into coding",
    "Looks like a snack"
];

class ListOfReasons extends React.Component
{
  constructor(props){
    super(props);
    this.state = {counter: 1}
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1});
  }

  render(){
    let header1 = (<h1>Hey {this.props.title}, u sexy</h1>);
    return (
      <div>
        <p>
          Current Count: {this.state.counter}
        </p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ListOfReasons;


